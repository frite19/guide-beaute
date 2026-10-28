from PIL import Image, ImageDraw, ImageFont
import os

BASE = "public/pins/base.jpg"
OUT = "public/pins/pin-revlon-one-step.png"
W, H = 1000, 1500

img = Image.open(BASE).convert("RGB")
src_w, src_h = img.size
target_ratio = W / H
src_ratio = src_w / src_h
if src_ratio > target_ratio:
    new_w = int(src_h * target_ratio)
    left = (src_w - new_w) // 2
    img = img.crop((left, 0, left + new_w, src_h))
else:
    new_h = int(src_w / target_ratio)
    top = (src_h - new_h) // 2
    img = img.crop((0, top, src_w, top + new_h))
img = img.resize((W, H), Image.LANCZOS)

draw = ImageDraw.Draw(img, "RGBA")
for y in range(0, 550):
    alpha = int(160 * (1 - y / 550))
    draw.rectangle([(0, y), (W, y+1)], fill=(0, 0, 0, alpha))

try:
    font_big = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 78)
    font_small = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 42)
except Exception:
    font_big = ImageFont.load_default()
    font_small = ImageFont.load_default()

def center_text(y, text, font, fill="white"):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) // 2, y), text, font=font, fill=fill, stroke_width=2, stroke_fill=(0,0,0))

center_text(90, "Revlon One-Step", font_big)
center_text(180, "Review", font_big)
center_text(280, "Worth It? Honest USA Test", font_small)
badge_h = 130
draw.rectangle([(0, H-badge_h), (W, H)], fill=(0,0,0,180))
bc = "Eclatia - Beauty Guide USA"
bbox = draw.textbbox((0,0), bc, font=font_small)
tw = bbox[2]-bbox[0]
draw.text(((W-tw)//2, H-badge_h+40), bc, font=font_small, fill=(255,255,255))

os.makedirs(os.path.dirname(OUT), exist_ok=True)
img.save(OUT, "PNG")
print(f"saved {OUT} {img.size}")
