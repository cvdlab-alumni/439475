from pyplasm import *
#4

x_lato = QUOTE([3.5])
y_lato = QUOTE([3.3])

x1 = INSR(PROD)([x_lato,Q(0.3),Q(.1)])
y1 = INSR(PROD)([y_lato,Q(0.3),Q(.1)])

yt = R([1,2])(PI/2)(y1)
xc = T([2])([3])(x1)

pavimento = CUBOID([3.3,3.3,0.1])

contprod = COLOR(BLUE)(SKELETON(3)(STRUCT([x1,T([1])([3.5])(yt),yt,xc,pavimento])))



#VIEW(contprod)