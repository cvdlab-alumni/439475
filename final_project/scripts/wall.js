//floor
      
//muri della sala 

var shape1=drawShape(0,0,7,0,7,3,0,3);
var hole1=drawShape(0.7,1.46,2.7,1.46,2.7,2.46,0.7,2.46);
var hole2=drawShape(3.44,1.46,4.96,1.46,4.96,2.457,3.44,2.457);
shape1.holes.push(hole1);
shape1.holes.push(hole2);

var openSpacelat= createMeshRic(new THREE.ShapeGeometry(shape1),"mint_green.jpg");
openSpacelat.rotation.x=Math.PI/2;
openSpacelat.position.set(0,0.41,0);
openSpacelat.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpacelat);


var shape2=drawShape(0,0,6,0,6,3,0,3);
var hole11=drawShape(4.869,1.46,3.48,1.46,3.48,2.46,4.869,2.46);
shape2.holes.push(hole11);

var openSpacefront= createMeshRic(new THREE.ShapeGeometry(shape2),"mint_green.jpg");
openSpacefront.rotation.z=-Math.PI/2;
openSpacefront.position.set(0.41,6,0);
openSpacefront.rotation.y=-Math.PI/2;
openSpacefront.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpacefront);


var openSpaceNoHole= createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,3.2,0,3.2,3,0,3)),"mint_green.jpg");
openSpaceNoHole.rotation.x=Math.PI/2;
openSpaceNoHole.position.set(0.006,5.797,0);
openSpaceNoHole.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpaceNoHole);

var openSpaceNoHole2 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,3,0,3,3,0,3)),"mint_green.jpg");
openSpaceNoHole2.rotation.x=Math.PI/2;
openSpaceNoHole2.position.set(5.19,5.79,0);
openSpaceNoHole2.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpaceNoHole2);

var openSpaceNoHole3 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,0,2.9,0,2.9,3,0,3)),"mint_green.jpg");
openSpaceNoHole3.rotation.y=-Math.PI/2;
openSpaceNoHole3.rotation.x=Math.PI/2;
openSpaceNoHole3.position.set(6.998,3.011,0);
openSpaceNoHole3.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpaceNoHole3);

//texture camera3
var shape3=drawShape(0,0,3.178,0,3.178,3,0,3);
var holePortaC3=drawShape(0.64,0,1.498,0,1.498,2.2,0.64,2.2);
shape3.holes.push(holePortaC3);

var openSpaceC3= createMeshRic(new THREE.ShapeGeometry(shape3),"mint_green.jpg");
openSpaceC3.rotation.x=Math.PI/2;
openSpaceC3.rotation.y=Math.PI/2;
openSpaceC3.position.set(3.207,5.79,0);
openSpaceC3.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpaceC3);

var camera3= createMeshRic(new THREE.ShapeGeometry(shape3),"giallo_spazzolato.jpg");
camera3.rotation.x=Math.PI/2;
camera3.rotation.y=Math.PI/2;
camera3.position.set(2.99,5.81,0);
camera3.material.map.repeat.set(.2,.2);
dwelling.add(camera3);

var shape31=drawShape(0,0,3.178,0,3.178,3,0,3);
var holefinestraC3=drawShape(1.2,1.3,2.19,1.3,2.19,2.6,1.2,2.6);
shape31.holes.push(holefinestraC3);


var camera3Par2= createMeshRic(new THREE.ShapeGeometry(shape31),"giallo_spazzolato.jpg");
camera3Par2.rotation.x=Math.PI/2;
camera3Par2.position.set(0,8.59,0);
camera3Par2.material.map.repeat.set(.2,.2);
dwelling.add(camera3Par2);


var shape311=drawShape(0,0,3.178,0,3.178,3,0,3);

var camera3Par2NoHole= createMeshRic(new THREE.ShapeGeometry(shape311),"giallo_spazzolato.jpg");
camera3Par2NoHole.rotation.x=Math.PI/2;
camera3Par2NoHole.rotation.y=Math.PI/2;
camera3Par2NoHole.position.set(0.41,5.8,0);
camera3Par2NoHole.material.map.repeat.set(.2,.2);
dwelling.add(camera3Par2NoHole);

var camera3Par2NoHole= createMeshRic(new THREE.ShapeGeometry(shape311),"giallo_spazzolato.jpg");
camera3Par2NoHole.rotation.x=Math.PI/2;
camera3Par2NoHole.position.set(0,6.01,0);
camera3Par2NoHole.material.map.repeat.set(.2,.2);
dwelling.add(camera3Par2NoHole);



//texture camera2
var shape33=drawShape(0,0,2.9,0,2.9,3,0,3);
var holePortaC3=drawShape(0.64,0,1.498,0,1.498,2.2,0.64,2.2);
shape33.holes.push(holePortaC3);

var openSpaceC2= createMeshRic(new THREE.ShapeGeometry(shape33),"mint_green.jpg");
openSpaceC2.rotation.x=Math.PI/2;
openSpaceC2.rotation.y=Math.PI/2;
openSpaceC2.position.set(5.199,5.79,0);
openSpaceC2.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpaceC2);


var camera2= createMeshRic(new THREE.ShapeGeometry(shape33),"giallo_spazzolato.jpg");
camera2.rotation.x=Math.PI/2;
camera2.rotation.y=Math.PI/2;
camera2.position.set(5.41,5.79,0);
camera2.material.map.repeat.set(.2,.2);
dwelling.add(camera2);

var shape332=drawShape(0,0,2.9,0,2.9,3,0,3);
var holefinestraC2=drawShape(0.6,1.3,1.2,1.3,1.2,2.6,0.6,2.6);
shape332.holes.push(holefinestraC2);

var camera2finestra= createMeshRic(new THREE.ShapeGeometry(shape332),"giallo_spazzolato.jpg");
camera2finestra.rotation.x=Math.PI/2;
camera2finestra.position.set(5.299,8.59,0);
camera2finestra.material.map.repeat.set(.2,.2);
dwelling.add(camera2finestra);

var shape312=drawShape(0,0,3.178,0,3.178,3,0,3);

var camera2Par2NoHole= createMeshRic(new THREE.ShapeGeometry(shape312),"giallo_spazzolato.jpg");
camera2Par2NoHole.rotation.x=Math.PI/2;
camera2Par2NoHole.rotation.y=Math.PI/2;
camera2Par2NoHole.position.set(8.19,5.8,0);
camera2Par2NoHole.material.map.repeat.set(.2,.2);
dwelling.add(camera2Par2NoHole);

var camera2Par2NoHole= createMeshRic(new THREE.ShapeGeometry(shape312),"giallo_spazzolato.jpg");
camera2Par2NoHole.rotation.x=Math.PI/2;
camera2Par2NoHole.position.set(5.2,6.01,0);
camera2Par2NoHole.material.map.repeat.set(.2,.2);
dwelling.add(camera2Par2NoHole);



//parete openSpace finestrella
var shape4=drawShape(0,0,2,0,2,3,0,3);
var holePortaCor=drawShape(0.75,1.3,1.25,1.3,1.25,2.3,0.75,2.3);
shape4.holes.push(holePortaCor);

var openSpaceC3= createMeshRic(new THREE.ShapeGeometry(shape4),"mint_green.jpg");
openSpaceC3.rotation.x=Math.PI/2;
openSpaceC3.position.set(3.2,8.596,0);
openSpaceC3.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpaceC3);



//texture openspace bagno
var shape5=drawShape(0.19,0,3,0,3,3,0.19,3);
var holePortaB=drawShape(0.765,0,1.498,0,1.498,2.2,0.765,2.2);
shape5.holes.push(holePortaB);

var openSpaceB= createMeshRic(new THREE.ShapeGeometry(shape5),"mint_green.jpg");
openSpaceB.rotation.x=Math.PI/2;
openSpaceB.position.set(8,5.79,0);
openSpaceB.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpaceB);


var shapeIntPB=drawShape(0.19,0,3,0,3,2.00000001,0.19,2.00000001);
var holePortaPB=drawShape(0.763,0,1.5,0,1.5,2,0.763,2);
shapeIntPB.holes.push(holePortaPB);

var IntPB= createMeshRic(new THREE.ShapeGeometry(shapeIntPB),"piastrelle_bagno5.jpg");
IntPB.rotation.x=Math.PI/2;
IntPB.position.set(8.0015,6.001,0);
IntPB.material.map.repeat.set(5,5);
dwelling.add(IntPB);

var shape312=drawShape(0,0,3.178,0,3.178,2,0,2);
var bagno2Par2NoHole= createMeshRic(new THREE.ShapeGeometry(shape312),"piastrelle_bagno5.jpg");
bagno2Par2NoHole.rotation.x=Math.PI/2;
bagno2Par2NoHole.rotation.y=Math.PI/2;
bagno2Par2NoHole.position.set(10.59,5.8,0);
bagno2Par2NoHole.material.map.repeat.set(5,5);
dwelling.add(bagno2Par2NoHole);

var bagno2Par2NoHoleFront= createMeshRic(new THREE.ShapeGeometry(shape312),"piastrelle_bagno5.jpg");
bagno2Par2NoHoleFront.rotation.x=Math.PI/2;
bagno2Par2NoHoleFront.rotation.y=Math.PI/2;
bagno2Par2NoHoleFront.position.set(8.42,5.8,0);
bagno2Par2NoHoleFront.material.map.repeat.set(5,5);
dwelling.add(bagno2Par2NoHoleFront);

var shapeBH=drawShape(0,0,2.8,0,2.8,2,0,2);
var holefinestraBH=drawShape(.93,1.3,1.67,1.3,1.67,2,.93,2);
shapeBH.holes.push(holefinestraBH);

var bagno2Par2Hole= createMeshRic(new THREE.ShapeGeometry(shapeBH),"piastrelle_bagno5.jpg");
bagno2Par2Hole.rotation.x=Math.PI/2;
bagno2Par2Hole.position.set(8.2,8.59,0);
bagno2Par2Hole.material.map.repeat.set(5,5);
dwelling.add(bagno2Par2Hole);



//parete camera 1
var shape6=drawShape(0,0,4,0,4,3,0,3);
var holePortaC1=drawShape(0.208,0,1.2,0,1.2,2.2,0.208,2.2);
shape6.holes.push(holePortaC1);

var openSpaceC1= createMeshRic(new THREE.ShapeGeometry(shape6),"mint_green.jpg");
openSpaceC1.rotation.x=Math.PI/2;
openSpaceC1.position.set(6.998,3.01,0);
openSpaceC1.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpaceC1);

//interno camera 1 con porta
var cameraInt1= createMeshRic(new THREE.ShapeGeometry(shape6),"giallo_spazzolato.jpg");
cameraInt1.rotation.x=Math.PI/2;
cameraInt1.position.set(6.998,2.79,0);
cameraInt1.material.map.repeat.set(.2,.2);
dwelling.add(cameraInt1);

var cameraInt1= createMeshRic(new THREE.ShapeGeometry(shape6),"giallo_spazzolato.jpg");
cameraInt1.rotation.x=Math.PI/2;
cameraInt1.position.set(6.998,2.79,0);
cameraInt1.material.map.repeat.set(.2,.2);
dwelling.add(cameraInt1);

var shapeC1NH=drawShape(0,0,3,0,3,3,0,3);
var camera1CNH= createMeshRic(new THREE.ShapeGeometry(shapeC1NH),"giallo_spazzolato.jpg");
camera1CNH.rotation.x=Math.PI/2;
camera1CNH.rotation.y=Math.PI/2;
camera1CNH.position.set(7.21,0,0);
camera1CNH.material.map.repeat.set(.2,.2);
dwelling.add(camera1CNH);

//camera1 lato ingresso
var cameraC2NH = createMeshRic(new THREE.ShapeGeometry(shapeC1NH),"giallo_spazzolato.jpg");
cameraC2NH.rotation.x=Math.PI/2;
cameraC2NH.position.set(10.59,0,0);
cameraC2NH.rotation.y=Math.PI/2;
cameraC2NH.material.map.repeat.set(.2,.2);
dwelling.add(cameraC2NH);

//camera1 lato
var shapeC3NH=drawShape(0,0,4,0,4,3,0,3);
var cameraC3NH = createMeshRic(new THREE.ShapeGeometry(shapeC3NH),"giallo_spazzolato.jpg");
cameraC3NH.rotation.x=Math.PI/2;
cameraC3NH.position.set(7,0.41,0);
cameraC3NH.material.map.repeat.set(.2,.2);
dwelling.add(cameraC3NH);


//parete ingresso openspace
var shape7=drawShape(0,0,3,0,3,3,0,3);
var holePortaIng=drawShape(0.7,0,2.1,0,2.1,2.4,0.7,2.4);
shape7.holes.push(holePortaIng);

var openSpaceIng= createMeshRic(new THREE.ShapeGeometry(shape7),"mint_green.jpg");
openSpaceIng.rotation.x=Math.PI/2;
openSpaceIng.rotation.y=Math.PI/2;
openSpaceIng.position.set(10.598,3,0);
openSpaceIng.material.map.repeat.set(0.2,0.2);
dwelling.add(openSpaceIng);

//mura esterne
//lato sinistro
var shape2muro=drawShape(0,0,11,0,11,3,0,3);

var holeFinLat1=drawShape(0.7,1.46,2.7,1.46,2.7,2.46,0.7,2.46);
var holeFinLat2=drawShape(3.44,1.46,4.96,1.46,4.96,2.457,3.44,2.457);

shape2muro.holes.push(holeFinLat1);
shape2muro.holes.push(holeFinLat2);

var muro2esterno= createMeshRicB(new THREE.ShapeGeometry(shape2muro),"brick_wall.jpg","brick_wall_bump.jpg");
muro2esterno.rotation.x=Math.PI/2;
muro2esterno.position.set(0,-0.01,0);
muro2esterno.material.map.repeat.set(2,2);
dwelling.add(muro2esterno);

//lato frontale
var shape2muroBack=drawShape(0,0,9,0,9,3,0,3);

var holeFinLat1Back=drawShape(6.479,1.46,7.86,1.46,7.86,2.46,6.479,2.46);

shape2muroBack.holes.push(holeFinLat1Back);
var muro2esternoBack= createMeshRicB(new THREE.ShapeGeometry(shape2muroBack),"brick_wall.jpg","brick_wall_bump.jpg");
muro2esternoBack.rotation.x=Math.PI/2;
muro2esternoBack.rotation.y=-Math.PI/2;
muro2esternoBack.position.set(-0.01,9,0);
muro2esternoBack.material.map.repeat.set(2,2);
dwelling.add(muro2esternoBack);

var shape2muroFront=drawShape(0,0,9,0,9,3,0,3);
var holeFinLatD5=drawShape(3.9,0,5.3,0,5.3,2.4,3.9,2.4);


shape2muroFront.holes.push(holeFinLatD5);
var muro2esternoFront= createMeshRicB(new THREE.ShapeGeometry(shape2muroFront),"brick_wall.jpg","brick_wall_bump.jpg");
muro2esternoFront.rotation.x=Math.PI/2
muro2esternoFront.rotation.y=-Math.PI/2;
muro2esternoFront.position.set(11.01,9,0);
muro2esternoFront.material.map.repeat.set(2,2);
dwelling.add(muro2esternoFront);



//lato destro
var shape2muroLat=drawShape(0,0,11,0,11,3,0,3);

var holeFinLatD1=drawShape(1.2,1.3,2.19,1.3,2.19,2.6,1.2,2.6); //camera3
var holeFinLatD2=drawShape(5.89,1.3,6.51,1.3,6.51,2.6,5.89,2.6); //camera2
var holeFinLatD3=drawShape(3.95,1.3,4.45,1.3,4.45,2.3,3.95,2.3); // finestrella
var holeFinLatD4=drawShape(9.13,1.3,9.87,1.3,9.87,2.6,9.13,2.6); // lato destro

shape2muroLat.holes.push(holeFinLatD1);
shape2muroLat.holes.push(holeFinLatD2);
shape2muroLat.holes.push(holeFinLatD3);
shape2muroLat.holes.push(holeFinLatD4);

var muro2esternoLatD= createMeshRicB(new THREE.ShapeGeometry(shape2muroLat),"brick_wall.jpg","brick_wall_bump.jpg");
muro2esternoLatD.rotation.x=Math.PI/2;
muro2esternoLatD.position.set(0,9.01,0);
muro2esternoLatD.material.map.repeat.set(2,2);
muro2esternoLatD.material.bumpMap.repeat.set(2,2);

dwelling.add(muro2esternoLatD);


