function createMesh(geom) {

    geom.applyMatrix(new THREE.Matrix4().makeTranslation(-20, 0, 0));

    // assign two materials
    var meshMaterial = new THREE.MeshNormalMaterial({transparent: true, opacity: 0.7});

    //  meshMaterial.side = THREE.DoubleSide;
    var wireFrameMat = new THREE.MeshBasicMaterial();
    wireFrameMat.wireframe = true;

    // create a multimaterial
    var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

    return mesh;
}

function createMesh(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile)
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;
    mat.side = THREE.DoubleSide;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}

function createMeshB(geom, imageFile, bump) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile)
    geom.computeVertexNormals();
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;
    mat.side=THREE.DoubleSide;

    if (bump) {
      var bump = THREE.ImageUtils.loadTexture("assets/textures/" + bump)
      mat.bumpMap = bump;
      mat.bumpScale = -0.6;
    }

    var mesh = new THREE.Mesh(geom, mat);

    return mesh;
  }

function createMeshRic(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile)
    var mat = new THREE.MeshPhongMaterial();
    texture.wrapS = THREE.RepeateWrapping;
    texture.wrapT = THREE.RepeateWrapping;
    mat.map = texture;
    mat.side = THREE.DoubleSide;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}


function createMeshRicB(geom, imageFile,bump) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile)
    var mat = new THREE.MeshPhongMaterial();
    texture.wrapS = THREE.RepeateWrapping;
    texture.wrapT = THREE.RepeateWrapping;
    mat.map = texture;
    mat.side = THREE.DoubleSide;

    if (bump) {
      var bump = THREE.ImageUtils.loadTexture("assets/textures/" + bump)
      mat.bumpMap = bump;
      bump.wrapS = THREE.RepeateWrapping;
      bump.wrapT = THREE.RepeateWrapping;
      mat.bumpScale = 1.2;
    }

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}



function drawShape(x1,y1,x2,y2,x3,y3,x4,y4) {

    // create a basic shape
    var shape = new THREE.Shape();

    // startpoint
    shape.moveTo(x1, y1);

    // straight line upwards
    shape.lineTo(x2, y2);
    shape.lineTo(x3, y3);
    shape.lineTo(x4, y4);
    shape.lineTo(x1, y1);

    // return the shape
    return shape;
}

function drawShapeTri(x1,y1,x2,y2,x3,y3) {

    // create a basic shape
    var shape = new THREE.Shape();

    // startpoint
    shape.moveTo(x1, y1);

    // straight line upwards
    shape.lineTo(x2, y2);
    shape.lineTo(x3, y3);
    shape.lineTo(x1, y1);

    // return the shape
    return shape;
}



function drawShapeMax(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8) {

    // create a basic shape
    var shape = new THREE.Shape();

    // startpoint
    shape.moveTo(x1, y1);

    // straight line upwards
    shape.lineTo(x2, y2);
    shape.lineTo(x3, y3);
    shape.lineTo(x4, y4);
    shape.lineTo(x5, y5);
    shape.lineTo(x6, y6);
    shape.lineTo(x7, y7);
    shape.lineTo(x8, y8);
    shape.lineTo(x1, y1);

    // return the shape
    return shape;
}

function drawShapeMax2(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9,x10,y10) {

    // create a basic shape
    var shape = new THREE.Shape();
   
    // startpoint   
    shape.moveTo(x1, y1);   
   
    // straight line upwards   
    shape.lineTo(x2, y2);   
    shape.lineTo(x3, y3);   
    shape.lineTo(x4, y4);   
    shape.lineTo(x5, y5);   
    shape.lineTo(x6, y6);
    shape.lineTo(x7, y7);
    shape.lineTo(x8, y8);
    shape.lineTo(x9, y9);
    shape.lineTo(x10, y10);
    shape.lineTo(x1, y1);

    // return the shape
    return shape;
}



function loadObjMtl ( name, scale, posx, posy, posz, dir) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var wing2 = object.children[0];
        var wing1 = object.children[1];

        object.scale.set(scale, scale, scale);
        object.rotation.x = Math.PI/2;
        object.position.set(posx,posy,posz);
        dwelling.add(object);
        //console.log(object);
    });


    loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
}

function loadObjMtl2 ( name, scale, posx, posy, posz, dir, rotz) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var wing2 = object.children[0];
        var wing1 = object.children[1];

        object.scale.set(scale, scale, scale);
        object.rotation.x = Math.PI/2;
        object.rotation.y = rotz;
        object.position.set(posx,posy,posz);
        
        //dwelling.add(object.children[0]);
        dwelling.add(object);
    });


   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );}

function loadObjMtl3 ( name, sx, sy, sz, posx, posy, posz, dir, rotz) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var wing2 = object.children[0];
        var wing1 = object.children[1];

        object.scale.set(sx, sy, sz);
        object.rotation.x = Math.PI/2;
        object.rotation.y = rotz;
        object.position.set(posx,posy,posz);
        
        //console.log(object);
        //dwelling.add(object.children[0]);
        dwelling.add(object);
    });


   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   

}

function loadObjMtlTest ( name, sx, sy, sz, posx, posy, posz, dir, rotz) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
       // var wing2 = object.children[1];
        var wing1 = object.children[0];

        wing1.scale.set(sx,sy,sz);
        
        wing1.rotation.x = Math.PI/2;
        wing1.rotation.y = rotz;
        wing1.position.set(posx,posy,posz);
        
        console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(wing1);
    });


   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   

}

