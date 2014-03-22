from pyplasm import *
#8

x_lato = QUOTE([3,-1.5,0.5,-2,0.5,-1.5,3]) #lato che combacera con con sette
x_latoc = QUOTE([3,-6,3])
y_lato = QUOTE([3])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([3])(x_latoc)

contorno = COLOR(BLACK)(SKELETON(1)(STRUCT([x_lato,T([1])([12])(yt),yt,xc])))

#VIEW(contorno)