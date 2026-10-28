import urllib.request
ids = {
    "base-neutA.jpg": "7269467",   # femme, bandeau, nettoyage joue au soleil
    "base-neutB.jpg": "5468609",   # femme utilisant une lingette/pad demaquillant
}
for out, pid in ids.items():
    url = f"https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=1400"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    data = urllib.request.urlopen(req, timeout=30).read()
    open("public/pins/" + out, "wb").write(data)
    print(out, len(data), "bytes")
