from pyplasm import *
#6

x_lato = QUOTE([12.6])
x_latoc = QUOTE([5,-2,5])
y_lato = QUOTE([4])

x1 = INSR(PROD)([x_lato,Q(0.3),Q(4)])
y1 = INSR(PROD)([y_lato,Q(0.3),Q(4)])


yt = R([1,2])(PI/2)(y1)
xc = T([1,2])([-0.3,4])(x1)

contprod = COLOR([1.39,1.21,0.94])(SKELETON(3)(STRUCT([x_lato,T([1])([12.3])(yt),yt,xc])))

#VIEW(contprod)