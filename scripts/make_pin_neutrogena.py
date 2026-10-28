from PIL import Image, ImageDraw, ImageFont
W,H=1000,1500
fb=ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf",82)
fm=ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf",54)
fs=ImageFont.truetype("C:/Windows/Fonts/arial.ttf",44)
img=Image.new("RGB",(W,H))
d=ImageDraw.Draw(img,"RGBA")
top=(29,53,87); bot=(69,123,157)
for y in range(H):
    t=y/H
    d.line([(0,y),(W,y)],fill=(int(top[0]+(bot[0]-top[0])*t),int(top[1]+(bot[1]-top[1])*t),int(top[2]+(bot[2]-top[2])*t)))
d.ellipse([(760,-220),(1300,320)],outline=(250,250,250,60),width=10)
d.ellipse([(-260,1160),(280,1600)],fill=(168,218,220,50))
def ct(y,txt,f,fill="white"):
    bb=d.textbbox((0,0),txt,font=f); d.text(((W-(bb[2]-bb[0]))//2,y),txt,font=f,fill=fill,stroke_width=3,stroke_fill=(0,0,0))
ct(110,"Neutrogena",fb)
ct(205,"Micellar Wipes",fb)
ct(330,"Remove waterproof mascara in one step - no rinse",fs)
y=560
for line in ["OK  99% of makeup gone","OK  Alcohol-free, gentle","OK  Ultra-soft plant-based","OK  2 packs of 25 wipes"]:
    bb=d.textbbox((0,0),line,font=fm); d.text(((W-(bb[2]-bb[0]))//2,y),line,font=fm,fill="white",stroke_width=2,stroke_fill=(0,0,0)); y+=92
d.rounded_rectangle([(200,H-330),(W-200,H-210)],radius=25,fill=(241,250,238))
b=d.textbbox((0,0),"USA REVIEW - Eclatia",font=fm); d.text(((W-(b[2]-b[0]))//2,H-290),"USA REVIEW - Eclatia",font=fm,fill=(29,53,87))
fs2=ImageFont.truetype("C:/Windows/Fonts/arial.ttf",36)
b=d.textbbox((0,0),"guide-beaute.pages.dev",font=fs2); d.text(((W-(b[2]-b[0]))//2,H-160),"guide-beaute.pages.dev",font=fs2,fill=(255,255,255,200))
img.save("public/pins/pin-neutrogena-wipes.png","PNG")
print("saved 1000x1500")
