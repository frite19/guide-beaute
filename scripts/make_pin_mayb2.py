from PIL import Image, ImageDraw, ImageFont

SRC = "public/pins/nouveau/Agent Image - Create a polished beauty advertisement photograph in portrait format_ A beautiful youn.png"
OUT = "public/pins/pin-maybelline-stick-v2.png"
W, H = 1000, 1500
PHOTO_H = 930

img = Image.open(SRC).convert("RGB")
sw, sh = img.size
photo = img.crop((0, 0, sw, 1470))
pw, ph = photo.size
pw_ph_scale = ph / PHOTO_H
new_w = int(pw / pw_ph_scale)
if new_w >= W:
    off = (new_w - W) // 2
    photo = photo.resize((new_w, PHOTO_H), Image.LANCZOS).crop((off, 0, off + W, PHOTO_H))
else:
    photo = photo.resize((W, PHOTO_H), Image.LANCZOS)
photo.save("public/pins/base-maybelline-stick-clean.jpg", quality=92)

pin = Image.new("RGB", (W, H), (233, 214, 195))
pin.paste(photo, (0, 0))
d = ImageDraw.Draw(pin, "RGBA")

try:
    f_big = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 76)
    f_sub = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 40)
    f_small = ImageFont.truetype("C:/Windows/Fonts/ariali.ttf", 32)
except Exception:
    f_big = f_sub = f_small = ImageFont.load_default()

DARK = (63, 42, 29)
def center(y, t, f, fill):
    bb = d.textbbox((0, 0), t, font=f)
    tw = bb[2] - bb[0]
    d.text(((W - tw) // 2 - bb[0], y), t, font=f, fill=fill)

y = 955
center(y, "Matte, Shine-Free", f_big, "white")
center(y + 2, "Matte, Shine-Free", f_big, DARK)
y = 1045
center(y, "Foundation Stick", f_big, "white")
center(y + 2, "Foundation Stick", f_big, DARK)
y = 1155
center(y, "Multi-use: foundation + contour,", f_sub, DARK)
y += 55
center(y, "buildable light-to-medium coverage", f_sub, DARK)
y += 92
center(y, "Photo is illustrative.", f_small, (110, 85, 70))

d.rectangle([(0, H - 130), (W, H)], fill=(63, 42, 29, 235))
bc = "Eclatia - Beauty Guide USA"
bb = d.textbbox((0, 0), bc, font=f_sub)
d.text(((W - (bb[2] - bb[0])) // 2, H - 90), bc, font=f_sub, fill="white")

pin.save(OUT, "PNG")
print("saved", OUT)
