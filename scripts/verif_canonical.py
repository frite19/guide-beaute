import os
import re

root = "out"
rows = []
missing = []

for dp, dn, fn in os.walk(root):
    if "index.html" not in fn:
        continue
    p = os.path.join(dp, "index.html")
    h = open(p, encoding="utf-8", errors="ignore").read()
    c = re.search(r'<link rel="canonical" href="([^"]+)"', h)
    t = re.search(r"<title>([^<]+)</title>", h)
    rel = os.path.relpath(dp, root).replace("\\", "/")
    rows.append((rel, c.group(1) if c else None, t.group(1) if t else None))
    if not c:
        missing.append(rel)

print("pages analysees :", len(rows))
print("sans canonical :", missing if missing else "aucune")
print()
for rel, canon, title in rows:
    print(f"{rel or '/':42} -> {canon or 'MANQUANT'}")
print()

mismatch = [r for r in rows if r[1] and not r[1].startswith("https://guide-beaute.pages.dev/")]
print("canonical hors domaine :", mismatch if mismatch else "aucun")

search = open("out/search/index.html", encoding="utf-8", errors="ignore").read()
print("search noindex :", bool(re.search(r'<meta name="robots" content="[^"]*noindex', search)))
guide = open("out/guides/beginner-glow-routine/index.html", encoding="utf-8", errors="ignore").read()
print("titre guide :", re.search(r"<title>([^<]+)</title>", guide).group(1))
