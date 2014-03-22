from pyplasm import*
import alae
import alaelat
import atrium
import fauces
import hortus
import impluvium
import oecus_tricliniare
import tabernae

hortus = hortus.contorno
oecus = oecus_tricliniare.contorno
ot = T([1,2])([7,4])(oecus) #traslazione di oecus nella posizione corretta
otr = R([1,3])(PI)(ot) #trasl piu rotaz
otrt = T([1])([12])(otr) #trasl-rotaz-trasl
alae = alae.contorno
alt = T([2])([6])(alae)
alaelat = alaelat.contorno
allat = T([2])([9])(alaelat)
allatr = R([1,3])(PI)(allat)
allatrt = T([1])([12])(allatr)
impluv = impluvium.contorno
impluvt = T([1,2])([5,9])(impluv)
allat1 = T([2])([3])(allat)
allatrt1 = T([2])([3])(allatrt)
tabernae = tabernae.contorno
tabt = T([1,2])([8,15])(tabernae)
tabtt = T([1])([-8])(tabt)
atrium = atrium.contorno
atrit = T([1,2])([3,12])(atrium)
fauces = fauces.contorno
fauct = T([1,2])([4,15])(fauces)


plan = STRUCT([hortus,ot,otrt,alt,allat,allatrt,impluvt,allat1,allatrt1,tabt,tabtt,atrit,fauct])



#VIEW(plan)
