"""Pins semaine 2 — 7 visuels 1000x1500 pour Eclatia.

Chaque pin = photo (Pexels deja utilisee et verifiee sur le site) + bandeau texte
sourcE (uniquement des faits de la fiche produit / du guide) + disclaimer + CTA.
Sortie : public/pins/semaine2/
"""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1000, 1500
PHOTO_H = 900
BAND_TOP = PHOTO_H
CTA_H = 150

DIR = "public/pins/semaine2"

# (src, out, bias, band, ink, pill, h1, h2, sub, cta)
# bias = position verticale du cadrage (0 = haut, 1 = bas) pour ne pas couper les visages
JOBS = [
    ("src-dryer.jpg", "pin-01-revlon-dryer.png", 0.45, (63, 42, 29), (247, 240, 233),
     "REVLON  ·  HAIR STYLING",
     "1875W. Compact.",
     "Travel Hair Dryer",
     "Lightweight body, full drying power. Settings and accessories vary: check the listing.",
     "READ THE FULL REVIEW"),

    ("src-heatedbrush.jpg", "pin-02-heated-brush.png", 0.35, (31, 79, 74), (240, 250, 248),
     "HAIR STYLING  ·  GUIDE",
     "Heated Brush?",
     "2 Smarter Options",
     "One-step brush or powerful dryer: choose by hair type, not by the trend.",
     "READ THE GUIDE"),

    ("src-cetaphil.jpg", "pin-03-cetaphil.png", 0.50, (233, 214, 195), (63, 42, 29),
     "CETAPHIL  ·  SENSITIVE SKIN",
     "Cleanser 16 oz",
     "+ Lotion 2 oz",
     "A bundle for dry, sensitive skin. Mind the size gap: the lotion runs out first.",
     "SEE THE HONEST BREAKDOWN"),

    ("src-glow.jpg", "pin-04-glow-routine.png", 0.40, (240, 220, 222), (63, 42, 29),
     "SKINCARE  ·  5 MINUTES",
     "4 Steps.",
     "5 Minutes.",
     "Cleanse, treat, moisturize, protect: the minimal glow routine that actually works.",
     "GET THE ROUTINE"),

    ("src-shea.jpg", "pin-05-shea-butter.png", 0.50, (63, 42, 29), (247, 240, 233),
     "BODY  ·  16 OZ  ·  473 ML",
     "Raw Shea",
     "Butter, Not Oil",
     "Solid and unrefined. Melts on warm skin and leaves a rich, occlusive finish.",
     "READ BEFORE YOU BUY"),

    ("src-mascara.jpg", "pin-06-mascara.png", 0.50, (31, 79, 74), (240, 250, 248),
     "MAYBELLINE  ·  MAKEUP",
     "Sky High",
     "Lash Sensational",
     "Buildable, washable, Blackest Black. A thin coat for day, more for evening.",
     "READ THE REVIEW"),

    ("base-maybelline-stick-clean.jpg", "pin-07-eraser-concealer.png", 0.50, (233, 214, 195), (63, 42, 29),
     "MAYBELLINE  ·  CONCEALER",
     "Conceal.",
     "Contour. Correct.",
     "Sponge-tip concealer for under eyes and dark spots. Up to 12HR wear (brand claim).",
     "READ THE FULL REVIEW"),
]


def font(size, bold=False, italic=False):
    name = "arialbd.ttf" if bold else ("ariali.ttf" if italic else "arial.ttf")
    try:
        return ImageFont.truetype("C:/Windows/Fonts/" + name, size)
    except Exception:
        return ImageFont.load_default()


def text_w(d, t, f):
    bb = d.textbbox((0, 0), t, font=f)
    return bb[2] - bb[0]


def fit(d, t, max_w, size, bold=False):
    """Reduit la taille jusqu'a ce que le texte tienne dans max_w."""
    f = font(size, bold)
    while text_w(d, t, f) > max_w and size > 18:
        size -= 2
        f = font(size, bold)
    return f


def wrap(d, t, f, max_w):
    words, lines, cur = t.split(), [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if text_w(d, test, f) <= max_w or not cur:
            cur = test
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def cover(img, w, h, bias):
    sw, sh = img.size
    scale = max(w / sw, h / sh)
    nw, nh = int(sw * scale + 0.5), int(sh * scale + 0.5)
    img = img.resize((nw, nh), Image.LANCZOS)
    x = (nw - w) // 2
    y = int((nh - h) * bias)
    return img.crop((x, y, x + w, y + h))


def center(d, y, t, f, fill):
    tw = text_w(d, t, f)
    d.text(((W - tw) // 2, y), t, font=f, fill=fill)


def build(src, out, bias, band, ink, pill, h1, h2, sub, cta):
    candidate = os.path.join(DIR, src)
    path = candidate if os.path.exists(candidate) else os.path.join("public/pins", src)
    photo = Image.open(path).convert("RGB")
    photo = cover(photo, W, PHOTO_H, bias)

    pin = Image.new("RGB", (W, H), band)
    pin.paste(photo, (0, 0))
    d = ImageDraw.Draw(pin, "RGBA")

    # fine ligne d'accent entre photo et bandeau
    d.rectangle([(0, PHOTO_H - 6), (W, PHOTO_H)], fill=ink)

    # pastille categorie
    f_pill = font(24, True)
    pw = text_w(d, pill, f_pill) + 56
    px = (W - pw) // 2
    d.rounded_rectangle([(px, 930), (px + pw, 978)], radius=24, fill=ink)
    d.text((px + 28, 941), pill, font=f_pill, fill=band)

    # titres
    max_w = W - 120
    f1 = fit(d, h1, max_w, 74, True)
    f2 = fit(d, h2, max_w, 74, True)
    center(d, 1000, h1, f1, ink)
    center(d, 1082, h2, f2, ink)

    # sous-titre (2 lignes max)
    f_sub = font(35)
    lines = wrap(d, sub, f_sub, max_w)[:2]
    y = 1188
    for ln in lines:
        center(d, y, ln, f_sub, ink)
        y += 46

    # disclaimer
    center(d, 1298, "Photo is illustrative.", font(27, italic=True), (ink[0], ink[1], ink[2]))

    # barre CTA
    d.rectangle([(0, H - CTA_H), (W, H)], fill=ink)
    f_cta = fit(d, cta + "  »", W - 100, 42, True)
    center(d, H - CTA_H + 30, cta + "  »", f_cta, band)
    center(d, H - 58, "Eclatia - Beauty Guide USA", font(26), (band[0], band[1], band[2]))

    pin.save(os.path.join(DIR, out), "PNG")
    print("saved", out)


if __name__ == "__main__":
    for job in JOBS:
        build(*job)
