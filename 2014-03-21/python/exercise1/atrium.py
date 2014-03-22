from pyplasm import *

#3

x_lato = QUOTE([1,-4,1]) #lato che combacera con con sette
y_lato = QUOTE([3])
y_latoc = QUOTE([0.5,-1.5,1])

yt = R([1,2])(PI/2)(y_latoc)
yt1 = R([1,2])(PI/2)(y_lato)
xc = T([2])([3])(x_lato)

contorno = COLOR(BLACK)(SKELETON(1)(STRUCT([T([1])([6])(yt),yt,xc])))

#VIEW(contorno)