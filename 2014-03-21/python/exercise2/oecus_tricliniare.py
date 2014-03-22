from pyplasm import *
import window
#7

x_lato = QUOTE([5])
x_latoc = QUOTE([0.5,-1.5,3])
y_lato = QUOTE([2])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([2])(x_latoc)

wind1 = window.window1 #contorno finestra
wind1r = R([2,3])(PI/2)(wind1)
wind1rr = R([1,2])(PI/2)(wind1r) 
wind1rrt = T([1,2,3])([5,0.5,1])(wind1rr)
wind1rrt2 = T([1,2,3])([0,0.5,1])(wind1rr)#finestra lato a destra

contorno = SKELETON(1)(STRUCT([x_lato,T([1])([5])(yt),yt,xc]))

contprod = STRUCT([(PROD)([contorno,Q(4)]),wind1rrt,wind1rrt2])
#house = DIFFERENCE([contprod0,wind1rrt])


#VIEW(STRUCT([wind1rrt,contprod0,wind1rrt2]))