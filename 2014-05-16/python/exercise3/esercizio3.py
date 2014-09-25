def Numerali(diagAss):
	V,CV = diagAss
	hpc = SKEL_1(STRUCT(MKPOLS(diagAss)))
	hpc = cellNumerali (diagAss,hpc)(range(len(CV)),CYAN,2)
	return hpc

def Uniscili(master, diagAss, cell2Unisc):
	V, CV = master
	master = diagram2cell(diagAss,master,cell2Unisc)
	VIEW(Numerali(master))
	return master

def Uniscili_Numerali_Eliminali(master, diagAss, cell2Unisc, cells2Rimuovi):
	Numerali(master)
	V,CV = master
	if cell2Unisc in CV: 
		master = Uniscili(master, diagAss, cell2Unisc)
		for i in range(len(cells2Rimuovi)):
			cells2Rimuovi[i] = cells2Rimuovi[i]+1
	master = Rimuovi(master, cells2Rimuovi)
	return master

def Rimuovi(master, cells2Rimuovi):
	return master[0], [cell for k,cell in enumerate(master[1]) if not (k in cells2Rimuovi)]
