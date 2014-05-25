def diagram2cell(diagram,master,cell):
    mat = diagram2cellMatrix(diagram)(master,cell)
    diagram =larApply(mat)(diagram)
    (V1,CV1),(V2,CV2) = master,diagram
    n1,n2 = len(V1), len(V2)
    
 
    V, CV1, CV2, n12 = vertexSieve(master,diagram)
    commonRange = range(n1-n12, n1)
    newRange = range(n1,n1-n12+n2)
