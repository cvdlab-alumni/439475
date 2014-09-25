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
 
from esercizio1 import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])
modelloFinale = STRUCT(appart_solido)
modelloFinaleT = T([1,2])([-10,5])(modelloFinale)
modelloFinaleR = R([1,2])(-PI/2)(modelloFinale)
modelloFinaleRR = R([1,2])(-PI/2)(modelloFinaleR)


############ANDRONE PIANI INTERMEDI######################
androne = assemblyDiagramInit([3,3,3])([[.4,4.2,.4],[.4,9.2,.4],[.3,2.7,0.3]])
V,CV = androne
hpc = SKEL_1(STRUCT(MKPOLS(androne)))
hpc = cellNumbering (androne,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)

toMerge = 10
assx_split = assemblyDiagramInit([3,1,1])([[1.5,2,1.5],[8],[3.3]])
x_splitted = diagram2cell(assx_split,androne,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)

toMerge = 27
assz_split = assemblyDiagramInit([1,1,3])([[5],[10],[1,1.5,0.8]])
z_splitted = diagram2cell(assz_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 15
assx_split = assemblyDiagramInit([3,1,1])([[1.5,2,1.5],[10],[3.3]])
x_splitted = diagram2cell(assx_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(x_splitted)))
hpc = cellNumbering (x_splitted,hpc)(range(len(x_splitted[1])),CYAN,2)
#VIEW(hpc)


toMerge = 31
assz_split = assemblyDiagramInit([1,1,3])([[5],[10],[1,1.5,0.8]])
z_splitted = diagram2cell(assz_split,x_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(z_splitted)))
hpc = cellNumbering (z_splitted,hpc)(range(len(z_splitted[1])),CYAN,1)
#VIEW(hpc)

toMerge = 11
assxy_split = assemblyDiagramInit([3,4,1])([[1.1,2,1.1],[4.6,1.3,2,1.3],[3.3]])
xy_splitted = diagram2cell(assxy_split,z_splitted,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(xy_splitted)))
hpc = cellNumbering (xy_splitted,hpc)(range(len(xy_splitted[1])),CYAN,1)
#VIEW(hpc)

toRemove = [12,11,40,32,27,4,19]
V,CV = xy_splitted
andron = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(andron)
andronFinPianiIntermedi = STRUCT(MKPOLS(andron))
andronFinPianiIntermediR = R([1,2])(PI/2)(andronFinPianiIntermedi)
####################FINE ANDRONE PIANI INTERMEDI ###################


#Funzione che disegna una scala
def stairs(x_step,z_step,l_stairs,h_stairs):
	nstep = h_stairs/z_step
	y_step = l_stairs/nstep
	step = CUBOID([x_step,y_step,z_step])
	steps = STRUCT(NN(nstep)([step,T([2,3])([y_step,z_step])]))

	points = [ [0,y_step,0],[x_step,y_step,0],[x_step,l_stairs,h_stairs-z_step],[0,l_stairs,h_stairs-z_step],[0,y_step,0], \
	 			[0,y_step,z_step],[x_step,y_step,z_step],[x_step,l_stairs-y_step,h_stairs-z_step],[0,l_stairs-y_step,h_stairs-z_step] ]
	bottom = MKPOL([points, [[1,2,3,4,5,6,7,8,9]], None])
	return STRUCT([steps,bottom])

scala = stairs(2,0.33,4,3.3)
scalaRT =R([1,2])(PI/2)(scala)
scalaT = T([1,2,3])([-4.7,1.5,-2.97])(scalaRT)
scalaT2 = T([1,2,3])([-4.7,1.5,-2.97])(scalaRT)


scalAndr = STRUCT([andronFinPianiIntermediR,scalaT])
scalAndr2 = STRUCT([andronFinPianiIntermediR,scalaT2])

#VIEW(scalAndr)


scalAndrPos = R([1,2])(PI)(scalAndr)
scalAndrPos2 = R([1,2])(2*PI)(scalAndr2)#scale piu androne sfalsate 2 re ruotate



scalAndrPosT = T([1,2,3])([-10,5,3.3])(scalAndrPos)
scalAndrPosT2 = T([3])([3.3])(scalAndrPos2)


#VIEW(STRUCT([andronFinPianiIntermediR,scalaT]))

modelLat = STRUCT([modelloFinaleRR,modelloFinaleT])
modelLatT = T([3])([3.3])(modelLat)

piani2intem = STRUCT([modelLatT,scalAndrPosT])

piani2intem2 = STRUCT([modelLatT,scalAndrPosT2])
piani2terra = STRUCT([modelLat,andronFinPianiIntermediR])


#VIEW(piani2terra)

#print(UKPOL(piani2terra))
#modello = V,CV
#DRAW(modello)

model2PlanReply = STRUCT(NN(5)([ piani2intem, T([3])(6.6) ]))

#VIEW(model2PlanReply)
model2PlanRR2 =  STRUCT([T([3])([3.3])(piani2intem2),T([3])([9.9])(piani2intem2),T([3])([16.5])(piani2intem2),T([3])([23.1])(piani2intem2),T([3])([29.7])(piani2intem2)])
condominio = STRUCT([model2PlanRR2,model2PlanReply,piani2terra])
condominioT = T([1,2])([20,20])(condominio)
assetCondomini = STRUCT(NN(4)([ condominioT, R([1,2])(PI/2) ]))
assetCondominiT = T([1,2])([40,40])(assetCondomini)
assetCondomini2 = STRUCT(NN(4)([ assetCondominiT, R([1,2])(PI/2) ]))
assetCondominiT2 = T([1,2])([60,60])(assetCondomini2)
assetCondomini22 = STRUCT(NN(4)([ assetCondominiT2, R([1,2])(PI/2) ]))

VIEW(STRUCT([condominio]))


VIEW(STRUCT([assetCondomini22]))

