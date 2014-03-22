from pyplasm import *
#7

x_lato = QUOTE([5])
x_latoc = QUOTE([0.5,-1.5,3])
y_lato = QUOTE([2])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([2])(x_latoc)

contorno = COLOR(BLACK)(SKELETON(1)(STRUCT([x_lato,T([1])([5])(yt),yt,xc])))

#VIEW(contorno)