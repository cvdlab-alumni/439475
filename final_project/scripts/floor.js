//floor
      
var openSpace1 = createMeshRic(new THREE.ShapeGeometry(drawShapeMax2(0,0,7,0,7,3,11,3,11,6,5.2,6,5.2,9,3,9,3,6,0,6)),"parquet_gay.png");
openSpace1.position.set(0,0,0.21);
openSpace1.material.map.repeat.set(1.3,1.31);
dwelling.add(openSpace1);

var camera3 = createMeshRic(new THREE.ShapeGeometry(drawShape(0,6,3.18,6,3.18,9,0,9)),"parquetStanza.jpg");
camera3.position.set(0,0,0.212);
camera3.material.map.repeat.set(0.9,0.9);
dwelling.add(camera3);

var camera1 = createMeshRic(new THREE.ShapeGeometry(drawShape(7,0,11,0,11,3,7,3)),"parquetStanza.jpg");
camera1.position.set(0,0,0.21);
camera1.material.map.repeat.set(1.1,1.1);
dwelling.add(camera1);

var camera2 = createMeshRic(new THREE.ShapeGeometry(drawShape(5.2,6,8.2,6,8.2,9,5.2,9)),"parquetStanza.jpg");
camera2.position.set(0,0,0.21);
camera2.material.map.repeat.set(1.1,1.1);
dwelling.add(camera2);


var bagno = createMeshRic(new THREE.ShapeGeometry(drawShape(8.2,6,11,6,11,9,8.2,9)),"piastrelle_bagno7.jpg");
bagno.position.set(0,0,0.21);
bagno.material.map.repeat.set(4.2,4.2);
dwelling.add(bagno);