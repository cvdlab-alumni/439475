from pyplasm import *
import window
#8

x_lato = QUOTE([3,-1.5,0.5,-2,0.5,-1.5,3]) #lato che combacera con con sette
x_latoc = QUOTE([3,-6,3])
y_lato = QUOTE([3])

x1 = INSR(PROD)([x_lato,Q(0.3),Q(4)])
x1c = INSR(PROD)([x_latoc,Q(0.3),Q(4)])
y1 = INSR(PROD)([y_lato,Q(0.3),Q(4)])

yt = R([1,2])(PI/2)(y1)
xc = T([2])([3.3])(x1c)

wind2 = window.window2 #contorno finestra
wind2r = R([2,3])(PI/2)(wind2)
wind2rr = R([1,2])(PI/2)(wind2r)
wind2rrt = T([1,2,3])([-0.5,1,2])(wind2rr)
wind2rrt2 = T([1,2,3])([11.5,1,2])(wind2rr)

yt1 = DIFF([T([1])([12.3])(yt),wind2rrt2])
yt2 = DIFF([yt,wind2rrt])

contprod = COLOR([1.39,1.21,0.94])(SKELETON(3)(STRUCT([yt1,yt2,xc])))

#VIEW(STRUCT([contprod]))