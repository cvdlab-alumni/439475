from pyplasm import *

#1

x_lato = QUOTE([1,-2,1]) #lato che combacera con con sette
y_lato = QUOTE([5])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([5])(x_lato)

contorno = COLOR(BLACK)(SKELETON(1)(STRUCT([T([1])([4])(yt),yt,xc])))

#VIEW(contorno)