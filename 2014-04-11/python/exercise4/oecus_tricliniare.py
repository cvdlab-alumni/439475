from pyplasm import *
import window
#7

x_lato = QUOTE([5])
x_latoc = QUOTE([0.5,-1.5,3])
y_lato = QUOTE([2])

x1 = INSR(PROD)([x_lato,Q(0.3),Q(4)])
x2 = INSR(PROD)([x_latoc,Q(0.3),Q(4)])
y1 = INSR(PROD)([y_lato,Q(0.3),Q(4)])

yt = R([1,2])(PI/2)(y1)
xc = T([2])([1.7])(x2)

wind1 = window.window1 #contorno finestra
wind1r = R([2,3])(PI/2)(wind1)
wind1rr = R([1,2])(0)(wind1r) 
wind1rrt2 = T([1,2,3])([-.5,1.5,2])(wind1rr)#finestra lato a destra

diff2yt = DIFF([yt,wind1rrt2])
contprod = SKELETON(3)(STRUCT([T([1])([5])(diff2yt),diff2yt,xc,x1]))

#contprod = STRUCT([(PROD)([contorno,Q(4)]),wind1rrt,wind1rrt2])
#house = DIFFERENCE([contprod0,wind1rrt])


#VIEW(STRUCT([yt,wind1rrt2]))