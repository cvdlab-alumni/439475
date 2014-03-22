from pyplasm import *
#struttura di base per le tre finestre presenti lateralmente

x_wi1 = QUOTE([1])
y_wi1 = QUOTE([2])

x_wi2 = QUOTE([1])
y_wi2 = QUOTE([1])

x_wi3 = QUOTE([1])
y_wi3 = QUOTE([1.5])

x_widav = QUOTE([3])
y_widav = QUOTE([2])


window1 = STRUCT([PROD([x_wi1,y_wi1])])

window2 = STRUCT([PROD([x_wi2,y_wi2])])

window3 = STRUCT([PROD([x_wi3,y_wi3])])

windowdav = STRUCT([PROD([x_widav,y_widav])])

#VIEW()

