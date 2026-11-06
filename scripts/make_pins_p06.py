"""Compose le pin P06 (v2) : flacon avec etiquette vierge au lieu du flacon abstrait.

Le sujet du pin est Â« ce que dit l'etiquette Â». L'ancien visuel montrait un
flacon blanc en gros plan, sans etiquette du tout : il ne parlait pas du sujet.
Ici on voit un flacon ambre avec une etiquette blanche vierge, pose dans une
coupelle en bois avec de l'eucalyptus â€” le lecteur comprend qu'il s'agit de lire
une etiquette. Etiquette vierge = aucune marque visible.

Entree  : visuels/body-oil/base-P06c.jpg  (Pexels 11441227, 1600 x 1057)
Sortie  : visuels/body-oil/pin-P06.jpg + pin-P06.png (1000 x 1500)
"""
import os

from PIL import Image, ImageDraw, ImageFont

from make_pins_body_oil import ACCENT, CREAM, H, INK, LINE, SEGOE_B, W, fit_font, spaced

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "body-oil")
PANEL_H = 480
KICKER = "SENSITIVE SKIN"
LINES = ["Fragrance-free", "or unscented?"]


def crop_fill(img, w, h, cx=0.5, cy=0.5):
    """Recadre au ratio demande, en gardant le point (cx, cy) au centre."""
    r = max(w / img.width, h / img.height)
    im = img.resize((round(img.width * r), round(img.height * r)), Image.LANCZOS)
    left = round((im.width - w) * cx)
    top = round((im.height - h) * cy)
    left = max(0, min(left, im.width - w))
    top = max(0, min(top, im.height - h))
    return im.crop((left, top, left + w, top + h))


def build():
    photo = crop_fill(
        Image.open(os.path.join(BASE, "base-P06c.jpg")).convert("RGB"), W, H - PANEL_H, 0.95, 0.5
    )
    canvas = Image.new("RGB", (W, H), CREAM)
    canvas.paste(photo, (0, 0))
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

    jpg = os.path.join(BASE, "pin-P06.jpg")
    canvas.save(jpg, quality=92, optimize=True)
    png = os.path.join(BASE, "pin-P06.png")
    canvas.save(png, optimize=True)
    print("ok", jpg, canvas.size, os.path.getsize(jpg) // 1024, "Ko")
    print("ok", png, os.path.getsize(png) // 1024, "Ko")


if __name__ == "__main__":
    build()
