"""Variante P20 a partir d'une photo reelle (Pexels 7440133).

But : remplacer l'image KlingAI dont la main est anatomiquement fausse.
La photo source est une vraie prise de vue (mains naturelles), licence Pexels.
Aucun logo de marque lisible : on garde le cadrage sur les mains et les cheveux.

Sortie : visuels/hair/pin-P20-b.jpg / .png  (1000 x 1500)

Usage : python scripts/pin_p20_alt.py [chemin_source] [cx] [cy]
"""
import os
import sys

from PIL import Image, ImageDraw, ImageFont

from make_pins_body_oil import ACCENT, CREAM, INK, LINE, SEGOE_B, spaced, fit_font
from make_pins_hair import crop_fill

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "hair")
W, H = 1000, 1500
PANEL_H = 500
TMP = os.path.join(os.environ["LOCALAPPDATA"], "Temp", "opencode", "pex-7440133.jpg")


def chip(d, xy, text, font):
    x, y = xy
    tw = sum(d.textlength(c, font=font) + 3 for c in text) - 3
    pad_x, pad_y = 14, 9
    d.rectangle([x, y, x + tw + 2 * pad_x, y + font.size + 2 * pad_y], fill=CREAM)
    spaced(d, (x + pad_x, y + pad_y - 2), text, font, ACCENT, 3)


def compose(src, code, kicker, lines, sub, chip_label, cx, cy):
    photo = crop_fill(Image.open(src).convert("RGB"), W, H - PANEL_H, cx, cy)
    canvas = Image.new("RGB", (W, H), CREAM)
    canvas.paste(photo, (0, 0))

    d = ImageDraw.Draw(canvas)
    d.rectangle([0, 0, W - 1, H - PANEL_H - 1], outline=LINE, width=1)
    chip(d, (28, 28), chip_label, ImageFont.truetype(SEGOE_B, 19))

    d.rectangle([0, H - PANEL_H, W, H], fill=CREAM)
    d.rectangle([0, H - PANEL_H, W, H - PANEL_H + 1], fill=LINE)

    x = 72
    spaced(d, (x, H - PANEL_H + 62), kicker, ImageFont.truetype(SEGOE_B, 25), ACCENT, 4)
    d.rectangle([x, H - PANEL_H + 108, x + 54, H - PANEL_H + 111], fill=ACCENT)

    f, size = fit_font(d, lines, W - 2 * x)
    lh = round(size * 1.2)
    y = H - PANEL_H + 150
    for line in lines:
        d.text((x - 2, y), line, font=f, fill=INK)
        y += lh

    if sub:
        d.text((x, y + 16), sub, font=ImageFont.truetype(SEGOE_B, 26), fill=ACCENT)

    fs = ImageFont.truetype(SEGOE_B, 21)
    tw = sum(d.textlength(c, font=fs) + 5 for c in "ECLATIA") - 5
    spaced(d, (W - x - tw, H - 62), "ECLATIA", fs, ACCENT, 5)

    jpg = os.path.join(BASE, f"pin-{code}.jpg")
    canvas.save(jpg, quality=92, optimize=True)
    canvas.save(os.path.join(BASE, f"pin-{code}.png"), optimize=True)
    print("pin", code, canvas.size, os.path.getsize(jpg) // 1024, "Ko")


if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else TMP
    cx = float(sys.argv[2]) if len(sys.argv) > 2 else 0.42
    cy = float(sys.argv[3]) if len(sys.argv) > 3 else 0.58
    compose(
        src, "P20-b",
        "BEFORE YOU BUY",
        ["Not sure about", "the viral brush?"],
        "Two simpler options.",
        "HAIR TOOLS",
        cx, cy,
    )
