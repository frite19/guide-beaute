"""Compare l'image d'une épingle Pinterest (telechargee) avec les visuels locaux (dHash)."""
import os
from PIL import Image

ONLINE = r"C:\Users\Administrator\AppData\Local\Temp\opencode\pincheck\pin_online.png"
ROOTS = [r"D:\open application\guide-beaute\pin 2", r"D:\open application\guide-beaute\public\pins"]


def dhash(img, size=8):
    img = img.convert("L").resize((size + 1, size), Image.LANCZOS)
    px = list(img.getdata())
    bits = []
    for row in range(size):
        for col in range(size):
            left = px[row * (size + 1) + col]
            right = px[row * (size + 1) + col + 1]
            bits.append("1" if left < right else "0")
    return int("".join(bits), 2)


def hamming(a, b):
    return bin(a ^ b).count("1")


online = Image.open(ONLINE)
oh = dhash(online)
print("image Pinterest :", online.size)

rows = []
for root in ROOTS:
    if not os.path.isdir(root):
        continue
    for name in sorted(os.listdir(root)):
        if not name.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            continue
        path = os.path.join(root, name)
        try:
            im = Image.open(path)
            rows.append((hamming(oh, dhash(im)), im.size, os.path.basename(root), name))
        except Exception as exc:  # noqa: BLE001
            print("erreur", name, exc)

rows.sort()
print("\ncorrespondances les plus proches (distance 0 = image identique) :")
for dist, size, root, name in rows[:6]:
    print(f"  {dist:2}/64  {size[0]}x{size[1]}  {root}\\{name}")
