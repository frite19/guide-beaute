"""Compose une serie de pins 1000 x 1500 a partir de photos reelles (Pexels).

Charte identique a make_pins_kling : bandeau creme, kicker accent, 2 lignes
serif, sous-titre, signature ECLATIA. Les zones de marque tierce eventuelles
sont floutees par `blurs` (boites en proportion de l'image source).

Usage :
    python scripts/make_pins_series.py
"""
import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont

from make_pins_body_oil import ACCENT, CREAM, INK, LINE, SEGOE_B, spaced, fit_font
from make_pins_hair import crop_fill

BASE = os.path.join("docs", "contenus-a-valider", "visuels")
TMP = os.path.join(os.environ["LOCALAPPDATA"], "Temp", "opencode")
W, H = 1000, 1500
PANEL_H = 500


def chip(d, xy, text, font):
    x, y = xy
    tw = sum(d.textlength(c, font=font) + 3 for c in text) - 3
    pad_x, pad_y = 14, 9
    d.rectangle([x, y, x + tw + 2 * pad_x, y + font.size + 2 * pad_y], fill=CREAM)
    spaced(d, (x + pad_x, y + pad_y - 2), text, font, ACCENT, 3)


def blur_boxes(im, boxes):
    """Floute des zones (marque tierce lisible) exprimees en proportions."""
    if not boxes:
        return im
    w, h = im.size
    for (x0, y0, x1, y1) in boxes:
        box = (int(x0 * w), int(y0 * h), int(x1 * w), int(y1 * h))
        region = im.crop(box).filter(ImageFilter.GaussianBlur(radius=max(4, w // 120)))
        im.paste(region, box)
    return im


def compose(src, out_dir, code, chip_label, kicker, lines, sub, cx=0.5, cy=0.5, blurs=None):
    im = Image.open(src).convert("RGB")
    im = blur_boxes(im, blurs)
    photo = crop_fill(im, W, H - PANEL_H, cx, cy)

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

    os.makedirs(out_dir, exist_ok=True)
    jpg = os.path.join(out_dir, f"pin-{code}.jpg")
    canvas.save(jpg, quality=92, optimize=True)
    canvas.save(os.path.join(out_dir, f"pin-{code}.png"), optimize=True)
    print("pin", code, os.path.getsize(jpg) // 1024, "Ko")


PINS = [
    # 13/11 — Revlon Compact 1875 W (page produit)
    dict(
        code="P23",
        src=os.path.join(TMP, "pex-28994570.jpg"),
        chip_label="1875 W DRYER",
        kicker="TRAVEL DRYER",
        lines=["Power, yes.", "Styling, no."],
        sub="What 1875 W buys you.",
        cx=0.60, cy=0.45,
        blurs=None,
    ),
    # 14/11 — Naturium Glow Getter (page produit)
    dict(
        code="P24",
        src=os.path.join(TMP, "pex-5888066.jpg"),
        chip_label="OIL BODY WASH",
        kicker="OIL-TO-LATHER",
        lines=["It looks like oil.", "It still cleans."],
        sub="Surfactants included.",
        cx=0.52, cy=0.55,
        blurs=None,
    ),
    # 15/11 — Revlon One-Step (page produit) : la photo montre les DEUX outils
    dict(
        code="P25",
        src=os.path.join(TMP, "pex-10028673.jpg"),
        chip_label="DRYER + BRUSH",
        kicker="ONE TOOL?",
        lines=["One tool instead", "of two."],
        sub="Until your hair is soaking wet.",
        cx=0.52, cy=0.62,
        blurs=None,
    ),
]


if __name__ == "__main__":
    for p in PINS:
        compose(
            p["src"], os.path.join(BASE, "hair"), p["code"],
            p["chip_label"], p["kicker"], p["lines"], p["sub"],
            p["cx"], p["cy"], p["blurs"],
        )
