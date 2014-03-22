from pyplasm import *
#2

x_lato = QUOTE([4])
y_lato = QUOTE([5])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([5])(x_lato)

contorno = COLOR(GREEN)(SKELETON(1)(STRUCT([x_lato,T([1])([4])(yt),yt,xc])))

#VIEW(contorno)