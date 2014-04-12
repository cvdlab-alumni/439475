from pyplasm import*
import alae
import alaelat
import fauces
import hortus
import impluvium
import oecus_tricliniare
import tabernae
import tetto

hortus = hortus.contprod
hortust = T([1,2])([12,4])(R([1,2])(PI)(hortus))
oecus = oecus_tricliniare.contprod
ot = T([1,2])([7.3,4])(oecus) #traslazione di oecus nella posizione corretta
otr = R([1,3])(PI)(ot) #trasl piu rotaz
otrt = T([1,3])([12,4])(otr) #trasl-rotaz-trasl

alae = alae.contprod
alt = T([1,2])([0,6])(alae)
alaelat = alaelat.contprod

allat = T([2])([9])(alaelat)
allat1 = T([1,2,3])([2.7,0,4])(R([1,3])(PI)(allat))
allat2 = T([1,2,3])([2.7,3,4])(R([1,3])(PI)(allat))
allatr = T([1])([-2.7])(R([1,3])(2*PI)(allat))
allatrt = T([1])([12])(allatr)
allatrt1 = T([2])([3])(allatrt)


impluv = impluvium.contprod
impluvt = T([1,2])([4.5,9])(impluv)

scalino = CUBOID([4,0.8,0.4])
scalinot = T([1,2])([4,20])(scalino)
pavimento =  CUBOID([12,20])

tabernae = tabernae.contprod
tabt = T([1,2])([8,15])(tabernae)
tabtt = T([1])([-8])(tabt)


tet = tetto.d2
tetface = tetto.d2face
tetlatsin = tetto.d2latsin
tetlatdex = tetto.d2latdex

tett = T([1,2,3])([12,7,4])(tet)
tettface = T([1,2,3])([10,13,4])(tetface)
tettlatsin = T([1,2,3])([2,7,4])(tetlatsin)
tettlatdex = T([1,2,3])([10,7,4])(tetlatdex)

tetquad = tetto.quad2diff
tettquadt = T([1,2,3])([10,13,4])(tetquad)
tettocompleto = STRUCT([tett,tettface,tettlatsin,
	tettquadt,tettlatdex])

domus =  COLOR([1.39,1.21,0.94])(STRUCT([hortust,ot,otrt,alt,allatrt,allat2,
	impluvt,allat1,allatrt1,tabt,tabtt,scalinot,pavimento,
	tettocompleto]))

plan = COLOR([1.39,1.21,0.94])(domus)



#VIEW(domus)

