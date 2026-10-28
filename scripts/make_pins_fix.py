from PIL import Image, ImageDraw, ImageFont
JOBS=[
 ("public/pins/base-ceraveA.jpg","public/pins/pin-cerave-cream.png",["CeraVe Cream","Review"],"Dry Sensitive Skin USA?"),
 ("public/pins/base-ceraveB.jpg","public/pins/pin-cerave-alt.png",["CeraVe Cream","Review"],"Dry Sensitive Skin USA?"),
 ("public/pins/base-truskin3.jpg","public/pins/pin-truskin-vitc.png",["TruSkin Vitamin C","Review"],"Glow in 4 Weeks? USA Guide"),
]
W,H=1000,1500
try:
 font_big=ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf",76)
 font_small=ImageFont.truetype("C:/Windows/Fonts/arial.ttf",40)
except Exception:
 font_big=ImageFont.load_default();font_small=ImageFont.load_default()
def center(d,y,t,f):
 bb=d.textbbox((0,0),t,font=f);tw=bb[2]-bb[0]
 d.text(((W-tw)//2,y),t,font=f,fill="white",stroke_width=2,stroke_fill=(0,0,0))
for base,out,lines,sub in JOBS:
 img=Image.open(base).convert("RGB");sw,sh=img.size;r=W/H;sr=sw/sh
 if sr>r:
  nw=int(sh*r);lf=(sw-nw)//2;img=img.crop((lf,0,lf+nw,sh))
 else:
  nh=int(sw/r);tp=(sh-nh)//2;img=img.crop((0,tp,sw,tp+nh))
 img=img.resize((W,H),Image.LANCZOS)
 d=ImageDraw.Draw(img,"RGBA")
 for y in range(0,560):
  d.rectangle([(0,y),(W,y+1)],fill=(0,0,0,int(165*(1-y/560))))
 y=85
 for line in lines:
  center(d,y,line,font_big);y+=95
 center(d,y+10,sub,font_small)
 d.rectangle([(0,H-130),(W,H)],fill=(0,0,0,180))
 bc="Eclatia - Beauty Guide USA";bb=d.textbbox((0,0),bc,font=font_small);tw=bb[2]-bb[0]
 d.text(((W-tw)//2,H-90),bc,font=font_small,fill="white")
 img.save(out,"PNG");print(f"saved {out}")
