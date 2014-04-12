from pyplasm import *

#1

x_lato = QUOTE([1,-2,1]) #lato che combacera con con sette
y_lato = QUOTE([5])

x1 = INSR(PROD)([x_lato,Q(0.3),Q(4)])
y1 = INSR(PROD)([y_lato,Q(0.3),Q(4)])

yt = R([1,2])(PI/2)(y1)
xc = T([2])([4.7])(x1)

contprod = COLOR([1.39,1.21,0.94])(SKELETON(3)(STRUCT([T([1])([3.999])(yt),T([1])([0.3])(yt),xc])))


#VIEW(STRUCT([contprod]))