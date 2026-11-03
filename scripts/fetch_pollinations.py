"""Recupere 6 visuels FLUX via Pollinations (gratuit, sans cle, sans quota).

Utilise quand le Space HF renvoie « ZeroGPU quota exhausted ». Le modele
demande est bien FLUX ; le filigrane eventuel en bas de l'image tombe hors du
recadrage 1000 x 1020 utilise par les pins.

Sortie : docs/contenus-a-valider/visuels/produits/gen3/Pxx-cN.jpg
"""
import os
import time
import urllib.parse
import urllib.request

OUT = os.path.join("docs", "contenus-a-valider", "visuels", "produits", "gen3")

JOBS = [
    (
        "P16-c1",
        "top down photo of six glossy blush pink hydrogel toner pads fanned on a cream ceramic tray, "
        "tiny water droplets, soft morning window light, warm ivory background, minimal korean skincare editorial",
    ),
    (
        "P16-c2",
        "macro photo of a stack of translucent pink hydrogel pads with visible gel edges, dewy surface, "
        "on a matte cream stone slab, soft directional light, high detail cosmetic texture",
    ),
    (
        "P16-c3",
        "still life photo of pink hydrogel pads in a shallow cream ceramic dish beside a small clear glass "
        "bottle of essence and a folded ivory towel, warm bathroom light, calm spa mood",
    ),
    (
        "P17-c1",
        "photo of two plain cream travel size lotion tubes standing on a warm beige plaster ledge, "
        "one tube with a ribbon of white lotion at the nozzle, caramel silk ribbon, soft window light",
    ),
    (
        "P17-c2",
        "macro photo of a thick swirl of white body lotion on a warm sand coloured stone surface, "
        "glossy creamy texture, soft directional light, minimal cosmetic texture editorial",
    ),
    (
        "P17-c3",
        "top down photo of a plain cream lotion tube on crumpled ivory linen with two dried vanilla pods "
        "and a caramel ribbon, warm afternoon sunlight, window shadows, cozy holiday body care still life",
    ),
]

NEG = "no text, no lettering, no logo, no watermark, no hands, no faces"


def fetch(name, prompt):
    path = os.path.join(OUT, f"{name}.jpg")
    if os.path.exists(path) and os.path.getsize(path) > 20000:
        print("skip", name)
        return
    q = urllib.parse.quote(f"{prompt}, {NEG}")
    url = (
        "https://image.pollinations.ai/prompt/"
        f"{q}?width=1024&height=1536&model=flux&nologo=true&enhance=true&seed={int(time.time()) % 100000}"
    )
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    for attempt in range(3):
        try:
            data = urllib.request.urlopen(req, timeout=180).read()
            if len(data) < 10000:
                raise ValueError(f"too small: {len(data)}")
            with open(path, "wb") as f:
                f.write(data)
            print("ok", name, len(data) // 1024, "Ko")
            return
        except Exception as exc:
            print("retry", name, attempt + 1, type(exc).__name__, exc)
            time.sleep(5)
    print("FAIL", name)


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for n, p in JOBS:
        fetch(n, p)
        time.sleep(2)
