from pyplasm import *
import window
#8

x_lato = QUOTE([3,-1.5,0.5,-2,0.5,-1.5,3]) #lato che combacera con con sette
x_latoc = QUOTE([3,-6,3])
y_lato = QUOTE([3])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([3])(x_latoc)

wind2 = window.window2 #contorno finestra
wind2r = R([2,3])(PI/2)(wind2)
wind2rr = R([1,2])(PI/2)(wind2r)
wind2rrt = T([1,2,3])([12,1,2])(wind2rr)
wind2rrt2 = T([1,2,3])([0,1,2])(wind2rr)

contorno = COLOR(BLACK)(SKELETON(1)(STRUCT([x_lato,T([1])([12])(yt),yt,xc])))

contprod = STRUCT([(PROD)([contorno,Q(4)]),wind2rrt,wind2rrt2])


#VIEW(STRUCT([wind2rrt,contprod,wind2rrt2]))