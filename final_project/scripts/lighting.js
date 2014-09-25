var sphereGeometry = new THREE.SphereGeometry(0.03,0.05,0.02);
var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var lamp_sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
lamp_sphere.position.set(1.83,7.19,2.33);
sphereMaterial.transparent=true;
sphereMaterial.opacity=0.6;
dwelling.add(lamp_sphere);

// var pointColor = 0xFFFFFF;
// pointLight_sphere = new THREE.PointLight(pointColor);
// pointLight_sphere.distance = 1.5;


//lamp_sphere.add(pointLight_sphere);
// pointLight_sphere.intensity=5;