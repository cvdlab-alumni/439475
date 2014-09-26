
	var imagePrefix = "assets/media/img/skyBox/";
	var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
	var imageSuffix = ".png";
	var skyGeometry = new THREE.CubeGeometry( 900, 900, 900 ); 
	var materialArray = [];
	for (var i = 0; i < 6; i++)
	materialArray.push( new THREE.MeshBasicMaterial({
	  map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
	  side: THREE.BackSide
	}));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	skyBox.position.set(50,70,40);
	dwelling.add( skyBox );
	giardino = createMeshRic(new THREE.PlaneGeometry(400,400,100,100),"grass.jpg");
	skyBox.visible = false;
	skyBox.rotation.x=Math.PI/2;
	repeatX = 180;
	repeatY = 180;
	giardino.material.side=THREE.DoubleSide;
	giardino.material.map.repeat.set(repeatX, repeatY);
	giardino.position.set(50,45,0);
	dwelling.add(giardino);



