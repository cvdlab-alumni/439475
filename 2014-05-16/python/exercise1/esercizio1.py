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
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)

toRemove = [13,14]
master2 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master2)


toMerge = 13
assx_split = assemblyDiagramInit([9,1,1])([[3.75,0.25,0.75,.25,2,.25,0.75,0.25,1.75],[8],[3.3]])
x_splitted = diagram2cell(assx_split,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)


toMerge = 27
assx_split = assemblyDiagramInit([1,3,1])([[10],[3.35,.25,4],[3.3]])
x_splitted = diagram2cell(assx_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)

toRemove = [34,13,26,27,29,31,33]
V,CV = x_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master23)

toMerge = 28
assx_split = assemblyDiagramInit([1,5,1])([[10],[3.35,.25,2,.25,1.75],[3.3]])
x_splitted = diagram2cell(assx_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)

toRemove = [38,27,26,28,30,32,13,33]
V,CV = x_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master23)

toMerge = 29
assx_split = assemblyDiagramInit([1,5,1])([[10],[2.35,.25,3,0.25,1.75],[3.3]])
x_splitted = diagram2cell(assx_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)

toRemove = [38,27,26,28,31,32,13,37,29,36,41,42,43]
V,CV = x_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master23)

toMerge = 30
assx_split = assemblyDiagramInit([1,5,1])([[10],[2.5,0.25,2,.25,3],[3.3]])
x_splitted = diagram2cell(assx_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)


toRemove = [31,36,38,43,41,46,13,44]
V,CV = x_splitted
master23 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master23)))
hpc = cellNumbering (master23,hpc)(range(len(master23[1])),CYAN,2)
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

#ingresso
toMerge = 60
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2.3,1]])
z_splitted = diagram2cell(assz_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#finestra a sinistra davanti
toMerge = 61
assz_split = assemblyDiagramInit([1,1,3])([[10],[8],[1,1,1.3]])
z_splitted = diagram2cell(assz_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#lato y finestre laterali

toMerge = 4
assy_split = assemblyDiagramInit([1,5,1])([[10],[2,1,3,1,1],[3.3]])
y_splitted = diagram2cell(assy_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)

# prima finestra laterale andando in senso orario
toMerge = 70
assz_split = assemblyDiagramInit([1,1,3])([[10],[8],[1,1,1.3]])
z_splitted = diagram2cell(assz_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

# seconda finestra laterale andando in senso orario
toMerge = 71
assz_split = assemblyDiagramInit([1,1,3])([[10],[8],[1,1.6,.7]])
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


toMerge = 78
assz_split = assemblyDiagramInit([1,1,3])([[10],[8],[1,1.6,.7]])
z_splitted = diagram2cell(assz_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#porte interne
#prima porta a sinistra
toMerge = 24
assy_split = assemblyDiagramInit([1,3,1])([[10],[1,1,6],[3.3]])
y_splitted = diagram2cell(assy_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 82
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

#seconda porta a sinistra
toMerge = 23
assy_split = assemblyDiagramInit([1,3,1])([[10],[1.5,1,5.5],[3.3]])
y_splitted = diagram2cell(assy_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(y_splitted)))
hpc = cellNumbering (y_splitted,hpc)(range(len(y_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 85
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,y_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

# porta ripostiglio
toMerge = 37
assx_split = assemblyDiagramInit([3,1,1])([[4,2,4],[8],[3.3]])
x_splitted = diagram2cell(assx_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 88
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

# porta cameretta
toMerge = 46
assx_split = assemblyDiagramInit([3,1,1])([[5,2,3],[8],[3.3]])
x_splitted = diagram2cell(assx_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 91
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)


# porta bagno
toMerge = 47
assx_split = assemblyDiagramInit([3,1,1])([[5,2,3],[8],[3.3]])
x_splitted = diagram2cell(assx_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 94
assz_split = assemblyDiagramInit([1,1,2])([[10],[8],[2,1.3]])
z_splitted = diagram2cell(assz_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

toRemove = [31,33,67,70,56,58,61,36,87,83,44,43,41,45,91,95,40,37,50,47,48,75,34,38,46,79]
V,CV = z_splitted
masterFinale = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
modFin = STRUCT(MKPOLS(masterFinale)) #passo dal dominio lar al dominio pypl
#DRAW(masterFinale)



