
		var cubeGeometryflat = new THREE.BoxGeometry(10.5,9,0.3);
		var cubeMaterialflat = new THREE.MeshLambertMaterial({color: 0xFFFFFF});//0x5B4033 marrone
		var copertura = new THREE.Mesh(cubeGeometryflat, cubeMaterialflat);
		copertura.position.set(5.5,4.5,3.15);
	

		var muro2esternoTri= createMeshRicB(new THREE.ShapeGeometry(drawShapeTri(0,0,9.1,0,4.5,1.61)),"brick_wall.jpg","brick_wall_bump.jpg");
		muro2esternoTri.rotation.z=-Math.PI/2;
		muro2esternoTri.rotation.y=-Math.PI/2;
		muro2esternoTri.position.set(-0.01,9.05,2.83);
		muro2esternoTri.material.map.repeat.set(2,2);
		muro2esternoTri.material.bumpMap.repeat.set(2,2);
		muro2esternoTri2 = muro2esternoTri.clone();
		muro2esternoTri2.position.set(11,9.05,2.83);
		dwelling.add(copertura);

		dwelling.add(muro2esternoTri2);
		dwelling.add(muro2esternoTri);

		var cubeGeometry = new THREE.BoxGeometry(12,5.52,0.3);
		var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5B4033});//0x5B4033 marrone
		var parte_sin = new THREE.Mesh(cubeGeometry, cubeMaterial);
		// parte_sin.rotation.x= Math.PI/12;
		// parte_sin.position.set(5.5,2.2,3.65);
		var parte_sin_tx = new THREE.Object3D();
		parte_sin_tx.rotation.x= Math.PI/12;
		parte_sin_tx.position.set(5.5,2.2,3.65);
		parte_sin_tx.add(parte_sin);


		var parte_dex = new THREE.Mesh(cubeGeometry, cubeMaterial);
		var parte_dex_tx = new THREE.Object3D();
		parte_dex_tx.rotation.x= 11*Math.PI/12;
		parte_dex_tx.position.set(5.5,6.77,3.65);
		parte_dex_tx.add(parte_dex);

		var roof_dex= createMeshRicB(new THREE.ShapeGeometry(drawShape(0,0,12,0,12,5.52,0,5.52)),"tegole.jpg","tegole_bump.jpg");
		// roof_sin.rotation.x=Math.PI/4;
		roof_dex.position.set(-6,-2.75,-0.16);
		roof_dex.material.map.repeat.set(0.4,0.4);
		parte_dex_tx.add(roof_dex);


		var roof_sin= createMeshRicB(new THREE.ShapeGeometry(drawShape(0,0,12,0,12,5.52,0,5.52)),"tegole.jpg","tegole_bump.jpg");
		// roof_sin.rotation.x=Math.PI/4;
		roof_sin.position.set(-6,-2.75,0.16);
		roof_sin.material.map.repeat.set(0.4,0.4);
		parte_sin_tx.add(roof_sin);

		var tetto = new THREE.Object3D();


		tetto.add(copertura);
		tetto.add(muro2esternoTri2);
		tetto.add(muro2esternoTri);
		tetto.add(parte_sin_tx);
		tetto.add(parte_dex_tx);
		tettoAdd.add(tetto);

