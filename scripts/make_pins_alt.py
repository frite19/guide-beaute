"""Decline les visuels P16 / P17 sur les photos generees (FLUX.1-schnell).

Les images sources sont dans visuels/produits/gen/ (1024 x 1536). Chaque
variante garde le meme bandeau creme et le meme texte que la version publiee,
seule la photo change : c'est ce qui permet de comparer les choix a l'ecran.

Sortie : visuels/produits/alt/pin-P16-<n>.jpg etc. (1000 x 1500)
"""
import os
import sys

from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from make_pins_body_oil import ACCENT, CREAM, H, INK, LINE, PANEL_H, SEGOE_B, W, fit_font, spaced  # noqa: E402

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "produits")
OUT = os.path.join(BASE, "alt")

# (code de sortie, fichier source, haut du recadrage, kicker, lignes)
JOBS = [
    ("P16-1", "P16-alt1.png", 120, "TONER PADS", ["What \u201cPDRN 99%\u201d", "actually means"]),
    ("P16-2", "P16-alt2.png", 260, "TONER PADS", ["What \u201cPDRN 99%\u201d", "actually means"]),
    ("P16-3", "P16-alt3.png", 300, "TONER PADS", ["What \u201cPDRN 99%\u201d", "actually means"]),
    ("P17-1", "P17-alt1.png", 200, "BEFORE YOU BUY", ["The photo says Cocoa.", "The label says Caramel."]),
    ("P17-2", "P17-alt2.png", 200, "BEFORE YOU BUY", ["The photo says Cocoa.", "The label says Caramel."]),
    ("P17-3", "P17-alt3.png", 0, "BEFORE YOU BUY", ["The photo says Cocoa.", "The label says Caramel."]),
]

PHOTO_W, PHOTO_H = W, H - PANEL_H


def compose(code, src_name, top, kicker, lines):
    src = os.path.join(BASE, "gen", src_name)
    im = Image.open(src).convert("RGB")

    # Recadrage au ratio du bloc photo, puis redimensionnement exact.
    crop_h = round(im.width * PHOTO_H / PHOTO_W)
    if crop_h > im.height:
        crop_w = round(im.height * PHOTO_W / PHOTO_H)
        left = (im.width - crop_w) // 2
        im = im.crop((left, 0, left + crop_w, im.height))
    else:
        top = max(0, min(top, im.height - crop_h))
        im = im.crop((0, top, im.width, top + crop_h))

    photo = im.resize((PHOTO_W, PHOTO_H), Image.LANCZOS)

    canvas = Image.new("RGB", (W, H))
    canvas.paste(photo, (0, 0))
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

    os.makedirs(OUT, exist_ok=True)
    out = os.path.join(OUT, f"pin-{code}.jpg")
    canvas.save(out, quality=92)
    print("ok", out, canvas.size, os.path.getsize(out) // 1024, "Ko")


if __name__ == "__main__":
    for job in JOBS:
        compose(*job)
