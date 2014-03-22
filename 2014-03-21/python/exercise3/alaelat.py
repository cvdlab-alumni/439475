from pyplasm import *

#9

x_lato = QUOTE([3]) #lato che combacera con con sette
y_lato = QUOTE([3])
y_latoc = QUOTE([0.5,-1.5,1])

yt = R([1,2])(PI/2)(y_latoc)
yt1 = R([1,2])(PI/2)(y_lato)
xc = T([2])([3])(x_lato)

contorno = COLOR(BLACK)(SKELETON(1)(STRUCT([x_lato,T([1])([3])(yt),yt1,xc])))

contprod = (PROD)([contorno,Q(4)])

#VIEW(contprod)