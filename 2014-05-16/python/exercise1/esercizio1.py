""" progressive refinement of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
sys.path.insert(0, '/pyplasm/lar-cc/lib/py/') 
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *
from sysml import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([3,3,3])([[.4,9.2,.4],[.4,7.2,.4],[.3,2.7,0.3]])
V,CV = master
#hpc = SKEL_1(STRUCT(MKPOLS(master)))
#hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)

toRemove = [13,14]
master2 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master2)


toMerge = 13
assx_split = assemblyDiagramInit([9,1,1])([[3.75,0.25,0.75,.25,2,.25,0.75,0.25,1.75],[8],[3.3]])
x_splitted = diagram2cell(assx_split,master,toMerge)
#hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
#hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)


toMerge = 27
assx_split = assemblyDiagramInit([1,3,1])([[10],[3.35,.25,4],[3.3]])
x_splitted = diagram2cell(assx_split,x_splitted,toMerge)
#hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
#hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)

toRemove = [34,13,26,27,29,31,33]
V,CV = x_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master23)

toMerge = 28
assx_split = assemblyDiagramInit([1,5,1])([[10],[3.35,.25,2,.25,1.75],[3.3]])
x_splitted = diagram2cell(assx_split,x_splitted,toMerge)
#hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
#hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)

toRemove = [38,27,26,28,30,32,13,33]
V,CV = x_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master23)

toMerge = 29
assx_split = assemblyDiagramInit([1,5,1])([[10],[2.35,.25,3,0.25,1.75],[3.3]])
x_splitted = diagram2cell(assx_split,x_splitted,toMerge)
#hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
#hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)

toRemove = [38,27,26,28,31,32,13,37,29,36,41,42,43]
V,CV = x_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master23)

toMerge = 30
assx_split = assemblyDiagramInit([1,5,1])([[10],[2.5,0.25,2,.25,3],[3.3]])
x_splitted = diagram2cell(assx_split,x_splitted,toMerge)
#hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
#hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)


toRemove = [31,36,38,43,41,46,13,44]
V,CV = x_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#hpc = SKEL_1(STRUCT(MKPOLS(master23)))
#hpc = cellNumbering (master23,hpc)(range(len(master23[1])),CYAN,2)
#VIEW(hpc)

'''
toRemove = [26,27,28,13,29,30,31,36,38,41,42]
V,CV = x_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master23)))
hpc = cellNumbering (master23,hpc)(range(len(master23[1])),CYAN,2)
#VIEW(hpc)
'''

#Fine  lati verticali

#Inizio lati orizzontali
toMerge = 25
assy_split = assemblyDiagramInit([1,3,1])([[10],[3.35,.25,4],[3.3]])
y_splitted = diagram2cell(assy_split,master23,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,2)
#VIEW(hpc)

toMerge = 25
assy_split = assemblyDiagramInit([1,3,1])([[10],[3.35,.25,4],[3.3]])
y_splitted = diagram2cell(assy_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,2)
#VIEW(hpc)

toMerge = 25
assy_split = assemblyDiagramInit([1,3,1])([[10],[5.6,.25,1.75],[3.3]])
y_splitted = diagram2cell(assy_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,2)
#VIEW(hpc)


toMerge = 43
assy_split = assemblyDiagramInit([1,3,1])([[10],[2,.25,1.75],[3.3]])
y_splitted = diagram2cell(assy_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,2)
#VIEW(hpc)

toMerge = 25
assy_split = assemblyDiagramInit([1,5,1])([[10],[2.5,0.25,2,.25,3],[3.3]])
y_splitted = diagram2cell(assy_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)
####rimuovo il blocco in piu
toRemove = [51]
V,CV = y_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master23)))
hpc = cellNumbering (master23,hpc)(range(len(master23[1])),CYAN,1)


toMerge = 25
assy_split = assemblyDiagramInit([1,5,1])([[10],[2.5,0.25,2,.25,3],[3.3]])
y_splitted = diagram2cell(assy_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)

##fa riferimento al terzo segmento del ripostiglio
toMerge = 51
assy_split = assemblyDiagramInit([1,3,1])([[10],[.91,.25,1.89],[3.3]])
y_splitted = diagram2cell(assy_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)

'''
toMerge = 48
assy_split = assemblyDiagramInit([1,3,1])([[10],[1.5,.25,3.25],[3.3]])
y_splitted = diagram2cell(assy_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,2)
#VIEW(hpc)
'''

#Fine muri interni
toRemove = [36,38,46,44,39,41,43,58,56,49,47,51,53,55,50]
V,CV = y_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master23)))
hpc = cellNumbering (master23,hpc)(range(len(master23[1])),CYAN,1)


#VIEW(hpc)
#DRAW(master23)# sol strutt interna muri divisori

#lato x finestre davanti
toMerge = 10
assx_split = assemblyDiagramInit([7,1,1])([[2,2,1.25,1.5,1.25,1,1],[8],[3.3]])
x_splitted = diagram2cell(assx_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,1)
#VIEW(hpc)

#lato z finestre davanti

#finestrone 
toMerge = 59
assz_split = assemblyDiagramInit([1,1,3])([[10],[8],[1.3,1,1]])
z_splitted = diagram2cell(assz_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#finestrone raffinamento vetrate composto da pannelli di finestre da 0.41875
toMerge = 65
assxyz_split = assemblyDiagramInit([9,3,3])([[0.1,0.41875,0.05,0.41875,0.025,0.41875,0.05,0.41875,0.1],[0.1,0.2,0.1],[0.1,0.85,0.05]])
xyz_splitted = diagram2cell(assxyz_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xyz_splitted)))
hpc = cellNumbering (xyz_splitted,hpc)(range(len(xyz_splitted[1])),CYAN,0.3)
#VIEW(hpc)

#ingresso
toMerge = 60
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2.3,1]])
z_splitted = diagram2cell(assz_split,xyz_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#porta d'ingresso sezionata a dovere
toMerge = 146
assxyzp_split = assemblyDiagramInit([3,3,5])([[0.25,1,0.25],[0.1,0.2,0.1],[0.3,0.7,0.1,1,0.2]])
xyzp_splitted = diagram2cell(assxyzp_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xyzp_splitted)))
hpc = cellNumbering (xyzp_splitted,hpc)(range(len(xyzp_splitted[1])),CYAN,1)
#VIEW(hpc)

#finestra a destra davanti
toMerge = 61
assz_split = assemblyDiagramInit([1,1,3])([[10],[8],[1,1,1.3]])
z_splitted = diagram2cell(assz_split,xyzp_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)


#finestra a destra davanti raffinamenti 
toMerge = 192
assxyzf_split = assemblyDiagramInit([3,3,3])([[0.1,0.8,0.1],[0.1,0.2,0.1],[0.1,0.8,0.1]])
xyzf_splitted = diagram2cell(assxyzf_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xyzf_splitted)))
hpc = cellNumbering (xyzf_splitted,hpc)(range(len(xyzf_splitted[1])),CYAN,0.3)
#VIEW(hpc)


#lato y finestre laterali

toMerge = 4
assy_split = assemblyDiagramInit([1,5,1])([[10],[2,1,3,1,1],[3.3]])
y_splitted = diagram2cell(assy_split,xyzf_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)

# prima finestra laterale andando in senso orario
toMerge = 220
assz_split = assemblyDiagramInit([1,1,3])([[10],[8],[1,1,1.3]])
z_splitted = diagram2cell(assz_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#prima finestra laterale andando in senso orario raffinamenti 
toMerge = 224
assxyzf_split = assemblyDiagramInit([3,3,3])([[0.1,0.2,0.1],[.1,.8,.1],[0.1,0.8,0.1]])
xyzf_splitted = diagram2cell(assxyzf_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xyzf_splitted)))
hpc = cellNumbering (xyzf_splitted,hpc)(range(len(xyzf_splitted[1])),CYAN,0.3)
#VIEW(hpc)



# seconda finestra laterale andando in senso orario
toMerge = 221
assz_split = assemblyDiagramInit([1,1,3])([[10],[8],[1,1.6,.7]])
z_splitted = diagram2cell(assz_split,xyzf_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)


# seconda finestra laterale andando in senso orario raffinamento
toMerge = 252
assz_split = assemblyDiagramInit([3,5,3])([[.1,.2,.1],[.1,.375,.05,.375,.1],[.1,1.4,.1]])
z_splitted = diagram2cell(assz_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

# finestra 2laterale andando in senso orario
toMerge = 18
assy_split = assemblyDiagramInit([1,3,1])([[10],[6,1,1],[3.3]])
y_splitted = diagram2cell(assy_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)


toMerge = 298
assz_split = assemblyDiagramInit([1,1,3])([[10],[8],[1,1.6,.7]])
z_splitted = diagram2cell(assz_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

# finestra 2laterale andando in senso orario raffinamento
toMerge = 300
assz_split = assemblyDiagramInit([3,5,3])([[.1,.2,.1],[.1,.375,.05,.375,.1],[.1,1.4,.1]])
z_splitted = diagram2cell(assz_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#porte interne
#prima porta a sinistra
toMerge = 24
assy_split = assemblyDiagramInit([1,3,1])([[10],[2,1.5,5],[3.3]])
y_splitted = diagram2cell(assy_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 346
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#prima porta a sinistra raffinamenti

toMerge = 347
assxyzp_split = assemblyDiagramInit([3,3,5])([[0.1,0.2,0.1],[0.25,1,0.25],[0.3,0.5,0.1,.9,0.2]])
xyzp_splitted = diagram2cell(assxyzp_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xyzp_splitted)))
hpc = cellNumbering (xyzp_splitted,hpc)(range(len(xyzp_splitted[1])),CYAN,1)
#VIEW(hpc)



#seconda porta a sinistra
toMerge = 23
assy_split = assemblyDiagramInit([1,3,1])([[10],[1,1.5,5.5],[3.3]])
y_splitted = diagram2cell(assy_split,xyzp_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 393
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#seconda porta a sinistra raffinamenti
toMerge = 394
assxyzp_split = assemblyDiagramInit([3,3,5])([[0.1,0.2,0.1],[0.25,1,0.25],[0.3,0.5,0.1,.9,0.2]])
xyzp_splitted = diagram2cell(assxyzp_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xyzp_splitted)))
hpc = cellNumbering (xyzp_splitted,hpc)(range(len(xyzp_splitted[1])),CYAN,1)
#VIEW(hpc)


# porta ripostiglio
toMerge = 37
assx_split = assemblyDiagramInit([3,1,1])([[1,1.5,1.5],[8],[3.3]])
x_splitted = diagram2cell(assx_split,xyzp_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 440
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

# porta ripostiglio raffinamenti
toMerge = 441
assxyzp_split = assemblyDiagramInit([3,3,5])([[0.25,1,0.25],[0.1,0.2,0.1],[0.3,0.5,0.1,.9,0.2]])
xyzp_splitted = diagram2cell(assxyzp_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xyzp_splitted)))
hpc = cellNumbering (xyzp_splitted,hpc)(range(len(xyzp_splitted[1])),CYAN,1)
#VIEW(hpc)


# porta cameretta
toMerge = 46
assx_split = assemblyDiagramInit([3,1,1])([[1,1.5,.5],[8],[3.3]])
x_splitted = diagram2cell(assx_split,xyzp_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 487
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

# porta cameretta raffinata
toMerge = 488
assxyzp_split = assemblyDiagramInit([3,3,5])([[0.25,1,0.25],[0.1,0.2,0.1],[0.3,0.5,0.1,.9,0.2]])
xyzp_splitted = diagram2cell(assxyzp_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xyzp_splitted)))
hpc = cellNumbering (xyzp_splitted,hpc)(range(len(xyzp_splitted[1])),CYAN,1)
#VIEW(hpc)


# porta bagno
toMerge = 47
assx_split = assemblyDiagramInit([3,1,1])([[1,1.5,.5],[8],[3.3]])
x_splitted = diagram2cell(assx_split,xyzp_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 534
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)


# porta bagno raffinata
toMerge = 535
assxyzp_split = assemblyDiagramInit([3,3,5])([[0.25,1,0.25],[0.1,0.2,0.1],[0.3,0.5,0.1,.9,0.2]])
xyzp_splitted = diagram2cell(assxyzp_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xyzp_splitted)))
hpc = cellNumbering (xyzp_splitted,hpc)(range(len(xyzp_splitted[1])),CYAN,.45)
#VIEW(hpc)


toRemovePortaEntrata = [154,164,139,149,169,179,170,180,155,165,140,150,171,181,156,166,141,151,172,182,173,183,157,167,142,152,158,168,143,153]
toRemoveFinGranFront = [129,135,120,126,117,111,102,108,93,99,84,90,75,81,66,72,57,63,58,64,67,73,76,82,85,91,100,94,109,103,118,112,127,121,136,130,131,137,122,128,113,119,104,110,95,101,86,92,77,83,68,74,59,65]
toRemoveFinestraPicFront = [204,210,195,201,186,192,205,211,196,202,187,193,188,194,197,203,206,212,206]

toM0 = [227, 228, 229, 230, 231, 232, 233, 234, 235] #celle da tenere
toRemoveFinestraPicLat = [218, 219, 220, 221, 222, 223, 224, 225, 226, 236, 237, 238, 239, 240, 241, 242, 243, 244]


toM1 = [262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276]
toRemoveFinestraGrandLat = [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291]

toM2 = [359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373]
toRemoveEntrSin = [344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388]

toM3 = [407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421]
toRemoveEntrCuc = [392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436]

toM4 = [445, 446, 447, 448, 449, 460, 461, 462, 463, 464, 475, 476, 477, 478, 479]
toRemoveEntrRip = [440, 441, 442, 443, 444, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 480, 481, 482, 483, 484]

toM5 = [311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325]
toRemoveFinestraGrandLat2 = [296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340]

toM6 = [493, 494, 495, 496, 497, 508, 509, 510, 511, 512, 523, 524, 525, 526, 527]
toRemovePortaCameretta = [488, 489, 490, 491, 492, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 528, 529, 530, 531, 532]

toM7 = [541, 542, 543, 544, 545, 556, 557, 558, 559, 560, 571, 572, 573, 574, 575]
toRemovePortaBagno = [536, 537, 538, 539, 540, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 576, 577, 578, 579, 580]

toRemoveUltimi = [36,33,31,37,43,44,48,50,41,45,46,47,40,34,38]
toRemove = toRemovePortaEntrata + toRemoveFinGranFront + toRemoveFinestraPicFront + toRemoveFinestraPicLat + toRemoveFinestraGrandLat + toRemoveEntrSin + toRemoveEntrCuc + toRemoveEntrRip + toRemoveFinestraGrandLat2 + toRemovePortaCameretta + toRemovePortaBagno + toRemoveUltimi

V,CV = xyzp_splitted
masterFinale = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
modFin = STRUCT(MKPOLS(masterFinale)) #passo dal dominio lar al dominio pypl

hpc = SKEL_1(STRUCT(MKPOLS(masterFinale)))
hpc = cellNumbering (masterFinale,hpc)(range(len(masterFinale[1])),CYAN,.45)
VIEW(hpc)


#DRAW(masterFinale)

appart_solido = MKPOLS(masterFinale)

window_glasses = [46,52,58,64,91,135,141,105,122,116]
for i in window_glasses:
	appart_solido[i] = MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 1,1,1,0.1, 100])(appart_solido[i]) 

colore_bottomPorte = [76,78,155,157,173,175,191,193,209,211,227,229]
for i in colore_bottomPorte:
	appart_solido[i] = COLOR([0.6,0.4,0])(appart_solido[i])

colore_bordoPorte=[74,79,84,83,82,80,81,75,70,71,72,77,73,163,158,153,162,161,160,159,154,149,150,151,156,152,177,178,179,180,181,176,171,170,169,168,167,172,174,195,196,197,198,199,194,189,188,187,186,185,190,192,231,232,233,234,235,230,225,224,223,222,221,226,228,203,204,205,206,207,212,217,216,215,214,213,208,210]
for i in colore_bordoPorte:
	appart_solido[i] = COLOR([0.5,0.26,0])(appart_solido[i])

colore_bordoFinestre=[66,67,68,65,62,59,56,53,50,47,44,43,48,42,45,48,49,51,54,57,60,63,61,55,49,87,88,89,92,95,94,93,90,101,102,103,105,106,109,108,107,104,112,113,114,117,120,123,126,125,124,121,118,115,119,131,132,133,136,139,142,145,144,143,140,138,134,137]
for i in colore_bordoFinestre:
	appart_solido[i] = COLOR([0.5,0.26,0])(appart_solido[i])

muri_esterni = [36,82,8,85,86,40,128,129,6,37,41,69,38,39,15,127,17,130,20,19,12,11,14,5,98,110,111,97,3,100,99,96,1,0]	
for i in muri_esterni:
	appart_solido[i] = COLOR([8,0.64,0])(appart_solido[i])


VIEW(STRUCT(appart_solido))

# per traslare larApply(t(1,2))(oggettoda traslare)
# per routare larApply(r(0.,PI,0.))(oggetto da traslare)
# modelVetro = MATERIAL(glass)(modelVetro) creare effetto vetro


