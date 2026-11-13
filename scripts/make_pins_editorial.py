"""Charte des pins "editoriaux" : photo reelle en haut, panneau texte lisible en bas.

Deux themes, meme grille :
  creme - fond crème, Georgia Bold, kicker brun   (charte historique)
  dark  - fond vert profond, Segoe Bold, kicker or (variante "bold")

Regle nee du constat du 13/11 : l'ancienne charte composait son titre entre 25 et
70 px sur un canvas de 1000 px. A la taille d'affichage du fil Pinterest (~236 px)
cela donne 6 a 16 px, donc illisible. Ici le titre est calibre entre 86 et 140 px,
le chip fait 34 px, le kicker 36 px.

Photos : Pexels, licence libre, aucun logo de marque lisible.

Entree (dossier temporaire) :
  pex-3865608.jpg   femme versant une huile doree dans sa paume
  pex-10028673.jpg  brosse ronde + sechoir dans des cheveux bruns

Sortie : docs/contenus-a-valider/visuels/hair/pin-Pxx.jpg (+ .png)

Usage (depuis la racine guide-beaute) :
    python scripts/make_pins_editorial.py
"""
import os

from PIL import Image, ImageDraw, ImageFont

from make_pins_hair import crop_fill
from make_pins_body_oil import ACCENT, CREAM, INK, LINE, SEGOE_B, spaced

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "hair")
TMP = os.path.join(os.environ["LOCALAPPDATA"], "Temp", "opencode")
GEORGIA_B = r"C:\Windows\Fonts\georgiab.ttf"

W, H = 1000, 1500
PHOTO_H = 880

GOLD = (205, 172, 124)
FOREST = (32, 58, 45)

THEMES = {
    "creme": dict(bg=CREAM, title=INK, accent=ACCENT, kicker=ACCENT, font=GEORGIA_B),
    "dark": dict(bg=FOREST, title=CREAM, accent=GOLD, kicker=GOLD, font=SEGOE_B),
}


def chip(d, xy, text, font):
    x, y = xy
    tw = sum(d.textlength(c, font=font) + 4 for c in text) - 4
    pad_x, pad_y = 18, 12
    d.rectangle([x, y, x + tw + 2 * pad_x, y + font.size + 2 * pad_y], fill=CREAM)
    spaced(d, (x + pad_x, y + pad_y - 3), text, font, ACCENT, 4)


def fit(font_path, d, lines, max_w, start, minimum):
    for size in range(start, minimum - 1, -2):
        f = ImageFont.truetype(font_path, size)
        if all(d.textlength(l, font=f) <= max_w for l in lines):
            return f, size
    return ImageFont.truetype(font_path, minimum), minimum


def signature(d, fill):
    fs = ImageFont.truetype(SEGOE_B, 26)
    label = "ECLATIA"
    tw = sum(d.textlength(c, font=fs) + 6 for c in label) - 6
    spaced(d, (W - 64 - tw, H - 62), label, fs, fill, 6)


def compose(pin):
    t = THEMES[pin["theme"]]
    im = Image.open(os.path.join(TMP, pin["src"])).convert("RGB")

    if "box" in pin:
        # recadrage explicite en pixels de la photo source, puis remise a l'echelle
        photo = im.crop(pin["box"]).resize((W, PHOTO_H), Image.LANCZOS)
    else:
        photo = crop_fill(im, W, PHOTO_H, pin.get("cx", 0.5), pin.get("cy", 0.5))

    canvas = Image.new("RGB", (W, H), t["bg"])
    canvas.paste(photo, (0, 0))
    d = ImageDraw.Draw(canvas)

    chip(d, (34, 34), pin["chip"], ImageFont.truetype(SEGOE_B, 34))

    d.rectangle([0, PHOTO_H, W, H], fill=t["bg"])
    d.rectangle([0, PHOTO_H, W, PHOTO_H + 3],
                fill=GOLD if pin["theme"] == "dark" else LINE)

    x = 64
    spaced(d, (x, PHOTO_H + 58), pin["kicker"], ImageFont.truetype(SEGOE_B, 36), t["kicker"], 6)
    if pin["theme"] == "creme":
        d.rectangle([x, PHOTO_H + 116, x + 78, PHOTO_H + 120], fill=ACCENT)

    f, size = fit(t["font"], d, pin["lines"], W - 2 * x, start=140, minimum=86)
    y = PHOTO_H + (152 if pin["theme"] == "creme" else 118)
    for line in pin["lines"]:
        d.text((x - 3, y), line, font=f, fill=t["title"])
        y += round(size * 1.12)

    d.text((x, y + (26 if pin["theme"] == "creme" else 30)), pin["sub"],
           font=ImageFont.truetype(SEGOE_B, 42), fill=t["accent"])
    signature(d, t["accent"])

    jpg = os.path.join(BASE, f"pin-{pin['code']}.jpg")
    canvas.save(jpg, quality=92, optimize=True)
    if pin.get("png", True):
        canvas.save(os.path.join(BASE, f"pin-{pin['code']}.png"), optimize=True)
    print(f"{pin['code']:>3} {pin['theme']:<5} titre {size} px  {os.path.getsize(jpg) // 1024} Ko")


NATURIUM = dict(src="pex-3865608.jpg", chip="OIL BODY WASH", kicker="OIL-TO-LATHER",
                lines=["It looks like oil.", "It still cleans."],
                sub="Surfactants included.", cx=0.5, cy=0.54)

REVLON_ONE_STEP = dict(src="pex-10028673.jpg", chip="DRYER + BRUSH", kicker="ONE TOOL?",
                       lines=["One tool instead", "of two."],
                       sub="Until your hair is soaking wet.",
                       # recadrage qui sort le visage de la coiffeuse (haut-droite)
                       # du cadre et garde le sechoir, la brosse et la main.
                       box=(112, 127, 1180, 1067))

PINS = [
    dict(NATURIUM, code="P24", theme="dark"),
    dict(NATURIUM, code="P24-creme", theme="creme", png=False),
    dict(REVLON_ONE_STEP, code="P25", theme="creme"),
]


if __name__ == "__main__":
    for p in PINS:
        compose(p)
