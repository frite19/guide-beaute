"""Reconstruit le pin P05 sans l'artefact situe en haut de base-P05.jpg.

La photo est recadree sous la bande defectueuse (y >= 650), puis remise au
format du visuel (1000 x 1020 de photo + bandeau creme de 480 px).
Le reste de la mise en page reprend celle de make_pins_body_oil.py.
"""
import os
import sys

from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from make_pins_body_oil import ACCENT, BASE, CREAM, H, INK, LINE, PANEL_H, SEGOE_B, W, fit_font, spaced  # noqa: E402

CODE = "P05"
KICKER = "BODY OIL"
LINES = ["Glow without", "the grease"]
CROP_TOP = 650


def build():
    src = os.path.join(BASE, f"base-{CODE}.jpg")
    photo = Image.open(src).convert("RGB").crop((0, CROP_TOP, W, 1500))
    target_h = H - PANEL_H
    scale = target_h / photo.height
    photo = photo.resize((round(photo.width * scale), target_h), Image.LANCZOS)
    left = (photo.width - W) // 2
    photo = photo.crop((left, 0, left + W, target_h))

    canvas = Image.new("RGB", (W, H))
    canvas.paste(photo, (0, 0))
    d = ImageDraw.Draw(canvas)

    d.rectangle([0, H - PANEL_H, W, H], fill=CREAM)
    d.rectangle([0, H - PANEL_H, W, H - PANEL_H + 1], fill=LINE)

    x = 72
    fk = ImageFont.truetype(SEGOE_B, 25)
    spaced(d, (x, H - PANEL_H + 58), KICKER, fk, ACCENT, 4)
    d.rectangle([x, H - PANEL_H + 104, x + 54, H - PANEL_H + 107], fill=ACCENT)

    f, size = fit_font(d, LINES, W - 2 * x)
    lh = round(size * 1.22)
    y = H - PANEL_H + 140
    for l in LINES:
        d.text((x - 2, y), l, font=f, fill=INK)
        y += lh

    fs = ImageFont.truetype(SEGOE_B, 21)
    label = "ECLATIA"
    tw = sum(d.textlength(c, font=fs) + 5 for c in label) - 5
    spaced(d, (W - x - tw, H - 62), label, fs, ACCENT, 5)

    out = os.path.join(BASE, f"pin-{CODE}.jpg")
    canvas.save(out, quality=92, optimize=True)
    print("ok", out, canvas.size, os.path.getsize(out) // 1024, "Ko")


if __name__ == "__main__":
    build()
