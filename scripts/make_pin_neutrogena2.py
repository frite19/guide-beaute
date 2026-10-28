from PIL import Image, ImageDraw, ImageFont

W, H = 1000, 1500
TEAL = (0, 106, 122, 255)
YELLOW = (255, 214, 64)

def load_fonts():
    fonts = {}
    for key, path, size in [
        ("black_head", "C:/Windows/Fonts/ariblk.ttf", 108),
        ("black_sub", "C:/Windows/Fonts/ariblk.ttf", 74),
        ("black_mid", "C:/Windows/Fonts/ariblk.ttf", 46),
        ("bold_pill", "C:/Windows/Fonts/arialbd.ttf", 30),
        ("bold_sub", "C:/Windows/Fonts/arialbd.ttf", 38),
        ("bold_bullet", "C:/Windows/Fonts/arialbd.ttf", 34),
        ("bold_cta", "C:/Windows/Fonts/arialbd.ttf", 40),
        ("small", "C:/Windows/Fonts/arialbd.ttf", 26),
    ]:
        try:
            fonts[key] = ImageFont.truetype(path, size)
        except Exception:
            fonts[key] = ImageFont.load_default()
    return fonts

def center(d, y, t, f, fill, stroke=(0, 0, 0), sw=3):
    bb = d.textbbox((0, 0), t, font=f)
    tw = bb[2] - bb[0]
    d.text(((W - tw) // 2, y), t, font=f, fill=fill, stroke_width=sw, stroke_fill=stroke)

def crop_resize(path):
    img = Image.open(path).convert("RGB")
    sw, sh = img.size
    r = W / H
    sr = sw / sh
    if sr > r:
        nw = int(sh * r)
        lf = (sw - nw) // 2
        img = img.crop((lf, 0, lf + nw, sh))
    else:
        nh = int(sw / r)
        tp = (sh - nh) // 2
        img = img.crop((0, tp, sw, tp + nh))
    return img.resize((W, H), Image.LANCZOS)

def draw_check(d, x, y, color="white"):
    d.line([(x, y + 18), (x + 14, y + 32)], fill=color, width=8)
    d.line([(x + 14, y + 32), (x + 42, y - 4)], fill=color, width=8)

def build(base, out, emphasis_word):
    F = load_fonts()
    img = crop_resize(base)
    d = ImageDraw.Draw(img, "RGBA")

    # top gradient for readability
    for y in range(0, 700):
        a = int(185 * (1 - y / 700))
        d.rectangle([(0, y), (W, y + 1)], fill=(8, 24, 34, a))

    # brand pill top
    pt = "NEUTROGENA  |  MAKEUP REMOVER"
    f = F["bold_pill"]
    bb = d.textbbox((0, 0), pt, font=f)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    d.rounded_rectangle([(W - tw) // 2 - 30, 68, (W + tw) // 2 + 30, 68 + th + 34],
                        radius=40, fill=(0, 0, 0, 150), outline="white", width=3)
    d.text(((W - tw) // 2, 88), pt, font=f, fill="white")

    # headline
    center(d, 210, "ONE WIPE", F["black_head"], "white")
    center(d, 345, "REMOVES IT ALL", F["black_sub"], YELLOW)
    center(d, 470, "99% of makeup - even waterproof mascara*", F["bold_sub"], "white", sw=2)

    # respect photo face: bullets zone from 1140
    panel_top = 1080
    for y in range(panel_top, H):
        a = int(205 * (1 - (H - y) / H) if y > H - 60 else 190)
        d.rectangle([(0, y), (W, y + 1)], fill=(8, 24, 34, a))
    d.rectangle([(0, panel_top), (W, panel_top + 5)], fill=TEAL)

    y = panel_top + 40
    for t in ["Ultra-soft micellar wipes", "No alcohol - no rinse needed", "2 x 25 ct twin pack"]:
        f = F["bold_bullet"]
        bb = d.textbbox((0, 0), t, font=f)
        tw = bb[2] - bb[0]
        x0 = (W - (tw + 70)) // 2
        draw_check(d, x0, y + 2)
        d.text((x0 + 70, y), t, font=f, fill="white")
        y += 62

    # CTA bar
    cta_top = H - 130
    d.rectangle([(0, cta_top), (W, H)], fill=TEAL)
    ct = "USA BEST SELLER  »  READ FULL REVIEW"
    f = F["bold_cta"]
    bb = d.textbbox((0, 0), ct, font=f)
    tw = bb[2] - bb[0]
    d.text(((W - tw) // 2, cta_top + 42), ct, font=f, fill="white")
    center(d, H - 44, "Eclatia - Beauty Guide USA", F["small"], (220, 240, 245), sw=2)

    img.save(out, "PNG")
    print(f"saved {out}")

build("public/pins/base-neutA.jpg", "public/pins/pin-neutrogena-newA.png", "A")
build("public/pins/base-neutB.jpg", "public/pins/pin-neutrogena-newB.png", "B")
