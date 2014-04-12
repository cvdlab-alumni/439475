from pyplasm import*
import sys
sys.path.insert(0, '/pyplasm/lar-cc/lib/py/') 
from simplexn import *
from larcc import *
from lar2psm import *
from largrid import *
from scipy import *
from morph import *
from mapper import *
from boolean1 import *
import plan

pl = plan.plan

prato = T([1])([-50])(COLOR([0,0.3,0])(CUBOID([150,80])))
casat = T([1,2])([19,15])(plan.domus)

strada = T([1,2])([-50,60])(COLOR([1.,1.,0.9])(CUBOID([150,8])))
striscelat = T([1,2])([-50,60.25])(COLOR(BLACK)(CUBOID([150,.25])))
striscelat2 = T([1,2])([-50,67.50])(COLOR(BLACK)(CUBOID([150,.25])))
striscecentro = T([1,2])([-50,63.75])(COLOR(BLACK)(CUBOID([150,.25])))
striscecentro2 = T([1,2])([-50,64.25])(COLOR(BLACK)(CUBOID([150,.25])))

###########################LAMPIONE#############################
def F_dischetto(raggio,lati,rad):
 def f(p):
  u,v = p
  return [v*raggio*COS(u),v*raggio*SIN(u)]
 return MAP(f)(PROD([INTERVALS(rad*PI)(lati), INTERVALS(1)(1)]))

def F_colonnina(raggio,lati,altezza):
 a = F_dischetto(raggio,lati,2)
 b = T(3)(altezza)(a)
 return JOIN([a,b])

palo = COLOR([.2,.2,.2])(F_colonnina(0.2,20,5))
plafoniera = JOIN ([STRUCT(MKPOLS(([[-.4,-.4,.8],[-.4,.4,.8],[.4,-.4,.8],[.4,.4,.8]],[[0,1,2,3]]))) , F_dischetto(.2,12,2)])
plafoniera = COLOR(YELLOW)(T(3)(5)(plafoniera))
coperchio = JOIN ([STRUCT(MKPOLS(([[-.4,-.4,.8],[-.4,.4,.8],[.4,-.4,.8],[.4,.4,.8]],[[0,1,2,3]]))) , MK([0,0,1.1])])
coperchio = COLOR([.2,.2,.2])(T(3)(5)(coperchio))
lampione = STRUCT([palo,plafoniera,coperchio])

lampionetrasl = T([1,2])([-50,60.25])(lampione)
lampionetras2 = T([1,2])([-30,60.25])(lampione)
lampionetrasl3 = T([1,2])([-10,60.25])(lampione)
lampionetrasl4 = T([1,2])([10,60.25])(lampione)
lampionetrasl5 = T([1,2])([30,60.25])(lampione)
lampionetrasl6 = T([1,2])([50,60.25])(lampione)
lampionetrasl7 = T([1,2])([70,60.25])(lampione)
lampionetrasl8 = T([1,2])([90,60.25])(lampione)

lampionidex = STRUCT([lampionetrasl,
	lampionetras2,lampionetrasl3,lampionetrasl4,lampionetrasl5,lampionetrasl6,
	lampionetrasl7,lampionetrasl8])
lampionisin = T([2])([8])(lampionidex)

#####################FINELAMPIONE######################

#####################CASEVICINE########################
pratovicini = COLOR([0,0.3,0])(CUBOID([50,50]))

casav1 = CUBOID([15,12,4])
verts1 = [[0,0,0],[12,0,0],[6,4,2],[6,11,2],[0,15,0],[12,15,0]]
cells1 = [[1,2,3,4,5,6]]
pols = None
tettov1 = MKPOL([verts1, cells1, pols])
tettov1r= R([1,2])(PI/2)(tettov1)
tettov1t = COLOR([0.5,0.35,0])(T([1,3])([15,4])(tettov1r))
casav1coplet = STRUCT([casav1,tettov1t])
casav1coplettr = T([1,2])([25,10])(casav1coplet)



casav2 = CUBOID([10,10,4])
verts2 = [[0,0,0],[10,0,0],[5,5,2],[0,10,0],[10,10,0]]
cells2 = [[1,2,3,4,5]]
pols = None
tettov2 = MKPOL([verts2, cells2, pols])
tettov2r= R([1,2])(PI/2)(tettov2)
tettov2t = COLOR([0.8,0.35,0])(T([1,3])([10,4])(tettov2r))
casav2coplet = STRUCT([casav2,tettov2t])
casav2coplettr = T([1,2])([5,10])(casav2coplet)


casav3 = CUBOID([10,18,4])
verts3 = [[0,0,0],[0,10,0],[18,10,0],[18,0,0],[5,5,2],[13,5,2]]
cells3 = [[1,2,3,4,5,6]]
pols = None
tettov3 = MKPOL([verts3, cells3, pols])
tettov3r= R([1,2])(PI/2)(tettov3)
tettov3t = COLOR([0.8,0.65,0])(T([1,3])([10,4])(tettov3r))
casav3coplet = STRUCT([casav3,tettov3t])
casav3coplettr = T([1,2])([10,25])(casav3coplet)

casevicinato = STRUCT([casav2coplettr,casav1coplettr,casav3coplettr,pratovicini])
casevicinatotraslest = T([1])([50])(casevicinato)
casevicinatotraslest1 = R([1,2])(PI)(T([1,2])([50,-50])(casevicinatotraslest))
casevicinatotraslest1t = T([1])([100])(casevicinatotraslest1)

######################FORESTA##########################
foglia = CUBOID([.8,1.4,0.3]) 
foglie = STRUCT( NN(10)([foglia, T(3)(0.3), R([1,2])(PI/14), S([1,2])([0.9,0.9])]) ) 
foglie = STRUCT( CAT(N(15)([foglia, T(3)(0.3), R([1,2])(PI/14), S([1,2])([0.9,0.9])])) )
foglier = R([1,2])(PI)(foglie)
foglier1 = R([1,2])(PI/2)(foglie)
foglier2 = R([1,2])(-PI/2)(foglie)

foglia1 = CUBOID([.8,1.4,0.3]) 
foglie1 = STRUCT( NN(10)([foglia, T(3)(0.3), R([1,2])(-PI/14), S([1,2])([0.9,0.9])]) ) 
foglie1 = STRUCT( CAT(N(15)([foglia, T(3)(0.3), R([1,2])(-PI/14), S([1,2])([0.9,0.9])])) )
foglier1 = R([1,2])(-PI)(foglie1)
foglier11 = R([1,2])(-PI/2)(foglie1)
foglier21 = R([1,2])(PI/2)(foglie1)

tronco = COLOR([0.5,0.25,0])(CYLINDER([0.4,3.2])(18))
totfoglie = COLOR(GREEN)(T([3])([3.2])(STRUCT([foglie,foglier,foglier1,foglier2,foglie1,
	foglier1,foglier11,foglier21])))
albero = STRUCT([tronco,totfoglie])
bosco = STRUCT(NN(17)([tronco, totfoglie, T([2])([3])]))
boscodietro = STRUCT(NN(4)([tronco, totfoglie, T([2])([3])]))
boscorep2 = STRUCT(NN(4)([boscodietro, totfoglie, T([1])([4])]))
boscodiet = STRUCT([boscodietro, boscorep2])
boscodietras = T([1,2])([19.5,0.5])(boscodiet)

boscorep1 = STRUCT(NN(4)([bosco, totfoglie, T([1])([4])]))
boscodex = STRUCT([bosco, boscorep1])
boscosinix = T([1])([37.5])(boscodex)
######################FINEFORESTA##########################

#VIEW(STRUCT([boscodex,boscosinix,boscodietras,prato, 
	#casat,casevicinatotraslest,casevicinatotraslest1t,strada,
	#striscelat,striscelat2,striscecentro, striscecentro2,lampionidex,lampionisin,lampionidex]))

VIEW(STRUCT([pl]))

