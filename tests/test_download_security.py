import importlib.util
import io
import unittest
from pathlib import Path
from unittest.mock import Mock, patch

import requests
from requests.adapters import BaseAdapter


SPEC = importlib.util.spec_from_file_location(
    "news_download_security", Path(__file__).parents[1] / "scripts" / "fetch_news.py"
)
news = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(news)


class Response:
    status_code = 200

    def __init__(self, chunks, headers=None):
        self.chunks = chunks
        self.headers = headers or {}
        self.closed = False
        self.consumed = 0

    @property
    def content(self):
        return self._content

    def raise_for_status(self):
        pass

    def iter_content(self, chunk_size):
        for chunk in self.chunks:
            self.consumed += 1
            yield chunk

    def close(self):
        self.closed = True


class DownloadSecurityTests(unittest.TestCase):
    def download(self, response):
        with patch.object(news, "MAX_DOWNLOAD_BYTES", 8), \
             patch.object(news, "is_allowed_publisher_url", return_value=True), \
             patch.object(news, "is_public_http_url", return_value=True), \
             patch.object(news.requests, "get", return_value=response) as get:
            result = news.fetch_public_document("https://publisher.example/feed", "Dummy")
            self.assertTrue(get.call_args.kwargs["stream"])
            self.assertFalse(get.call_args.kwargs["allow_redirects"])
            return result

    def test_rss_rejects_private_redirect_before_request_dispatch(self):
        seen = []

        class Adapter(BaseAdapter):
            def send(self, request, **kwargs):
                seen.append(request.url)
                response = requests.Response()
                response.request = request
                response.url = request.url
                response.status_code = 302
                response.headers["Location"] = "http://127.0.0.1:18080/dummy"
                response.raw = io.BytesIO(b"")
                response._content = b""
                response._content_consumed = True
                return response

            def close(self):
                pass

        with requests.Session() as session:
            session.trust_env = False
            session.mount("https://", Adapter())
            session.mount("http://", Adapter())
            with patch.object(news, "is_allowed_publisher_url", return_value=True), \
                 patch.object(news, "is_public_http_url", side_effect=lambda url: url.startswith("https://publisher.example/")):
                result = news.fetch_public_document("https://publisher.example/feed", "Dummy", session)
        self.assertIsNone(result)
        self.assertEqual(seen, ["https://publisher.example/feed"])

    def test_rss_rejects_redirect_outside_publisher(self):
        response = Response([])
        response.status_code = 302
        response.headers = {"location": "https://other.example/feed"}
        with patch.object(news, "PUBLISHER_DOMAINS", {"Dummy": {"publisher.example"}}), \
             patch.object(news, "is_public_http_url", return_value=True), \
             patch.object(news.requests, "get", return_value=response) as get:
            self.assertIsNone(news.fetch_public_document("https://publisher.example/feed", "Dummy"))
            self.assertEqual(get.call_count, 1)
        self.assertTrue(response.closed)

    def test_decoded_chunks_are_bounded_with_absent_or_misleading_length(self):
        for headers in ({}, {"content-length": "1"}):
            with self.subTest(headers=headers):
                response = Response([b"12345678", b"9", b"unread"], headers)
                self.assertIsNone(self.download(response))
                self.assertEqual(response.consumed, 2)
                self.assertTrue(response.closed)

    def test_exact_limit_is_available_after_closing_response(self):
        response = Response([b"1234", b"5678"])
        self.assertIs(self.download(response), response)
        self.assertEqual(response.content, b"12345678")
        self.assertTrue(response.closed)

    def test_rejects_oversized_or_invalid_declared_length_without_reading(self):
        for value in ("9", "-1", "invalid"):
            with self.subTest(value=value):
                response = Response([b"unread"], {"content-length": value})
                self.assertIsNone(self.download(response))
                self.assertEqual(response.consumed, 0)
                self.assertTrue(response.closed)

    def test_closes_response_on_http_or_stream_error(self):
        for method in ("raise_for_status", "iter_content"):
            with self.subTest(method=method):
                response = Response([])
                setattr(response, method, Mock(side_effect=requests.RequestException("dummy error")))
                with self.assertRaises(requests.RequestException):
                    self.download(response)
                self.assertTrue(response.closed)

    def test_fetch_all_never_parses_rejected_feed_and_continues(self):
        sources = [
            {"name": "Dummy1", "url": "https://one.example/feed", "cat": "ai"},
            {"name": "Dummy2", "url": "https://two.example/feed", "cat": "ai"},
        ]
        with patch.object(news, "RSS_SOURCES", sources), \
             patch.object(news, "fetch_public_document", return_value=None) as download, \
             patch.object(news.feedparser, "parse") as parse:
            with self.assertRaisesRegex(RuntimeError, "esistente preservato"):
                news.fetch_all()
        self.assertEqual(download.call_count, 2)
        parse.assert_not_called()


if __name__ == "__main__":
    unittest.main()
