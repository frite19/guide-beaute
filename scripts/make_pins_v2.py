"""Version 2 des pins P16 / P17 : photo encadree (marges creme) + bandeau bas.

Meme texte verifie que la version 1, mise en page differente : la photo est
encadree comme un tirage, ce qui distingue nettement ce visuel des pins deja
publies (photo pleine largeur).

Entree  : visuels/produits/base-P16.jpg  (Pexels 9775159, 1600 x 2400)
          visuels/produits/base-P17.jpg  (Pexels 10157940, 1600 x 1067)
Sortie  : visuels/produits/v2/pin-P16.jpg et pin-P17.jpg (1000 x 1500)
"""
import os
import sys

from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from make_pins_body_oil import ACCENT, CREAM, H, INK, LINE, SEGOE_B, W, fit_font, spaced  # noqa: E402

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "produits")
OUT = os.path.join(BASE, "v2")

MARGIN = 44
PHOTO_TOP = 44
PHOTO_W = W - 2 * MARGIN
PHOTO_H = 1000

JOBS = [
    (
        "P16",
        "base-P16.jpg",
        "TONER PADS",
        ["What \u201cPDRN 99%\u201d", "actually means"],
        "70 pads, 120 ml \u2014 and what the ingredient list really names",
        60,
    ),
    (
        "P17",
        "base-P17.jpg",
        "BEFORE YOU BUY",
        ["The photo says Cocoa.", "The label says Caramel."],
        "Two travel tubes, 2.5 fl oz each \u2014 check the scent name",
        None,
    ),
]


def compose(code, src_name, kicker, lines, subline, top_off=None):
    im = Image.open(os.path.join(BASE, src_name)).convert("RGB")

    # Recadrage au ratio du cadre photo (top_off = None -> centrage vertical).
    target = PHOTO_W / PHOTO_H
    if im.width / im.height > target:
        new_w = round(im.height * target)
        left = (im.width - new_w) // 2
        im = im.crop((left, 0, left + new_w, im.height))
    else:
        new_h = round(im.width / target)
        top = (im.height - new_h) // 2 if top_off is None else top_off
        top = max(0, min(top, im.height - new_h))
        im = im.crop((0, top, im.width, top + new_h))
    im = im.resize((PHOTO_W, PHOTO_H), Image.LANCZOS)

    canvas = Image.new("RGB", (W, H), CREAM)
    canvas.paste(im, (MARGIN, PHOTO_TOP))
    d = ImageDraw.Draw(canvas)
    d.rectangle([MARGIN, PHOTO_TOP, MARGIN + PHOTO_W, PHOTO_TOP + PHOTO_H], outline=LINE, width=1)

    x = 72
    y0 = PHOTO_TOP + PHOTO_H + 56
    fk = ImageFont.truetype(SEGOE_B, 24)
    spaced(d, (x, y0), kicker, fk, ACCENT, 4)
    d.rectangle([x, y0 + 46, x + 54, y0 + 49], fill=ACCENT)

    f, size = fit_font(d, lines, W - 2 * x, start=62, minimum=40)
    lh = round(size * 1.22)
    y = y0 + 80
    for l in lines:
        d.text((x - 2, y), l, font=f, fill=INK)
        y += lh

    fs = ImageFont.truetype(SEGOE_B, 19)
    d.text((x, H - 116), subline, font=fs, fill=ACCENT)

    fm = ImageFont.truetype(SEGOE_B, 21)
    label = "ECLATIA"
    tw = sum(d.textlength(c, font=fm) + 5 for c in label) - 5
    spaced(d, (W - x - tw, H - 66), label, fm, ACCENT, 5)

    os.makedirs(OUT, exist_ok=True)
    out = os.path.join(OUT, f"pin-{code}.jpg")
    canvas.save(out, quality=92)
    print("ok", out, canvas.size, os.path.getsize(out) // 1024, "Ko")


if __name__ == "__main__":
    for job in JOBS:
        compose(*job)
