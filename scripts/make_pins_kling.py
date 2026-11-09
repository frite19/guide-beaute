"""Nettoie les 3 images fournies (KlingAI) et prepare la photo du site + 2 pins.

Entree  : ~/Downloads/kling_20261109_IMAGE_genere_une_4374_1|2|3.png
Sortie  : visuels/hair/base-kling-1|2|3.jpg   (images nettoyees)
          public/images/guides/one-step-brush-vs-powerful-dryer.jpg  (photo du site)
          visuels/hair/pin-P20.jpg/.png  et  pin-P21.jpg/.png  (1000 x 1500)

Nettoyage :
- filigrane « KlingAI 3.0 » : supprime par le recadrage (jamais dans le cadre final)
- badge ovale de l'appareil (marque tierce) : floute, comme clean_brand() sur P18/P19

Aucun logo lisible, aucune marque nommee : les pins montrent seulement un
seche-cheveux generique et des cheveux longs.
"""
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

from make_pins_body_oil import ACCENT, CREAM, INK, LINE, SEGOE_B, spaced, fit_font
from make_pins_hair import crop_fill

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "hair")
SITE_IMG = os.path.join("public", "images", "guides", "one-step-brush-vs-powerful-dryer.jpg")
W, H = 1000, 1500
PANEL_H = 500

DOWNLOADS = os.path.join(os.path.expanduser("~"), "Downloads")
SOURCES = {
    1: os.path.join(DOWNLOADS, "kling_20261109_IMAGE_genere_une_4374_1.png"),
    2: os.path.join(DOWNLOADS, "kling_20261109_IMAGE_genere_une_4374_2.png"),
    3: os.path.join(DOWNLOADS, "kling_20261109_IMAGE_genere_une_4374_3.png"),
}

# badge ovale de l'appareil (marque tierce) : ellipse qui le recouvre, par image
# (cx, cy, demi-largeur, demi-hauteur, angle) en pixels de l'image source
BADGE = {
    1: (1530, 826, 158, 96, 10),
    2: (1434, 960, 152, 120, 45),
    3: (1345, 598, 205, 90, 16),
}

# le filigrane KlingAI occupe le bas-droit : on coupe sous y = 2360 (portrait)
# et sous y = 1500 (paysage). Les crops 2:3 sont calcules pour rester dedans.
PORTRAIT_CROP = (62, 50, 1602, 2360)
LANDSCAPE_CROP = (60, 100, 2440, 1500)


def redmask(arr):
    r = arr[:, :, 0].astype(np.int16)
    g = arr[:, :, 1].astype(np.int16)
    b = arr[:, :, 2].astype(np.int16)
    return (r > g + 35) & (r > b + 35) & (r > 70)


def scrub_badge(im, box):
    """Recouvre le badge d'un aplat rouge pris sur le corps de l'appareil.

    Le badge porte le logo d'une marque tierce : on ne le laisse pas lisible.
    L'aplat reprend la teinte mediane du boitier autour du badge, avec un bord
    tres adouci, pour se fondre dans la photo (meme principe que clean_brand).
    """
    cx, cy, rx, ry, ang = box
    side = max(2 * rx + 40, 2 * ry + 40)
    mask = Image.new("L", (side, side), 0)
    ImageDraw.Draw(mask).ellipse(
        [(side - 2 * rx) // 2, (side - 2 * ry) // 2,
         (side + 2 * rx) // 2, (side + 2 * ry) // 2],
        fill=255,
    )
    mask = mask.rotate(ang, resample=Image.BICUBIC, expand=False)

    x0, y0 = cx - side // 2, cy - side // 2
    box_px = (max(0, x0), max(0, y0), x0 + side, y0 + side)
    ring = np.asarray(im.crop((box_px[0] - 24, box_px[1] - 24, box_px[2] + 24, box_px[3] + 24)))
    red = redmask(ring)
    px = ring.reshape(-1, 3)[red.reshape(-1)].astype(np.float32)
    color = tuple(int(v) for v in np.median(px, axis=0))

    im.paste(Image.new("RGB", mask.size, color), (box_px[0], box_px[1]),
             mask.filter(ImageFilter.GaussianBlur(14)))
    return im


def clean(idx):
    im = Image.open(SOURCES[idx]).convert("RGB")
    im = scrub_badge(im, BADGE[idx])
    out = os.path.join(BASE, f"base-kling-{idx}.jpg")
    im.save(out, quality=94, optimize=True)
    print("base", os.path.basename(out), im.size, os.path.getsize(out) // 1024, "Ko")
    return im


def site_photo(clean_im):
    """Photo paysage pour les cartes du site (200 px de haut, object-fit: cover)."""
    im = clean_im.crop(LANDSCAPE_CROP).resize((1700, 1000), Image.LANCZOS)
    im.save(SITE_IMG, quality=88, optimize=True, progressive=True)
    print("site", SITE_IMG, im.size, os.path.getsize(SITE_IMG) // 1024, "Ko")


def chip(d, xy, text, font):
    x, y = xy
    tw = sum(d.textlength(c, font=font) + 3 for c in text) - 3
    pad_x, pad_y = 14, 9
    d.rectangle([x, y, x + tw + 2 * pad_x, y + font.size + 2 * pad_y], fill=CREAM)
    spaced(d, (x + pad_x, y + pad_y - 2), text, font, ACCENT, 3)


def build(code, src_idx, chip_label, kicker, lines, sub, cx=0.5, cy=0.35):
    src = os.path.join(BASE, f"base-kling-{src_idx}.jpg")
    photo = crop_fill(Image.open(src).convert("RGB").crop(PORTRAIT_CROP), W, H - PANEL_H, cx, cy)
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
    label = "ECLATIA"
    tw = sum(d.textlength(c, font=fs) + 5 for c in label) - 5
    spaced(d, (W - x - tw, H - 62), label, fs, ACCENT, 5)

    jpg = os.path.join(BASE, f"pin-{code}.jpg")
    canvas.save(jpg, quality=92, optimize=True)
    canvas.save(os.path.join(BASE, f"pin-{code}.png"), optimize=True)
    print("pin", code, os.path.getsize(jpg) // 1024, "Ko")


if __name__ == "__main__":
    im1 = clean(1)
    clean(2)
    clean(3)
    site_photo(im1)

    build(
        "P20", 2,
        "HAIR TOOLS", "BEFORE YOU BUY",
        ["Not sure about", "the viral brush?"],
        "Two simpler options.",
        cx=0.50, cy=0.50,
    )
    build(
        "P21", 3,
        "BLOW DRYER", "LONG HAIR",
        ["Brush or dryer", "for long hair?"],
        "Two routines, side by side.",
        cx=0.50, cy=0.34,
    )
