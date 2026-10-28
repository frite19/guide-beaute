"""Compare deux visuels locaux (dHash) pour savoir s'ils sont identiques."""
import os
from PIL import Image

BASE = r"D:\open application\guide-beaute"


def dhash(path, size=8):
    img = Image.open(path).convert("L").resize((size + 1, size), Image.LANCZOS)
    px = list(img.getdata())
    bits = ""
    for row in range(size):
        for col in range(size):
            bits += "1" if px[row * (size + 1) + col] < px[row * (size + 1) + col + 1] else "0"
    return int(bits, 2)


def dist(a, b):
    return bin(a ^ b).count("1")


fitme = dhash(os.path.join(BASE, "public", "pins", "pin-maybelline-fitme.png"))
mascara = dhash(os.path.join(BASE, "pin 2", "02-Maybelline-mascara.png"))
online = dhash(r"C:\Users\Administrator\AppData\Local\Temp\opencode\pincheck\pin_online.png")

print("distance pin-maybelline-fitme.png  <-> 02-Maybelline-mascara.png :", dist(fitme, mascara), "/64")
print("distance image Pinterest (pin 773308) <-> pin-maybelline-fitme.png :", dist(online, fitme), "/64")
print("distance image Pinterest (pin 773308) <-> 02-Maybelline-mascara.png :", dist(online, mascara), "/64")
