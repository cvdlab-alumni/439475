from pyplasm import *
#struttura di base per le tre finestre presenti lateralmente

x_wi1 = QUOTE([1])
y_wi1 = QUOTE([2])
x1 = INSR(PROD)([x_wi1,Q(1),Q(.9)])

x_wi2 = QUOTE([1])
y_wi2 = QUOTE([1])
x2 = INSR(PROD)([x_wi2,Q(1),Q(.9)])

x_wi3 = QUOTE([1])
y_wi3 = QUOTE([1.5])
x3 = INSR(PROD)([x_wi3,Q(1.5),Q(.9)])


x_widav = QUOTE([3])
y_widav = QUOTE([2])
x4 = INSR(PROD)([x_widav,Q(2),Q(.9)])



window1 = STRUCT([x1])

window2 = STRUCT([x2])

window3 = STRUCT([x3])

windowdav = STRUCT([x4])

#VIEW(STRUCT([x3]))

