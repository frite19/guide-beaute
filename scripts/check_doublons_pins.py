"""Detecte les doublons potentiels entre les nouveaux pins et ceux deja crees."""
import os
from PIL import Image

OLD_DIR = "public/pins"
NEW_DIR = "pin 2"


def dhash(path, size=8):
    im = Image.open(path).convert("L").resize((size + 1, size), Image.LANCZOS)
    px = list(im.getdata())
    bits = 0
    for row in range(size):
        for col in range(size):
            left = px[row * (size + 1) + col]
            right = px[row * (size + 1) + col + 1]
            bits = (bits << 1) | (1 if left > right else 0)
    return bits


def distance(a, b):
    return bin(a ^ b).count("1")


olds = {}
for f in sorted(os.listdir(OLD_DIR)):
    if f.startswith("pin-") and f.endswith(".png"):
        olds[f] = dhash(os.path.join(OLD_DIR, f))

news = {}
for f in sorted(os.listdir(NEW_DIR)):
    if f[0].isdigit() and f.endswith(".png"):
        news[f] = dhash(os.path.join(NEW_DIR, f))

print("Comparaison nouveau pin <-> ancien pin (0 = identique, <6 = quasi identique)\n")
worst = []
for nf, nh in news.items():
    best = min(olds.items(), key=lambda kv: distance(nh, kv[1]))
    d = distance(nh, best[1])
    worst.append((d, nf, best[0]))
    print(f"{nf:38} plus proche de {best[0]:32} distance {d:2}")

print("\nDistance minimale globale :", min(w[0] for w in worst))
print("Verdict :", "AUCUN doublon visuel" if min(w[0] for w in worst) >= 6 else "RISQUE DE DOUBLON")
