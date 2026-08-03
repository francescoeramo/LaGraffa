import importlib.util
import unittest
from pathlib import Path


MODULE_PATH = Path(__file__).parents[1] / "scripts" / "fetch_news.py"
SPEC = importlib.util.spec_from_file_location("fetch_news", MODULE_PATH)
fetch_news = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(fetch_news)


class FetchNewsTests(unittest.TestCase):
    def test_canonical_url_removes_tracking_and_fragment(self):
        value = "https://Example.com/story/?utm_source=x&id=7#section"
        self.assertEqual(fetch_news.canonical_url(value), "https://example.com/story?id=7")

    def test_stable_id_does_not_depend_on_position(self):
        entry = {"id": "https://example.com/story"}
        first = fetch_news.stable_id("Fonte", entry, entry["id"], "Titolo")
        second = fetch_news.stable_id("Fonte", entry, entry["id"], "Titolo cambiato")
        self.assertEqual(first, second)
        self.assertRegex(first, r"^[a-f0-9]{20}$")

    def test_promotional_content_is_rejected(self):
        self.assertTrue(fetch_news.is_low_value("Starter kit at lowest price", "Prime Day deal"))

    def test_language_detection(self):
        self.assertEqual(fetch_news.detect_language("Il governo approva la legge con il voto della Camera"), "it")
        self.assertEqual(fetch_news.detect_language("The government approves the law after a vote"), "en")
        self.assertEqual(fetch_news.detect_language("El gobierno aprueba la ley después del voto"), "es")

    def test_weak_economy_word_does_not_move_general_news(self):
        entry = {"title": "Terremoto, riaperto il porto", "summary": "Danni per il commercio locale"}
        category, _score = fetch_news.classify_entry(entry, {"name": "ANSA", "cat": "politica-italiana"})
        self.assertEqual(category, "politica-italiana")

    def test_strong_ai_signal_moves_general_news(self):
        entry = {"title": "AI Act e tutela dei dati", "summary": "Il Garante interviene sull'intelligenza artificiale"}
        category, _score = fetch_news.classify_entry(entry, {"name": "ANSA", "cat": "politica-italiana"})
        self.assertEqual(category, "ai")

    def test_similar_same_source_items_are_duplicates(self):
        existing = [{
            "title": "Il governo approva la nuova legge sul lavoro",
            "summary": "Il governo approva la nuova legge sul lavoro dopo il voto finale in parlamento",
            "source": "ANSA", "url": "https://example.com/a"
        }]
        candidate = {
            "title": "Nuova legge sul lavoro approvata dal governo",
            "summary": "Dopo il voto finale in parlamento il governo approva la nuova legge sul lavoro",
            "source": "ANSA", "url": "https://example.com/b"
        }
        self.assertTrue(fetch_news.is_duplicate(candidate, existing))

    def test_requested_publishers_are_configured_with_working_feed_urls(self):
        sources = {source["name"]: source["url"] for source in fetch_news.RSS_SOURCES}
        self.assertEqual(sources["Facta"], "https://www.facta.news/feed.xml")
        self.assertEqual(sources["Internazionale"], "https://www.internazionale.it/subscribe/opinioni/")
        self.assertEqual(sources["Limes"], "https://www.limesonline.com/rss")
        self.assertEqual(sources["Pagella Politica"], "https://pagellapolitica.it/feed.xml")
        self.assertGreater(fetch_news.ANALYSIS_MAX_AGE_HOURS, fetch_news.MAX_AGE_HOURS)

    def test_complete_feed_summary_is_not_truncated(self):
        ending = "Dettaglio conclusivo indispensabile."
        summary = ("Contesto e conseguenze della notizia. " * 120) + ending
        body = fetch_news.build_body({"summary": summary})
        self.assertGreater(len(body), 3000)
        self.assertTrue(body.endswith(ending))

    def test_generic_labels_are_not_accepted_as_complete_excerpts(self):
        self.assertFalse(fetch_news.has_complete_excerpt(
            "Il riassunto geopolitico degli ultimi sette giorni.", "Limes"
        ))
        self.assertTrue(fetch_news.has_complete_excerpt(
            "La crisi modifica i rapporti regionali, coinvolge i governi europei e produce conseguenze economiche già misurabili.",
            "Limes",
        ))


if __name__ == "__main__":
    unittest.main()
