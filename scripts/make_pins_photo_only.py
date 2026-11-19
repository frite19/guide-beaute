"""Pins "photo seule" — test du 20/11/2026.

Hypothese a tester
------------------
Les deux pins qui ont le plus marche sur le compte (1 171 et 639 impressions)
sont des photos nues, sans bandeau de texte : ils datent du 28/10 au 02/11,
donc d'avant la charte editoriale. Impossible de savoir si c'est l'absence de
texte ou l'age qui explique la portee.

Trois pins strictement sans texte, meme tableau et memes heures que le trio du
19/11, permettent de comparer a age egal le 26/11.

Regles respectees
-----------------
- 1000 x 1500 (2:3), aucun texte, aucun logo lisible, aucune main/visage
  deforme : ce sont des photos Pexels non retouchees, seulement recadrees.
- Le cadrage est explicite (pixels de la source) pour sortir du cadre ce qui
  ne doit pas etre vu.
- Aucune marque suggeree : le pin ne montre pas le produit, il montre le geste.

Usage (depuis la racine guide-beaute) :
    python scripts/make_pins_photo_only.py
"""
import os

from PIL import Image

BASE = os.path.join("docs", "contenus-a-valider", "visuels")
SRC = os.path.join("docs", "contenus-a-valider", "sources")

W, H = 1000, 1500


def crop_fill(im, w, h, cx=0.5, cy=0.5):
    """Recadre au bon ratio en gardant le point (cx, cy) dans le cadre."""
    ratio_cible = w / h
    lw, lh = im.size
    if lw / lh > ratio_cible:          # source trop large : on coupe a gauche/droite
        nw = round(lh * ratio_cible)
        nh = lh
    else:                              # source trop haute : on coupe en haut/bas
        nw = lw
        nh = round(lw / ratio_cible)
    x = max(0, min(lw - nw, round(lw * cx - nw / 2)))
    y = max(0, min(lh - nh, round(lh * cy - nh / 2)))
    return im.crop((x, y, x + nw, y + nh)).resize((w, h), Image.LANCZOS)


def compose(pin):
    im = Image.open(os.path.join(SRC, pin["src"])).convert("RGB")
    if "box" in pin:
        l, t, r, b = pin["box"]
        photo = im.crop((l, t, r, b)).resize((W, H), Image.LANCZOS)
    else:
        photo = crop_fill(im, W, H, pin.get("cx", 0.5), pin.get("cy", 0.5))

    out_dir = os.path.join(BASE, pin.get("dir", "makeup"))
    os.makedirs(out_dir, exist_ok=True)
    jpg = os.path.join(out_dir, f"pin-{pin['code']}.jpg")
    photo.save(jpg, quality=92, optimize=True, progressive=True)
    print(f"{pin['code']}  {os.path.getsize(jpg) // 1024} Ko  {pin['src']}")


# --- 20/11 : trois pins sans texte, tableau make-up, comme le trio du 19/11 ---

# /product/real-techniques-everyday-essentials/ — « Five tools, four jobs
# covered: base, cheeks, powder and eye ». Photo : tetes de brosses en macro sur
# fond blanc, aucune marque lisible. Cadrage vertical sur les deux plus grosses.
RT_FIVE = dict(src="pex-205923.jpg", code="P34", dir="makeup",
               box=(380, 0, 1347, 1451))

# /product/tweezerman-classic-lash-curler/ — « curl before mascara, pad at the
# base of the lash line », « no heat, no battery ». Photo : recourbeur tenu
# contre l'oeil, main reelle. Cadrage serre sur l'oeil et le recourbeur : il
# sort du cadre le compact noir du bas, dont le couvercle porte un logo.
CURLER = dict(src="pex-7281623.jpg", code="P35", dir="makeup",
              box=(400, 900, 1250, 2175))

# /guides/beginner-makeup-routine-5-steps/ — « five steps, in a fixed sequence »
# et « lashes last ». Photo volontairement neutre : ni poudre ni fard, parce que
# le guide dit que la poudre de finition ne fait pas partie d'une routine de
# debutante. Un visage, un pinceau, aucune marque.
ROUTINE = dict(src="pex-8990586.jpg", code="P36", dir="makeup")

PINS = [RT_FIVE, CURLER, ROUTINE]


if __name__ == "__main__":
    for p in PINS:
        compose(p)
