"""Compose le pin P10 (v2) : photo reelle (main + huile) au lieu du degrade vide.

L'ancien visuel P10 etait un simple degrade beige : joli mais muet, il ne disait
pas de quoi parlait le pin. Ici la photo montre une main qui recoit quelques
gouttes d'huile d'un flacon ambre : c'est exactement le sujet du pin (le dosage).

Aucune marque lisible sur la photo (flacon ambre uni, sans etiquette).

Entree  : visuels/body-oil/base-P10.jpg  (Pexels 4959973, 1600 x 2400)
Sortie  : visuels/body-oil/pin-P10.jpg + pin-P10.png (1000 x 1500)
"""
import os

from PIL import Image, ImageDraw, ImageFont

from make_pins_body_oil import ACCENT, CREAM, H, INK, LINE, SEGOE_B, W, fit_font, spaced

BASE = os.path.join("docs", "contenus-a-valider", "visuels", "body-oil")
PANEL_H = 480
KICKER = "DOSAGE"
LINES = ["3 body oil", "mistakes"]


def crop_fill(img, w, h, top_frac=0.5):
    r = max(w / img.width, h / img.height)
    im = img.resize((round(img.width * r), round(img.height * r)), Image.LANCZOS)
    left = (im.width - w) // 2
    top = round((im.height - h) * top_frac)
    top = max(0, min(top, im.height - h))
    return im.crop((left, top, left + w, top + h))


def build():
    photo = crop_fill(
        Image.open(os.path.join(BASE, "base-P10.jpg")).convert("RGB"), W, H - PANEL_H, 0.78
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

    jpg = os.path.join(BASE, "pin-P10.jpg")
    canvas.save(jpg, quality=92, optimize=True)
    png = os.path.join(BASE, "pin-P10.png")
    canvas.save(png, optimize=True)
    print("ok", jpg, canvas.size, os.path.getsize(jpg) // 1024, "Ko")
    print("ok", png, os.path.getsize(png) // 1024, "Ko")


if __name__ == "__main__":
    build()
