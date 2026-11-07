"""Compose les deux pins cheveux : P18 (08/11) et P19 (11/11).

Contexte : les chiffres Pinterest du compte montrent que le tableau cheveux fait
5,3 % de clics sortants contre 0,4 % pour le tableau corps. Les deux pins misent
donc sur des OUTILS identifiables, pas sur des concepts abstraits.

P18 - Â« Best hot air brush for fine hair? Â»
      photo unique : sechoir + brosse ronde sur fourrure blanche (Pexels 973402)

P19 - Â« Dryer plus brush, or one tool? Â»
      diptyque : brosse ronde a gauche (crop de 973402), sechoir a droite (Pexels 9594945)

Aucune marque lisible sur les photos.

Entree  : visuels/hair/base-hairflat.jpg / base-dryer.jpg
Sortie  : visuels/hair/pin-P18.jpg + .png  et  pin-P19.jpg + .png  (1000 x 1500)
"""
import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont

from make_pins_body_oil import ACCENT, CREAM, H, INK, LINE, SEGOE_B, W, fit_font, spaced

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "hair")

# Le manche de la brosse ronde porte un petit logo dore (marque tierce).
# On le floute dans la photo source : aucune marque lisible sur le pin, et les
# deux visuels qui partagent cette photo heritent du nettoyage.
LOGO_BOX = (955, 428, 995, 474)


def clean_brand(src):
    crop = src.crop(LOGO_BOX)
    blurred = crop.filter(ImageFilter.GaussianBlur(10))
    # le logo est dore : on retire aussi la couleur pour qu'il ne reste pas
    # une tache chaude sur un manche gris.
    gray = blurred.convert("L").convert("RGB")
    blurred = Image.blend(blurred, gray, 0.85)
    mask = Image.new("L", crop.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [5, 5, crop.width - 6, crop.height - 6], radius=6, fill=255
    )
    mask = mask.filter(ImageFilter.GaussianBlur(6))
    src.paste(blurred, LOGO_BOX, mask)
    return src


def crop_fill(img, w, h, cx=0.5, cy=0.5):
    r = max(w / img.width, h / img.height)
    im = img.resize((round(img.width * r), round(img.height * r)), Image.LANCZOS)
    left = round((im.width - w) * cx)
    top = round((im.height - h) * cy)
    left = max(0, min(left, im.width - w))
    top = max(0, min(top, im.height - h))
    return im.crop((left, top, left + w, top + h))


def chip(d, xy, text, font):
    x, y = xy
    tw = sum(d.textlength(c, font=font) + 3 for c in text) - 3
    pad_x, pad_y = 14, 9
    d.rectangle([x, y, x + tw + 2 * pad_x, y + font.size + 2 * pad_y], fill=CREAM)
    spaced(d, (x + pad_x, y + pad_y - 2), text, font, ACCENT, 3)


def panel(d, panel_h, kicker, lines, sub=None):
    d.rectangle([0, H - panel_h, W, H], fill=CREAM)
    d.rectangle([0, H - panel_h, W, H - panel_h + 1], fill=LINE)

    x = 72
    spaced(d, (x, H - panel_h + 62), kicker, ImageFont.truetype(SEGOE_B, 25), ACCENT, 4)
    d.rectangle([x, H - panel_h + 108, x + 54, H - panel_h + 111], fill=ACCENT)

    f, size = fit_font(d, lines, W - 2 * x)
    lh = round(size * 1.2)
    y = H - panel_h + 150
    for line in lines:
        d.text((x - 2, y), line, font=f, fill=INK)
        y += lh

    if sub:
        d.text((x, y + 18), sub, font=ImageFont.truetype(SEGOE_B, 26), fill=ACCENT)

    fs = ImageFont.truetype(SEGOE_B, 21)
    label = "ECLATIA"
    tw = sum(d.textlength(c, font=fs) + 5 for c in label) - 5
    spaced(d, (W - x - tw, H - 62), label, fs, ACCENT, 5)


def save(canvas, name):
    jpg = os.path.join(BASE, name + ".jpg")
    canvas.save(jpg, quality=92, optimize=True)
    png = os.path.join(BASE, name + ".png")
    canvas.save(png, optimize=True)
    print("ok", jpg, canvas.size, os.path.getsize(jpg) // 1024, "Ko")


def build_p18():
    """Photo large en haut, bandeau texte bas."""
    photo_h = 900
    canvas = Image.new("RGB", (W, H), CREAM)
    src = Image.open(os.path.join(BASE, "base-hairflat.jpg")).convert("RGB")
    src = clean_brand(src)
    # on coupe les chouchous a droite : coupes par le bord, ils font des taches
    # de couleur au milieu du cadre.
    src = src.crop((0, 0, 1040, src.height))
    photo = crop_fill(src, W, photo_h, cx=0.0)
    canvas.paste(photo, (0, 0))
    d = ImageDraw.Draw(canvas)
    d.rectangle([0, 0, W - 1, photo_h - 1], outline=LINE, width=1)
    chip(d, (28, 28), "HAIR TOOLS", ImageFont.truetype(SEGOE_B, 19))

    panel(
        d,
        H - photo_h,
        "HAIR TOOLS",
        ["Best hot air brush", "for fine hair?"],
        "One pass, or a dryer plus a brush.",
    )
    save(canvas, "pin-P18")


def build_p19():
    """Diptyque : brosse ronde a gauche, sechoir a droite."""
    gap = 10
    panel_h = 480
    photo_h = H - panel_h
    col_w = (W - gap) // 2
    canvas = Image.new("RGB", (W, H), CREAM)
    fchip = ImageFont.truetype(SEGOE_B, 19)
    cols = [
        ("base-hairflat.jpg", "ROUND BRUSH", 0, 0.56, 0.30),
        ("base-dryer.jpg", "1875 W DRYER", col_w + gap, 0.46, 0.35),
    ]
    for name, label, x, cx, cy in cols:
        src = Image.open(os.path.join(BASE, name)).convert("RGB")
        if name == "base-hairflat.jpg":
            src = clean_brand(src)
        photo = crop_fill(src, col_w, photo_h, cx, cy)
        canvas.paste(photo, (x, 0))
        d = ImageDraw.Draw(canvas)
        d.rectangle([x, 0, x + col_w - 1, photo_h - 1], outline=LINE, width=1)
        chip(d, (x + 28, 28), label, fchip)

    d = ImageDraw.Draw(canvas)
    panel(d, panel_h, "ONE TOOL OR TWO", ["Dryer plus brush,", "or one tool?"])
    save(canvas, "pin-P19")


if __name__ == "__main__":
    build_p18()
    build_p19()
