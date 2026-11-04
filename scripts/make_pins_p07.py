"""Compose le pin P07 (v2) : diptyque eau / huile + bandeau texte.

Pourquoi un diptyque : le pin compare un gel douche classique a une huile de
douche. Deux photos empilees (eau qui coule / huile doree) rendent la
comparaison lisible en une seconde, sans aucune marque visible.

Entree  : visuels/body-oil/base-P07-water.jpg  (Pexels 4194863, pommeau de douche)
          visuels/body-oil/base-P07-oil.jpg    (Pexels 4465831, huile doree)
Sortie  : visuels/body-oil/pin-P07.jpg + pin-P07.png (1000 x 1500)
"""
import os

from PIL import Image, ImageDraw, ImageFont

from make_pins_body_oil import ACCENT, CREAM, H, INK, LINE, SEGOE_B, W, fit_font, spaced

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "body-oil")
PANEL_H = 480
GAP = 10
BAND_H = 505  # 505 * 2 + 10 = 1020 -> hauteur photo totale

KICKER = "BODY WASH"
LINES = ["Should you switch", "to a shower oil?"]
LABELS = [
    # (fichier, libelle, decalage vertical du recadrage en fraction de la hauteur)
    ("base-P07-water.jpg", "GEL WASH", 0.10),
    ("base-P07-oil.jpg", "SHOWER OIL", 0.50),
]


def crop_fill(img, w, h, top_frac=0.5):
    r = max(w / img.width, h / img.height)
    im = img.resize((round(img.width * r), round(img.height * r)), Image.LANCZOS)
    left = (im.width - w) // 2
    top = round((im.height - h) * top_frac)
    top = max(0, min(top, im.height - h))
    return im.crop((left, top, left + w, top + h))


def chip(d, xy, text, font):
    x, y = xy
    tw = sum(d.textlength(c, font=font) + 3 for c in text) - 3
    pad_x, pad_y = 16, 10
    d.rectangle([x, y, x + tw + 2 * pad_x, y + font.size + 2 * pad_y], fill=CREAM)
    spaced(d, (x + pad_x, y + pad_y - 2), text, font, ACCENT, 3)


def build():
    canvas = Image.new("RGB", (W, H), CREAM)
    top = 0
    for name, label, top_frac in LABELS:
        photo = crop_fill(Image.open(os.path.join(BASE, name)).convert("RGB"), W, BAND_H, top_frac)
        canvas.paste(photo, (0, top))
        d = ImageDraw.Draw(canvas)
        d.rectangle([0, top, W - 1, top + BAND_H - 1], outline=LINE, width=1)
        chip(d, (36, top + 36), label, ImageFont.truetype(SEGOE_B, 20))
        top += BAND_H + GAP

    # bandeau texte
    d = ImageDraw.Draw(canvas)
    d.rectangle([0, H - PANEL_H, W, H], fill=CREAM)
    d.rectangle([0, H - PANEL_H, W, H - PANEL_H + 1], fill=LINE)

    x = 72
    spaced(d, (x, H - PANEL_H + 58), KICKER, ImageFont.truetype(SEGOE_B, 25), ACCENT, 4)
    d.rectangle([x, H - PANEL_H + 104, x + 54, H - PANEL_H + 107], fill=ACCENT)

    f, size = fit_font(d, LINES, W - 2 * x)
    lh = round(size * 1.22)
    y = H - PANEL_H + 140
    for line in LINES:
        d.text((x - 2, y), line, font=f, fill=INK)
        y += lh

    fs = ImageFont.truetype(SEGOE_B, 21)
    label = "ECLATIA"
    tw = sum(d.textlength(c, font=fs) + 5 for c in label) - 5
    spaced(d, (W - x - tw, H - 62), label, fs, ACCENT, 5)

    jpg = os.path.join(BASE, "pin-P07.jpg")
    canvas.save(jpg, quality=92, optimize=True)
    png = os.path.join(BASE, "pin-P07.png")
    canvas.save(png, optimize=True)
    print("ok", jpg, canvas.size, os.path.getsize(jpg) // 1024, "Ko")
    print("ok", png, os.path.getsize(png) // 1024, "Ko")


if __name__ == "__main__":
    build()
