"""Deux variantes de P24 (Naturium Glow Getter) pour trancher sur la lisibilite.

Contexte : le pin P24 d'origine suit la charte editoriale (fond creme, serif fin,
texte de 25 a 70 px sur un canvas de 1000 px). Affiche a ~236 px dans le fil
Pinterest, le texte tombe a 6-16 px : illisible. Les deux variantes ci-dessous
gardent la photo et le message, et ne changent qu'UNE chose a la fois.

  v2  - charte identique (creme + Georgia), texte multiplie par ~1.8
  v3  - bandeau vert profond + texte creme en Segoe Bold (style "bold")

Photo : Pexels 3865608. La premiere photo (5888066) montrait un homme aux mains
mal disposees : rejetee. Ici une femme, anatomie correcte, huile doree qui coule
d'un flacon dans la paume ouverte, aucun logo lisible.

Entree  : %LOCALAPPDATA%\\Temp\\opencode\\pex-3865608.jpg
Sortie  : docs/contenus-a-valider/visuels/hair/pin-P24.jpg        (final, bandeau vert)
          docs/contenus-a-valider/visuels/hair/pin-P24-creme.jpg  (variante creme, gardee
          pour le test 1 pin sur 4)

Usage (depuis la racine guide-beaute) :
    python scripts/make_pin_p24_variants.py
"""
import os

from PIL import Image, ImageDraw, ImageFont

from make_pins_hair import crop_fill
from make_pins_body_oil import ACCENT, CREAM, INK, LINE, SEGOE_B, spaced

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "hair")
SRC = os.path.join(
    os.environ["LOCALAPPDATA"], "Temp", "opencode", "pex-3865608.jpg"
)
GEORGIA_B = r"C:\Windows\Fonts\georgiab.ttf"

W, H = 1000, 1500
PHOTO_H = 880
GOLD = (205, 172, 124)
FOREST = (32, 58, 45)

KICKER = "OIL BODY WASH"
LINES = ["It looks like oil.", "It still cleans."]
SUB = "Surfactants included."


def chip(d, xy, text, font):
    x, y = xy
    tw = sum(d.textlength(c, font=font) + 4 for c in text) - 4
    pad_x, pad_y = 18, 12
    d.rectangle(
        [x, y, x + tw + 2 * pad_x, y + font.size + 2 * pad_y], fill=CREAM
    )
    spaced(d, (x + pad_x, y + pad_y - 3), text, font, ACCENT, 4)


def fit(font_path, d, lines, max_w, start, minimum):
    for size in range(start, minimum - 1, -2):
        f = ImageFont.truetype(font_path, size)
        if all(d.textlength(l, font=f) <= max_w for l in lines):
            return f, size
    return ImageFont.truetype(font_path, minimum), minimum


def base_canvas():
    photo = crop_fill(Image.open(SRC).convert("RGB"), W, PHOTO_H, cx=0.5, cy=0.54)
    canvas = Image.new("RGB", (W, H), CREAM)
    canvas.paste(photo, (0, 0))
    return canvas


def signature(d, fill):
    fs = ImageFont.truetype(SEGOE_B, 26)
    label = "ECLATIA"
    tw = sum(d.textlength(c, font=fs) + 6 for c in label) - 6
    spaced(d, (W - 64 - tw, H - 62), label, fs, fill, 6)


def build_v2():
    """Charte identique, texte geant. Seule la taille change."""
    canvas = base_canvas()
    d = ImageDraw.Draw(canvas)

    chip(d, (34, 34), KICKER, ImageFont.truetype(SEGOE_B, 34))

    d.rectangle([0, PHOTO_H, W, H], fill=CREAM)
    d.rectangle([0, PHOTO_H, W, PHOTO_H + 2], fill=LINE)

    x = 64
    spaced(d, (x, PHOTO_H + 58), "OIL-TO-LATHER", ImageFont.truetype(SEGOE_B, 36), ACCENT, 6)
    d.rectangle([x, PHOTO_H + 116, x + 78, PHOTO_H + 120], fill=ACCENT)

    f, size = fit(GEORGIA_B, d, LINES, W - 2 * x, start=140, minimum=90)
    y = PHOTO_H + 152
    for line in LINES:
        d.text((x - 3, y), line, font=f, fill=INK)
        y += round(size * 1.12)

    d.text((x, y + 26), SUB, font=ImageFont.truetype(SEGOE_B, 42), fill=ACCENT)
    signature(d, ACCENT)

    out = os.path.join(BASE, "pin-P24-creme.jpg")
    canvas.save(out, quality=92, optimize=True)
    print("creme  ", size, "px", os.path.getsize(out) // 1024, "Ko")


def build_v3():
    """Bandeau vert profond, texte creme, sans-serif gras."""
    canvas = base_canvas()
    d = ImageDraw.Draw(canvas)

    chip(d, (34, 34), KICKER, ImageFont.truetype(SEGOE_B, 34))

    d.rectangle([0, PHOTO_H, W, H], fill=FOREST)
    d.rectangle([0, PHOTO_H, W, PHOTO_H + 3], fill=GOLD)

    x = 64
    spaced(d, (x, PHOTO_H + 58), "OIL-TO-LATHER", ImageFont.truetype(SEGOE_B, 36), GOLD, 6)

    f, size = fit(SEGOE_B, d, LINES, W - 2 * x, start=132, minimum=86)
    y = PHOTO_H + 118
    for line in LINES:
        d.text((x - 2, y), line, font=f, fill=CREAM)
        y += round(size * 1.12)

    d.text((x, y + 30), SUB, font=ImageFont.truetype(SEGOE_B, 44), fill=GOLD)
    signature(d, GOLD)

    out = os.path.join(BASE, "pin-P24.jpg")
    canvas.save(out, quality=92, optimize=True)
    canvas.save(os.path.join(BASE, "pin-P24.png"), optimize=True)
    print("final  ", size, "px", os.path.getsize(out) // 1024, "Ko")


if __name__ == "__main__":
    build_v2()
    build_v3()
