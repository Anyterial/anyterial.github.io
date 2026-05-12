#!/usr/bin/env python3

from pathlib import Path

from httk.web import publish

ROOT = Path(__file__).parent
BASEURL = "http://127.0.0.1/"
USE_URLS_WITHOUT_EXT = False

report = publish(ROOT / "src", ROOT / "public", BASEURL, use_urls_without_ext=USE_URLS_WITHOUT_EXT)

for warning in report.warnings:
    print(f"WARNING: {warning}")

print("*****")
print("Now open public/index.html in your web browser.")
print("*****")
