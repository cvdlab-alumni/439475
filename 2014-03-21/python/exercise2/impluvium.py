from pyplasm import *
#4

x_lato = QUOTE([3])
y_lato = QUOTE([3])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([3])(x_lato)

contorno = COLOR(BLUE)(SKELETON(1)(STRUCT([x_lato,T([1])([3])(yt),yt,xc])))

contprod = (PROD)([contorno,Q(2)])

#VIEW(contprod)