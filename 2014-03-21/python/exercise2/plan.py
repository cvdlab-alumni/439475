from pyplasm import*
import alae
import alaelat
import atrium
import fauces
import hortus
import impluvium
import oecus_tricliniare
import tabernae
import tetto

hortus = hortus.contprod
oecus = oecus_tricliniare.contprod
ot = T([1,2])([7,4])(oecus) #traslazione di oecus nella posizione corretta
otr = R([1,3])(PI)(ot) #trasl piu rotaz
otrt = T([1,3])([12,4])(otr) #trasl-rotaz-trasl

alae = alae.contprod
alt = T([2])([6])(alae)
alaelat = alaelat.contprod

allat = T([2])([9])(alaelat)
allat1 = T([2])([3])(allat)
allatr = T([3])([4])(R([1,3])(PI)(allat))
allatrt = T([1])([12])(allatr)
allatrt1 = T([2])([3])(allatrt)

impluv = impluvium.contprod
impluvt = T([1,2])([4.5,9])(impluv)



tabernae = tabernae.contprod
tabt = T([1,2])([8,15])(tabernae)
tabtt = T([1])([-8])(tabt)
atrium = atrium.contprod
atrit = T([1,2])([3,12])(atrium)
fauces = fauces.contprod
fauct = T([1,2])([4,15])(fauces)

tet = tetto.d2
tett = T([1,2,3])([12,6,4])(tet)
tetquad = tetto.quad1
tettquadt = T([1,2,3])([10,13,4])(tetquad)

plan = SKELETON(1)(STRUCT([hortus,ot,otrt,alt,allat,allatrt,
	impluvt,allat1,allatrt1,tabt,tabtt,atrit,fauct,tett,tettquadt]))



VIEW(plan)
