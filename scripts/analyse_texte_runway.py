from PIL import Image
import sys

src = sys.argv[1]
img = Image.open(src)
print("size:", img.size)
g = img.convert("L")
w, h = g.size
# scan lower 40% row by row: max brightness in left 70% (text zone)
rows = []
for y in range(int(h * 0.55), h, 4):
    strip = g.crop((0, y, int(w * 0.72), y + 1))
    mx, mn = strip.getextrema()[1], strip.getextrema()[0]
    rows.append((y, mn, mx))
# print rows where very bright pixels (white text) appear
for y, mn, mx in rows:
    flag = "TEXT" if mx >= 250 else ""
    if flag or y % 100 < 4:
        print(y, mn, mx, flag)
