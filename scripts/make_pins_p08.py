"""Compose le pin P08 (v2) : diptyque huile cheveux / huile corps.

v1 montrait une goutte d'huile entre deux doigts sur un fond beige presque vide :
joli, mais abstrait — et les chiffres Pinterest du compte disent que les pins
« concept » ne declenchent pas de clic (0,4 % sur le tableau corps contre 5,3 %
sur les cheveux). Ici, chaque moitie montre un flacon identifiable et la
comparaison se lit d'un coup d'oeil : HAIR OIL a gauche, BODY OIL a droite.

Aucune marque lisible (flacon ambre uni / flacon transparent uni).

Entree  : visuels/body-oil/base-P08-hair.jpg  (Pexels 7795850)
          visuels/body-oil/base-P06c.jpg      (Pexels 6801173)
Sortie  : visuels/body-oil/pin-P08.jpg + pin-P08.png (1000 x 1500)
"""
import os

from PIL import Image, ImageDraw, ImageFont

from make_pins_body_oil import ACCENT, CREAM, H, INK, LINE, SEGOE_B, W, fit_font, spaced

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "body-oil")
PANEL_H = 480
GAP = 10
PHOTO_H = 1020
COL_W = (W - GAP) // 2  # 495

KICKER = "HAIR & BODY"
LINES = ["One oil for", "hair and body?"]
LABELS = [
    # (fichier, libelle, x de gauche, cadrage horizontal)
    ("base-P08-hair.jpg", "HAIR OIL", 0, 0.50),
    ("base-P06c.jpg", "BODY OIL", COL_W + GAP, 0.95),
]


def crop_fill(img, w, h, cx=0.5, top_frac=0.5):
    r = max(w / img.width, h / img.height)
    im = img.resize((round(img.width * r), round(img.height * r)), Image.LANCZOS)
    left = round((im.width - w) * cx)
    top = round((im.height - h) * top_frac)
    left = max(0, min(left, im.width - w))
    top = max(0, min(top, im.height - h))
    return im.crop((left, top, left + w, top + h))


def chip(d, xy, text, font):
    x, y = xy
    tw = sum(d.textlength(c, font=font) + 3 for c in text) - 3
    pad_x, pad_y = 14, 9
    d.rectangle([x, y, x + tw + 2 * pad_x, y + font.size + 2 * pad_y], fill=CREAM)
    spaced(d, (x + pad_x, y + pad_y - 2), text, font, ACCENT, 3)


def build():
    canvas = Image.new("RGB", (W, H), CREAM)
    fchip = ImageFont.truetype(SEGOE_B, 19)
    for name, label, x, cx in LABELS:
        photo = crop_fill(Image.open(os.path.join(BASE, name)).convert("RGB"), COL_W, PHOTO_H, cx)
        canvas.paste(photo, (x, 0))
        d = ImageDraw.Draw(canvas)
        d.rectangle([x, 0, x + COL_W - 1, PHOTO_H - 1], outline=LINE, width=1)
        chip(d, (x + 28, 28), label, fchip)

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

    jpg = os.path.join(BASE, "pin-P08.jpg")
    canvas.save(jpg, quality=92, optimize=True)
    png = os.path.join(BASE, "pin-P08.png")
    canvas.save(png, optimize=True)
    print("ok", jpg, canvas.size, os.path.getsize(jpg) // 1024, "Ko")
    print("ok", png, os.path.getsize(png) // 1024, "Ko")


if __name__ == "__main__":
    build()
