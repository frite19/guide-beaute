import csv
import io
import os
import re

DL = r"C:\Users\Administrator\Downloads"
TOP = os.path.join(DL, "searched_with_top-searches_queries_US_20260101-0000_20261026-1319.csv")
RIS = os.path.join(DL, "searched_with_rising-searches_queries_US_20260101-0000_20261026-1318.csv")


def load(path):
    out = []
    for r in csv.DictReader(io.open(path, encoding="utf-8-sig")):
        raw = r["increase percent"].replace("\u202f", "").replace("\xa0", "")
        inc = re.sub(r"[^0-9-]", "", raw)
        out.append((r["query"], int(r["search interest"]), int(inc) if inc not in ("", "-") else 0))
    return out


top = load(TOP)
ris = load(RIS)
allq = [q for q, _, _ in top + ris]
print("top:", len(top), "| rising:", len(ris), "| total:", len(allq))

clusters = {
    "body wash / oil wash": ["body wash", "oil body wash", "body oil wash", "shower oil"],
    "body oil (usage)": ["body oil", "dry body oil", "glow oil", "shimmer", "massage", "baby oil"],
    "body butter / shea": ["body butter", "shea", "whipped", "josie maran"],
    "ordre d'application": ["before or after", "first"],
    "parfum / senteur": ["perfume", "scented", "vanilla", "fragrance"],
}
for name, keys in clusters.items():
    n = sum(1 for q in allq if any(k in q.lower() for k in keys))
    print(f"  {name:24} {n:3} requetes")

print("\nquestions posees :")
for q in allq:
    if any(q.lower().startswith(w) for w in ("does", "how", "what", "when", "can", "is ")):
        print("   -", q)

print("\nrequetes avec hausse >= 50% (top + rising) :")
merged = {}
for q, i, inc in top + ris:
    merged[q] = (i, inc)
for q, (i, inc) in sorted(merged.items(), key=lambda x: -x[1][1]):
    if inc >= 50:
        print(f"   {inc:5}%  {q}  (interet {i})")

print("\n--- Pinterest Analytics (fichiers presents) ---")
for name in sorted(os.listdir(DL)):
    if name.startswith("Pinterest Analytics overview"):
        print("\n###", name)
        with io.open(os.path.join(DL, name), encoding="utf-8-sig", errors="replace") as fh:
            for line in fh:
                print("   ", line.rstrip()[:160])
