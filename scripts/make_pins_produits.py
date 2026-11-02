"""Compose les 2 pins produits : P16 (medicube toner pads), P17 (eos lotion).

Angle commun : « lire l'etiquette », pas « tester le produit ». Aucune photo
Amazon n'est utilisee : les visuels viennent de photos Pexels libres
(voir CREDITS plus bas), recadrees puis posees sur le bandeau creme ECLATIA.

Entree  : docs/contenus-a-valider/visuels/produits/base-Pxx.jpg
Sortie  : docs/contenus-a-valider/visuels/produits/pin-Pxx.jpg  (1000 x 1500)

CREDITS
  P16 : Pexels 9775159 (cotton pads on the cheeks, pink backdrop)
  P17 : Pexels 10157940 (lotion squeezed from a tube onto the back of a hand)
"""
import os
import sys

from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from make_pins_body_oil import ACCENT, CREAM, H, INK, LINE, PANEL_H, SEGOE_B, W, fit_font, spaced  # noqa: E402

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "produits")

# (code, fichier source, box de recadrage dans la source, kicker, lignes)
JOBS = [
    (
        "P16",
        "base-P16.jpg",
        (100, 0, 1500, 1428),
        "TONER PADS",
        ["What \u201cPDRN 99%\u201d", "actually means"],
    ),
    (
        "P17",
        "base-P17.jpg",
        (120, 0, 1165, 1067),
        "BEFORE YOU BUY",
        ["The photo says Cocoa.", "The label says Caramel."],
    ),
]


def compose(code, src_name, box, kicker, lines):
    src = os.path.join(BASE, src_name)
    photo = Image.open(src).convert("RGB").crop(box)

    target_h = H - PANEL_H
    scale = target_h / photo.height
    photo = photo.resize((round(photo.width * scale), target_h), Image.LANCZOS)
    if photo.width > W:
        left = (photo.width - W) // 2
        photo = photo.crop((left, 0, left + W, target_h))

    canvas = Image.new("RGB", (W, H))
    canvas.paste(photo, ((W - photo.width) // 2, 0))
    d = ImageDraw.Draw(canvas)

    d.rectangle([0, H - PANEL_H, W, H], fill=CREAM)
    d.rectangle([0, H - PANEL_H, W, H - PANEL_H + 1], fill=LINE)

    x = 72
    fk = ImageFont.truetype(SEGOE_B, 25)
    spaced(d, (x, H - PANEL_H + 58), kicker, fk, ACCENT, 4)
    d.rectangle([x, H - PANEL_H + 104, x + 54, H - PANEL_H + 107], fill=ACCENT)

    f, size = fit_font(d, lines, W - 2 * x)
    lh = round(size * 1.22)
    y = H - PANEL_H + 140
    for l in lines:
        d.text((x - 2, y), l, font=f, fill=INK)
        y += lh

    fs = ImageFont.truetype(SEGOE_B, 21)
    label = "ECLATIA"
    tw = sum(d.textlength(c, font=fs) + 5 for c in label) - 5
    spaced(d, (W - x - tw, H - 62), label, fs, ACCENT, 5)

    out = os.path.join(BASE, f"pin-{code}.jpg")
    canvas.save(out, quality=92, optimize=True)
    print("ok", out, canvas.size, os.path.getsize(out) // 1024, "Ko")


if __name__ == "__main__":
    for job in JOBS:
        compose(*job)
