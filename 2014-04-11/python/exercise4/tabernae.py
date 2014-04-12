from pyplasm import *
import window
#2



x_lato = QUOTE([4])
y_lato = QUOTE([5])

x1 = INSR(PROD)([x_lato,Q(0.3),Q(4)])
y1 = INSR(PROD)([y_lato,Q(0.3),Q(4)])

yt = R([1,2])(PI/2)(y1)
xc = T([2])([4.7])(x1)

wind3 = window.window3 #contorno finestra
wind3r = R([2,3])(PI/2)(wind3)
wind3rr = R([1,2])(PI/2)(wind3r)
wind3rrt = T([1,2,3])([4,1,1.5])(wind3rr)
wind3rrt2 = T([1,2,3])([-0.3,1,1.5])(wind3rr)

wind4 = window.windowdav #contorno finestra
wind4r = R([2,3])(PI/2)(wind4)
wind4rr = R([1,3])(PI/2)(wind4r)
wind4rrt = T([1,2,3])([3,5.,0.5])(wind4rr)

latytras = T([1])([4.3])(yt)

contprod = COLOR([1.39,1.21,0.94])(SKELETON(3)(STRUCT([x1,DIFF([latytras,wind3rrt]),
	DIFF([yt,wind3rrt2]),DIFF([xc,wind4rrt])])))

#VIEW(STRUCT([contprod]))

