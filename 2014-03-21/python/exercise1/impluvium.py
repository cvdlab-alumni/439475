from pyplasm import *
#2

x_lato = QUOTE([2])
y_lato = QUOTE([4])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([4])(x_lato)

contorno = COLOR(BLUE)(SKELETON(1)(STRUCT([x_lato,T([1])([2])(yt),yt,xc])))

#VIEW(contorno)