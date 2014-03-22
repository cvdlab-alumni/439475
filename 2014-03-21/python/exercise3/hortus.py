from pyplasm import *
#6

x_lato = QUOTE([12])
x_latoc = QUOTE([5,-2,5])
y_lato = QUOTE([4])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([4])(x_latoc)

contorno = COLOR(GREEN)(SKELETON(1)(STRUCT([x_lato,T([1])([12])(yt),yt,xc])))

contprod = (PROD)([contorno,Q(4)])

#VIEW(contprod)