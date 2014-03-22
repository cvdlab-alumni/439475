from pyplasm import *

scalino = CUBOID([1,9,1])

sl1= T([1,3])([1,1])(scalino)
sl2= T([1,3])([2,2])(scalino)
sl3= T([1,3])([3,3])(scalino)
sl4= T([1,3])([4,4])(scalino)
sl5= T([1,3])([5,5])(scalino)
sl6= T([1,3])([6,6])(scalino)
sl7= T([1,3])([7,7])(scalino)
sl8= T([1,3])([8,8])(scalino)
sl9= T([1,3])([9,9])(scalino)
sl10= T([1,3])([10,5])(scalino)
sl11= T([1,3])([11,5.5])(scalino)
sl12= T([1,3])([12,6])(scalino)
sl13= T([1,3])([13,6.5])(scalino)
sl14= T([1,3])([14,7])(scalino)
sl15= T([1,3])([15,7.5])(scalino)
sl16= T([1,3])([16,8])(scalino)
sl17= T([1,3])([17,8.5])(scalino)
sl18= T([1,3])([18,9])(scalino)
sl19= T([1,3])([19,9.5])(scalino)
sl20= T([1,3])([20,10])(scalino)

scala = STRUCT([scalino,sl1,sl2,sl3,sl4,sl5,sl6,sl7,sl8,sl9])


VIEW(scala)
