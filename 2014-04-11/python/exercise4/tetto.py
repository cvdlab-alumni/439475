from pyplasm import*

pts = [[0,0],[0,0,2],[0,3]]
p = AA(MK)(pts) 
s = STRUCT(AA(JOIN)([p[0:3]]))
s1 = T([1])([12])(s)
d = JOIN([s,s1])
d1 = SKELETON(2)(d)
d2 = R([1,2])(PI)(d1)

pts02 = [[0,0,2],[6,0,2],[6,6,2],[0,6,2]]
p02 = AA(MK)(pts02) 
s02 = STRUCT(AA(JOIN)([p02[0:4]]))
s021 = T([1])([2])(s02)
d02 = JOIN([s02,s021])
d021 = SKELETON(1)(d02)
d022 = R([1,2])(PI)(d021)

pts23 = [[0,0,0],[1.5,0,0],[1.5,1.5,0],[0,1.5,0]]
p23 = AA(MK)(pts23) 
s23 = STRUCT(AA(JOIN)([p23[0:4]]))
s321 = T([1])([2])(s23)
d23 = JOIN([s23,s321])
d321 = SKELETON(1)(d23)
d322 = R([1,2])(PI)(d321)
d322t = T([1,2])([-2,-2])(d322)

pts024 = [[0,0,0],[6,0,0],[6,6,0],[0,6,0]]
p024 = AA(MK)(pts024) 
s024 = STRUCT(AA(JOIN)([p024[0:4]]))
s0214 = T([1])([2])(s024)
s0215 = T([1,3])([2,2])(s024)
d024 = JOIN([s0215,s0214])
d0214 = SKELETON(1)(d024)
d0224 = R([1,2])(PI)(d0214)

ptsface = [[0,0],[0,0,1.5],[7,3]]
pface = AA(MK)(ptsface) 
sface = STRUCT(AA(JOIN)([pface[0:3]]))
s1face = T([1])([12])(sface)
dface = JOIN([sface,s1face])
d1face = SKELETON(1)(dface)
d2face = R([1,2])(2*PI)(d1face)

verts = [[0,0,0],[0,0,1.5],[7,-2,0],[0,8,0],[0,8,1.5],[7,10,0]]
cells = [[1,2,3,4,5,6]]
pols = None
d2fac = MKPOL([verts, cells, pols])
d2face = R([1,2])(PI/2)(d2fac)
#VIEW(d2face)

vertslatsin = [[0,0,0],[0,0,1.5],[6,0,1.5],[6,0,0],[0,2,0],[13,2,0]]
cellslatsin = [[1,2,3,4,5,6]]
pols = None
d2latsi = MKPOL([vertslatsin, cellslatsin, pols])
d2latsin = R([1,2])(PI/2)(d2latsi)

vertslatdex = [[0,0,0],[0,0,1.5],[6,0,1.5],[6,0,0],[0,-2,0],[13,-2,0]]
cellslatdex = [[1,2,3,4,5,6]]
pols = None
d2latde = MKPOL([vertslatdex, cellslatdex, pols])
d2latdex = R([1,2])(PI/2)(d2latde)

#VIEW(STRUCT([d2latdex]))


cubo = CUBOID([8,6,2])
cuboR = R([1,2])(PI)(cubo)



quad = JOIN([d022,d322t])
quad2diff = DIFF([cuboR,quad])

quad2 = JOIN([d0224,d022])
quad31 = DIFF([quad,quad2])
quad32 = DIFF([quad2,quad])
quad33 = STRUCT([quad32,quad31])
quad1 = SKELETON(3)(quad2diff)



#contorno = COLOR(BLACK)(SKELETON(1)(STRUCT([x_lato,T([1])([3])(yt),yt1,xc])))

#VIEW(STRUCT([]))



