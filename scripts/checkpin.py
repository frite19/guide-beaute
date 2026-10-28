import urllib.request, re
req = urllib.request.Request(
    "https://www.pinterest.com/pin/1115133557770770982/",
    headers={"User-Agent": "Mozilla/5.0"},
)
h = urllib.request.urlopen(req, timeout=25).read().decode("utf-8", "ignore")
for pat in ['"seo_title"', '"grid_title"', '"title"', '"description"']:
    n = 0
    for m in re.finditer(re.escape(pat) + r'\s*:\s*"[^"]{0,200}"', h):
        s = m.group(0)
        val = s.split('"', 2)[-1]
        if not val.startswith("Pin on Hot Air"):
            print(pat, "=>", val[:180])
            n += 1
            if n >= 4:
                break
