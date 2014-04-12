from pyplasm import *
import window
#2

x_lato = QUOTE([4])
y_lato = QUOTE([5])

yt = R([1,2])(PI/2)(y_lato)
xc = T([2])([5])(x_lato)

wind3 = window.window3 #contorno finestra
wind3r = R([2,3])(PI/2)(wind3)
wind3rr = R([1,2])(PI/2)(wind3r)
wind3rrt = T([1,2,3])([4,1,1.5])(wind3rr)
wind3rrt2 = T([1,2,3])([0,1,1.5])(wind3rr)

wind4 = window.windowdav #contorno finestra
wind4r = R([2,3])(PI/2)(wind4)
wind4rr = R([1,3])(PI/2)(wind4r)
wind4rrt = T([1,2,3])([3,5,0.5])(wind4rr)

contorno = COLOR(GREEN)(SKELETON(1)(STRUCT([x_lato,T([1])([4])(yt),yt,xc])))

contprod = STRUCT([(PROD)([contorno,Q(4)]),wind3rrt,wind3rrt2,wind4rrt])

VIEW(STRUCT([wind4rr]))