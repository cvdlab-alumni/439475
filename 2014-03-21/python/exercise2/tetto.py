from pyplasm import*

pts = [[0,0],[0,0,2],[0,2]]
p = AA(MK)(pts) 
s = STRUCT(AA(JOIN)([p[0:3]]))
s1 = T([1])([12])(s)
d = JOIN([s,s1])
d1 = SKELETON(1)(d)
d2 = R([1,2])(PI)(d1)

pts02 = [[0,0,2],[6,0,2],[6,6,2],[0,6,2]]
p02 = AA(MK)(pts02) 
s02 = STRUCT(AA(JOIN)([p02[0:4]]))
s021 = T([1])([2])(s02)
d02 = JOIN([s02,s021])
d021 = SKELETON(1)(d02)
d022 = R([1,2])(PI)(d021)

pts23 = [[0,0,0],[3,0,0],[3,3,0],[0,3,0]]
p23 = AA(MK)(pts23) 
s23 = STRUCT(AA(JOIN)([p23[0:4]]))
s321 = T([1])([2])(s23)
d23 = JOIN([s23,s321])
d321 = SKELETON(1)(d23)
d322 = R([1,2])(PI)(d321)
d322t = T([1,2])([-1.5,-1.5])(d322)

pts024 = [[0,0,0],[6,0,0],[6,6,0],[0,6,0]]
p024 = AA(MK)(pts024) 
s024 = STRUCT(AA(JOIN)([p024[0:4]]))
s0214 = T([1])([2])(s024)
d024 = JOIN([s02,s0214])
d0214 = SKELETON(1)(d024)
d0224 = R([1,2])(PI)(d0214)

quad = JOIN([d022,d322t])
quad2 = JOIN([d0224,d022])
quad31 = DIFF([quad,quad2])
quad32 = DIFF([quad2,quad])
quad33 = STRUCT([quad31,quad32])
quad1 = SKELETON(1)(quad33)



#contorno = COLOR(BLACK)(SKELETON(1)(STRUCT([x_lato,T([1])([3])(yt),yt1,xc])))

#VIEW(STRUCT([quad1]))