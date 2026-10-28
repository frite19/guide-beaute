"""Compose les 12 pins body oil : photo générée + bandeau texte lisible.

Entrée  : docs/contenus-a-valider/visuels/body-oil/base-Pxx.jpg
Sortie  : docs/contenus-a-valider/visuels/body-oil/pin-Pxx.jpg  (1000 x 1500)
"""
import os
from PIL import Image, ImageDraw, ImageFont

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "body-oil")
W, H = 1000, 1500
PANEL_H = 480
CREAM = (246, 241, 232)
INK = (38, 35, 34)
ACCENT = (140, 111, 78)
LINE = (222, 211, 194)

GEORGIA_B = r"C:\Windows\Fonts\georgiab.ttf"
SEGOE_B = r"C:\Windows\Fonts\segoeuib.ttf"

PINS = [
    ("P01", "DRY SKIN", ["Shea butter or", "body oil?"]),
    ("P02", "THE CORRECT ORDER", ["Lotion first.", "Oil last."]),
    ("P03", "DRY SKIN", ["Oil vs lotion:", "what works"]),
    ("P04", "TEXTURE & FINISH", ["Dry oil is not", "a drying oil"]),
    ("P05", "BODY OIL", ["Glow without", "the grease"]),
    ("P06", "SENSITIVE SKIN", ["Fragrance-free", "or unscented?"]),
    ("P07", "BODY WASH", ["Should you switch", "to a shower oil?"]),
    ("P08", "HAIR & BODY", ["One oil for", "hair and body?"]),
    ("P09", "WHERE IT WORKS", ["Shea butter:", "the right zones"]),
    ("P10", "DOSAGE", ["3 body oil", "mistakes"]),
    ("P11", "ROUTINE", ["Very dry skin:", "the two-step duo"]),
    ("P12", "INGREDIENT", ["Raw shea butter:", "texture & scent"]),
]


def spaced(draw, xy, text, font, fill, tracking):
    """Dessine un texte avec interlettrage (letter-spacing)."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def fit_font(draw, lines, max_w, start=70, minimum=44):
    for size in range(start, minimum - 1, -2):
        f = ImageFont.truetype(GEORGIA_B, size)
        if all(draw.textlength(l, font=f) <= max_w for l in lines):
            return f, size
    return ImageFont.truetype(GEORGIA_B, minimum), minimum


def crop_fill(img, w, h):
    """Redimensionne puis recadre au centre pour remplir exactement w x h."""
    r = max(w / img.width, h / img.height)
    im = img.resize((round(img.width * r), round(img.height * r)), Image.LANCZOS)
    left = (im.width - w) // 2
    top = (im.height - h) // 2
    return im.crop((left, top, left + w, top + h))


def build(code, kicker, lines):
    src = os.path.join(BASE, f"base-{code}.jpg")
    photo = crop_fill(Image.open(src).convert("RGB"), W, H)
    canvas = photo.copy()
    d = ImageDraw.Draw(canvas)

    # bandeau
    d.rectangle([0, H - PANEL_H, W, H], fill=CREAM)
    d.rectangle([0, H - PANEL_H, W, H - PANEL_H + 1], fill=LINE)

    x = 72
    # kicker
    fk = ImageFont.truetype(SEGOE_B, 25)
    spaced(d, (x, H - PANEL_H + 58), kicker, fk, ACCENT, 4)

    # filet
    d.rectangle([x, H - PANEL_H + 104, x + 54, H - PANEL_H + 107], fill=ACCENT)

    # titre
    f, size = fit_font(d, lines, W - 2 * x)
    lh = round(size * 1.22)
    y = H - PANEL_H + 140
    for l in lines:
        d.text((x - 2, y), l, font=f, fill=INK)
        y += lh

    # signature
    fs = ImageFont.truetype(SEGOE_B, 21)
    label = "ECLATIA"
    tw = sum(d.textlength(c, font=fs) + 5 for c in label) - 5
    spaced(d, (W - x - tw, H - 62), label, fs, ACCENT, 5)

    out = os.path.join(BASE, f"pin-{code}.jpg")
    canvas.save(out, quality=92, optimize=True)
    return out


if __name__ == "__main__":
    for code, kicker, lines in PINS:
        path = build(code, kicker, lines)
        print("ok", os.path.basename(path), os.path.getsize(path) // 1024, "Ko")
