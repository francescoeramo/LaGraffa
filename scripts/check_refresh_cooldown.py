"""Skip duplicate manual collections; called inside the serialized workflow."""
import json
import os
import time
from pathlib import Path


def should_collect(event, timestamp, now):
    return event != "workflow_dispatch" or now - float(timestamp) >= 15 * 60


if __name__ == "__main__":
    timestamp = json.loads(Path("news.json").read_text())["timestamp"]
    collect = should_collect(os.environ.get("GITHUB_EVENT_NAME"), timestamp, time.time())
    with open(os.environ["GITHUB_OUTPUT"], "a") as output:
        output.write(f"collect={'true' if collect else 'false'}\n")
    if not collect:
        print("Raccolta manuale saltata: dati aggiornati da meno di 15 minuti.")
