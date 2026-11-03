import unittest
from scripts.check_refresh_cooldown import should_collect

class RefreshCooldownTests(unittest.TestCase):
    def test_manual_refresh_waits_fifteen_minutes(self):
        self.assertFalse(should_collect('workflow_dispatch', 1000, 1899))
        self.assertTrue(should_collect('workflow_dispatch', 1000, 1900))

    def test_scheduled_and_code_changes_are_not_skipped(self):
        for event in ('schedule', 'push'):
            self.assertTrue(should_collect(event, 1000, 1001))
