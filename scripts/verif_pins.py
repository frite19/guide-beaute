"""Verification des 7 pins de 'pin 2' : fichiers, dimensions, longueurs, liens, claims interdits."""
import os
import re
import sys
import urllib.request
from PIL import Image

BASE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "pin 2")
MD = os.path.join(BASE, "PINS-A-PUBLIER.md")

FORBIDDEN = [
    "5 attachments", "5-in-1", "five attachments", "cool shot",
    "serum foundation", "spf 15", "niacinamide", "99%", "bestseller",
]


def main():
    md = open(MD, encoding="utf-8").read()
    blocks = md.split("## JOUR ")[1:]
    print(f"Pins trouves dans le .md : {len(blocks)}\n")
    errors = []
    for b in blocks:
        day = b.splitlines()[0].strip()
        vis = re.search(r"\*\*Visuel\*\* : `([^`]+)`", b).group(1)
        title = re.search(r"\*\*Titre\*\* : (.+)", b).group(1).strip()
        desc = re.search(r"\*\*Description\*\* : (.+)", b).group(1).strip()
        link = re.search(r"\*\*Lien\*\* : (\S+)", b).group(1).strip()
        board = re.search(r"\*\*Tableau\*\* : (.+)", b).group(1).strip()

        path = os.path.join(BASE, vis)
        size = "MANQUANT"
        if os.path.exists(path):
            size = "x".join(map(str, Image.open(path).size))
        if size != "1000x1500":
            errors.append(f"{day}: image {vis} -> {size}")

        if len(title) > 100:
            errors.append(f"{day}: titre {len(title)} car. (>100)")
        if len(desc) > 500:
            errors.append(f"{day}: description {len(desc)} car. (>500)")
        if not link.startswith("https://guide-beaute.pages.dev/"):
            errors.append(f"{day}: lien hors site {link}")

        low = (title + " " + desc).lower()
        bad = [w for w in FORBIDDEN if w in low]
        if bad:
            errors.append(f"{day}: claims interdits {bad}")

        try:
            req = urllib.request.Request(link, method="HEAD", headers={"User-Agent": "Mozilla/5.0"})
            code = urllib.request.urlopen(req, timeout=20).getcode()
        except Exception as e:
            code = f"ERR {e}"
        if code != 200:
            errors.append(f"{day}: lien HTTP {code} -> {link}")

        print(f"{day:14} | {vis:38} | {size:9} | titre {len(title):3} | desc {len(desc):3} | HTTP {code}")

    print("\n" + ("TOUT EST OK" if not errors else "A CORRIGER :\n- " + "\n- ".join(errors)))
    return 0 if not errors else 1


if __name__ == "__main__":
    sys.exit(main())
