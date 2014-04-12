from pyplasm import *

#9

x_lato = QUOTE([3]) #lato che combacera con con sette
y_lato = QUOTE([3])
y_latoc = QUOTE([0.5,-1.5,1])

x1 = INSR(PROD)([x_lato,Q(0.3),Q(4)])
y1 = INSR(PROD)([y_lato,Q(0.3),Q(4)])
y1c = INSR(PROD)([y_latoc,Q(0.3),Q(4)])

yt = R([1,2])(PI/2)(y1)
yt1 = R([1,2])(PI/2)(y1c)
xc = T([2])([3])(x1)

contprod = COLOR([1.39,1.21,0.94])(SKELETON(3)(STRUCT([x_lato,T([1])([3])(yt),T([1])([0.3])(yt1),xc])))



#VIEW(contprod)