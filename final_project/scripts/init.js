
var stats = initStats();

// create a scene, that will hold all our elements such as objects, cameras and lights.
scene = new THREE.Scene();
video = document.createElement( 'video' );
video2 = document.createElement( 'video' );
video3 = document.createElement( 'video' );
 


//oggetto che rappresenta la scena
dwelling = new THREE.Object3D();
tettoAdd = new THREE.Object3D();

bool_room_light = false;


engine=[];
engine[0]=null;
engine[1]=null;




// create a camera, which defines where we're looking at.
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.up=new THREE.Vector3(0,1,0);

// create trackball controls
trackballControls = new THREE.TrackballControls(camera);

// create a render and set the size
var webGLRenderer = new THREE.WebGLRenderer();
webGLRenderer.setClearColor(new THREE.Color(0x87CEFA, 1.0));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);

//per il tocco del mouse
//projector = new THREE.Projector();
//document.addEventListener('mousedown', onDocumentMouseDown, false);


var ambiLight = new THREE.AmbientLight(0x141414)
scene.add(ambiLight);
// position and point the camera to the center of the scene
//camera.position.set(-30,40,50);
camera.position.set(0,-20,20);
camera.lookAt(new THREE.Vector3(0, 0, 0));



// add spotlights
var spotLight1 = new THREE.SpotLight(0xffffff);
spotLight1.position.set(-30, 40, 50);
spotLight1.intensity = 1;
dwelling.add(spotLight1);

var spotLight2 = new THREE.SpotLight(0xffffff);
spotLight2.position.set(30, -40, -50);
spotLight2.intensity = 1;
dwelling.add(spotLight2);

room_light = new THREE.PointLight( 0xffffff, 2.8, 2.2 );
room_light.position.set(2.83,2.19,1.5);
dwelling.add( room_light );
room_light.intensity=0.6;



var step = 0;

// setup the control gui

var mesh;

var loader = new THREE.OBJLoader();
loader.load('/assets/models/apartment.obj', function (obj) {

  global_o = obj;



  var multiMaterial = [
    new THREE.MeshLambertMaterial({color: 0xFFFFFF, side: THREE.DoubleSide, shading: THREE.FlatShading}),
    new THREE.MeshLambertMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
    ];

  mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);

  dwelling.add(mesh);
});

var axisHelper = new THREE.AxisHelper(3);
scene.add(axisHelper);
axisHelper.visible = false;


var controls = new function () {
  this.pointerLock = false;
  this.roof = false;
  this.clouds=false;
  this.skyBox=false;
  this.showAxisHelper=false;
}

var gui = new dat.GUI(); 
gui.add(controls,'pointerLock').onChange(function (value) {
  if(value) {
    dwelling.rotation.x = -Math.PI/2;
    // dwelling.rotation.z = -Math.PI;
    dwelling.position.set(-100,-15,-110);
    dwelling.scale.set(15,15,15);
    //con il primo valore mi sposto a dx e sx con il secondo su e giù e con l'ultimo di traverso
    window.location.pointerLock = true;
    startFPS();
  }
});

// dwelling.add(tettoAdd);

gui.add(controls,'roof').onChange(function (value) {
  // var tetto= dwelling.getObjectByName("tetto");

  if(value)
    dwelling.add(tettoAdd);
  else
    dwelling.remove(tettoAdd);
  tettoAdd.visible=value;


});

gui.add(controls, 'clouds').onChange(function (value) {
  if(!value){
    if(engine[0]!==null){
        engine[0].destroy();}
         }
    else{
      if(engine[0]!==null){
        engine[0].destroy();}
      engine_cloud = new ParticleEngine();   
      engine_cloud.setValues( Particles.clouds );
      engine_cloud.initialize();
      engine[0]=engine_cloud;
      }
});

gui.add(controls, 'skyBox').onChange(function (value) {
  skyBox.visible=value;
});

gui.add(controls, 'showAxisHelper').onChange(function (value) {
    axisHelper.visible = value;
});
scene.add(dwelling);
render();

raycaster = new THREE.Raycaster();
raycaster.ray.direction.set(0, -1, 0);
projector = new THREE.Projector();

var toIntersect;
function onDocumentMouseDown (event) {

  var toIntersect =[hook.children[0].children[1],hook1.children[0].children[1],hook2.children[0].children[1],
  hook3.children[0].children[1],hook4.children[0].children[1],hookFin1.children[0],hookFin2.children[0],
  hookFin3.children[0],hookFin4.children[0],hookFin5.children[0],hookFin6.children[0],hookFin7.children[0],
  hookVent.children[0],hookInt.children[0],hookInt1.children[0],hookInt2.children[0],hookInt3.children[0],
  hookInt4.children[0],hookInt5.children[0],blackScreen,blackScreen2,blackScreen3,fireMesh];

  event.preventDefault();

  if (!window.location.pointerLock){
    var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
    projector.unprojectVector(vector, camera);

    raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    var intersects = raycaster.intersectObjects(toIntersect);

    if (intersects.length > 0) {
      intersects[0].object.interact();
    }
  }
  else {
    event.preventDefault();
    var vector2 = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
    projector.unprojectVector(vector2, camera);

    var raycaster = new THREE.Raycaster(vector2, controls.getDirection(new THREE.Vector3(0,0,0)).clone());

    var intersects = raycaster.intersectObjects(toIntersect);
    if (intersects.length > 0) {
      intersects[0].object.interact();
    }
  }
}
document.addEventListener('mousedown', onDocumentMouseDown, false);



function render() {


  stats.update();
  trackballControls.update();
  TWEEN.update();
  scene.add(window.location.light);


  if ( video.readyState === video.HAVE_ENOUGH_DATA ) {
      
      videoImageContext.drawImage( video, 0, 0 );
      videoTexture.needsUpdate = true; 
    }
  

  if ( video2.readyState === video2.HAVE_ENOUGH_DATA ) {
      
      videoImageContext2.drawImage( video2, 0, 0 );
      videoTexture2.needsUpdate = true;
  }

  if ( video3.readyState === video3.HAVE_ENOUGH_DATA ) {
      
      videoImageContext3.drawImage( video3, 0, 0 );
      videoTexture3.needsUpdate = true; 
    }

  if(bool_room_light){
    room_light.intensity=0.6;
    }
  else{
    room_light.intensity=0;
    }
  if (window.location.pointerLock === true || window.location.pointerLock === true)
    computeFPControls();


  requestAnimationFrame(render);
  webGLRenderer.render(scene, camera);

  // render using requestAnimationFrame
  

  if(engine[0]!==null){
      engine[0].update( 0.01 * 0.5 );}
  if(engine[1]!==null){
      engine[1].update( 0.01 * 0.5 );}

}


function initStats() {
  var stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  $('body').append(stats.domElement);
  return stats;
}





// });
