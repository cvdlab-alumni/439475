//function loadObjMtl ( name, scale, posx, posy, posz)


var hook = new THREE.Object3D();
loadObjMtl3DoorAnimationEntrata('exterior-door-01',0.2,0.17,0.18,11,5,1.2,'doors',Math.PI/2,hook);

var hook1 = new THREE.Object3D();
loadObjMtl3DoorAnimation1('puerta',0.0084,0.01041,0.018,9.13,6.41,0,'doors',Math.PI,hook1);

//var portabathdoor = loadObjMtl3('puerta',0.0084,0.01041,0.018,9.13,6.41,0,"doors",Math.PI);

var hook2 = new THREE.Object3D();
loadObjMtl3DoorAnimation2('puerta',0.0112,0.01041,0.018,7.7,3.55,0,"doors",Math.PI,hook2);

//var portaroom1 = loadObjMtl3('puerta',0.0112,0.01041,0.018,7.7,3.55,0,"doors",Math.PI);

var hook3 = new THREE.Object3D();
loadObjMtl3DoorAnimation3('puerta',0.0102,0.01041,0.018,5.825,6.86,0,"doors",Math.PI/2,hook3);

// var portaroom2 = loadObjMtl3('puerta',0.0102,0.01041,0.018,5.825,6.86,0,"doors",Math.PI/2);

var hook4 = new THREE.Object3D();
loadObjMtl3DoorAnimation3('puerta',0.0102,0.01041,0.018,3.8,6.86,0,"doors",Math.PI/2,hook4);

// var portaroom3 = loadObjMtl3('puerta',0.0102,0.01041,0.018,3.8,6.86,0,"doors",Math.PI/2);
	

var hookFin1 = new THREE.Object3D();
loadObjMtl3FinAnimation1('windowFrostedGlass',0.33,0.28,0.3,1.752,8.9,1.97,"windows",Math.PI,hookFin1);

//prima finestra laterale destra
//var window1 = loadObjMtl3('windowFrostedGlass',0.33,0.29,0.3,1.752,8.9,1.97,"windows",Math.PI);

var hookFin2 = new THREE.Object3D();
loadObjMtl3FinAnimation2('windowFrostedGlass',0.167,0.217,0.3,4.23,8.9,1.829,"windows",Math.PI,hookFin2);

// //seconda finestra laterale destra 
// var window2 = loadObjMtl3('windowFrostedGlass',0.167,0.217,0.3,4.23,8.9,1.829,"windows",Math.PI);

var hookFin3 = new THREE.Object3D();
loadObjMtl3FinAnimation3('windowFrostedGlass',0.207,0.279,0.3,6.24,8.9,1.968,"windows",Math.PI,hookFin3);
// //terza finestra laterale destra
// var window3 = loadObjMtl3('windowFrostedGlass',0.207,0.279,0.3,6.24,8.9,1.968,"windows",Math.PI);

var hookFin4 = new THREE.Object3D();
loadObjMtl3FinAnimation4('windowFrostedGlass',0.247,0.279,0.3,9.54,8.9,1.968,"windows",Math.PI,hookFin4);
// //quarta finestra laterale destra
// var window4 = loadObjMtl3('windowFrostedGlass',0.247,0.279,0.3,9.54,8.9,1.968,"windows",Math.PI);


var hookFin5 = new THREE.Object3D();
loadObjMtl3FinAnimation5('windowFrostedGlass',0.56,0.2139,0.3,4.3,0.15,1.97,"windows",Math.PI,hookFin5);
// //seconda finestra laterale sinistra
// var window6 = loadObjMtl3('windowFrostedGlass',0.52,0.21,0.3,4.299,0.15,1.97,"windows",Math.PI);

var hookFin6 = new THREE.Object3D();
loadObjMtl3FinAnimation6('windowFrostedGlass',0.47,0.21,0.3,0.2,1.75,1.97,"windows",Math.PI/2,hookFin6);
// //front finistra open space
// var window7 = loadObjMtl3('windowFrostedGlass',0.47,0.21,0.3,0.2,1.75,1.97,"windows",Math.PI/2);

var hookFin7 = new THREE.Object3D();
loadObjMtl3FinAnimation7('windowFrostedGlass',0.667,0.2139,0.3,1.818,0.15,1.97,"windows",Math.PI,hookFin7);
// //prima finestra laterale sinistra
// var window5 = loadObjMtl3('windowFrostedGlass',0.69,0.21,0.3,1.799,0.15,1.97,"windows",Math.PI);

////////////////////////////////FINE FINESTRE E PORTE////////////////////////////////////////////////////////
//loadObjMtl3('sofa',0.01,0.013,0.012,4.84,1.9,0,"livingroom/sofa",Math.PI/2);

loadObjMtl3('cornerSofa',0.0132,0.015,0.01,4.56,2,0.68,"livingroom/cornerSofa",Math.PI/2);
loadObjMtl3('tappeto',0.008,0.005,0.0089,5.06,2,0.2,"livingroom/tappeto",Math.PI);



loadObjMtl3('dining_room',0.008,0.01,0.016,6.82,1.72,0.2,"livingroom/dining_room",3*Math.PI/2);
loadObjMtl3('led_tv',0.012,0.011,0.017,6.75,1.72,1,"livingroom/led_tv",3*Math.PI/2);//tv


loadObjMtl3('glassTable',0.2,0.25,0.2,2.4,1.85,0.6,"livingroom/glassTable",3*Math.PI/2);//tavolo vetro
hookVent = new THREE.Object3D();
loadObjMtl3VentilatoreAnimation('ventilatore',0.013,0.013,0.013,4,4,2.3,"livingroom/ventilatore",3*Math.PI/2,hookVent);//tavolo vetro

loadObjMtl3('ventilatore',0.013,0.013,0.013,9,2.5,2.3,"livingroom/ventilatore",3*Math.PI/2);

loadObjMtl3('sedia',0.015,0.012,0.013,4,1.47,0.1,"livingroom/sedia",3*Math.PI/2);//sedia
loadObjMtl3('sedia',0.015,0.012,0.013,4,2.15,0.1,"livingroom/sedia",3*Math.PI/2);//sedia
loadObjMtl3('sedia',0.015,0.012,0.013,0.8,1.47,0.1,"livingroom/sedia",Math.PI/2);//sedia
loadObjMtl3('sedia',0.015,0.012,0.013,0.8,2.15,0.1,"livingroom/sedia",Math.PI/2);//sedia

loadObjMtl3('albero',0.028,0.0195,0.017,9.25,3.05,1.7,"livingroom/quadroAlbero",Math.PI);// quadro albero
loadObjMtl3('hallTable',0.01,0.0081,0.0082,9.95,3.05,0.22,"livingroom/hallTable",Math.PI);// comodino hall
loadObjMtl3('appendiAbiti',0.001,0.001,0.00082,10.25,5.45,0.22,"livingroom/appendiAbiti",Math.PI);// appendi hall

loadObjMtl3('videoCitofono',0.01,0.01,0.012,10.548,3.45,1.6,"livingroom/videoCitofono",3*Math.PI/2);// citofono hall

loadObjMtl3('biblioteca',0.00085,0.0012,0.0004,7.65,5.6,0.2,"livingroom/biblioteca",Math.PI);//biblioteca


loadObjMtl3('libri',0.012,0.012,0.021,6.69,5.49,0.8,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,6.43,5.49,0.8,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,6.1,5.49,0.8,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,5.9,5.49,0.39,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,6.27,5.49,0.39,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,6.91,5.49,0.39,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,7.39,5.49,0.39,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,6.83,5.49,1.33,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,5.9,5.49,1.33,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,6.42,5.49,1.84,"livingroom/libri",0);//libri
loadObjMtl3('libri',0.012,0.012,0.021,6.72,5.49,1.84,"livingroom/libri",0);//libri








loadObjMtl3('comodinoLavandino',0.012,0.011,0.015,8.4,7.1,0.6,"bathroom/comodinoLavandino",Math.PI/2);//comodino lavandino bagno
loadObjMtl3('bathmat',0.012,0.002,0.015,8.96,8,0.25,"bathroom/bathmat",Math.PI/2);

loadObjMtl3('rectangularMirror',0.011,0.0126,0.015,8.42,8.08,1.6,"bathroom/rectangularMirror",Math.PI/2);//mirror
loadObjMtl3('doccia',0.012,0.0095,0.013,5.8,6,0.23,"bathroom/doccia",0);//doccia
loadObjMtl3('shower',0.01,0.008,0.005,10.15,6,0.4,"bathroom/shower",Math.PI);//rubinetto

// var hookGab = new THREE.Object3D();
// loadObjMtl3GabinAnimation('gabinetto',0.0145,0.0125,0.01,10.6,8.1,0.2,"bathroom/gabinetto",3*Math.PI/2,hookGab);//gabinetto










loadObjMtl3('gabinetto',0.0145,0.0125,0.01,10.6,8.1,0.2,"bathroom/gabinetto",3*Math.PI/2);//gabinetto
loadObjMtl3('bidet',0.012,0.012,0.012,10.26,6.8,0.2,"bathroom/bidet",3*Math.PI/2);//bidet
loadObjMtl3('toiletPaper',0.01,0.01,0.01,10.55,7.6,1,"bathroom/toiletPaper",3*Math.PI/2);//carta
loadObjMtl3('asciugamano',0.2,0.32,0.235,8.42,6.7,0.2,"bathroom/asciugamano",Math.PI/2);//asciugamano
loadObjMtl3('hanging-restaurant-light',0.1,0.08,0.1,9.5,7.5,2.3,"bathroom/lampadario",0);//



loadObjMtl3('lavandino',0.008,0.012,0.009,0.8,3.66,0.15,"kitchen/lavandino",Math.PI/2);
loadObjMtl3('mobiletto',0.008,0.012,0.009,2.515,4.2,0.15,"kitchen/mobiletto",Math.PI/2);
loadObjMtl3('upperCabinet',0.008,0.012,0.009,0.515,3.315,0.185,"kitchen/upperCabinet",Math.PI/2);
loadObjMtl3('upperGlassCabinet',0.012,0.012,0.009,0.53,5.165,0.185,"kitchen/upperGlassCabinet",Math.PI/2);
loadObjMtl3('upperSmallCabinet',0.0123,0.012,0.009,0.595,5.584,0.185,"kitchen/upperSmallCabinet",Math.PI/2);


loadObjMtl3('mobiletto2',0.0105,0.01205,0.00898,2.512,7.14,0.22,"kitchen/mobiletto2",Math.PI/2);//y5.881
loadObjMtl3('oven',0.012,0.017,0.009,0.85,4.4,-2.08,"kitchen/oven",Math.PI/2); //forno


//loadObjMtlTest('fornelletti',0.0119,0.019,0.012,0.42,4.065,1.18,"kitchen/fornelletti",Math.PI/2); //fornelletti


loadObjMtl3('cappa',0.00069,0.0016,0.00112,0.7,3.78,2,"kitchen/cappa",Math.PI/2); //cappa
loadObjMtl3('refridgerator',1.1,1.22,1,2.7,5.72,0.5,"kitchen/refridgerator",0);


loadObjMtl3('bed',0.0095,0.0065,0.0078,7.33,7.35,0.3,"bedroom/bed",3*Math.PI/2);//letto
loadObjMtl3('comodino',0.0095,0.009,0.0078,8,6.5,0.3,"bedroom/comodino",3*Math.PI/2);//comodino
loadObjMtl3('comodino',0.0095,0.009,0.0078,8,8.17,0.3,"bedroom/comodino",3*Math.PI/2);//comodino
loadObjMtl3('guardaroba',0.011,0.008,0.007,5.87,7.6,0.3,"bedroom/guardaroba",Math.PI/2);//guardaroba
loadObjMtl3('cornice',0.01,0.01,0.01,6.8,6.1,1.7,"bedroom/cornice",Math.PI);//guardarob
loadObjMtl3('mensole',0.0095,0.0065,0.0078,6.08,7.1,2.1,"bedroom/mensole",3*Math.PI/2);//letto
loadObjMtl3('pendantLamp',0.0007,0.00085,0.0007,6.7,7.2,2.3,"camera3/lampadario",0);//lampadario

loadObjMtl3('bed',0.008,0.011,0.01,8.15,0.55,0.3,"camera1/bed",Math.PI);//letto
loadObjMtl3('scrivania',0.0034,0.0036,0.0034,8.28,0.93,0.18,"camera1/scrivania",-Math.PI);//scrivania
loadObjMtl3('armadio',0.005,0.009,0.007,8.48,0.79,1.18,"camera1/armadio",Math.PI);//armadio
loadObjMtl3('chair',0.05,0.075,0.05,8,1.4,0.7,"camera1/chair",-Math.PI);//armadio
loadObjMtl3('apple',0.34,0.41,0.34,7.78,0.96,1,"camera1/apple",-5*Math.PI/4);//scrivania
loadObjMtl3('cornice',0.01,0.01,0.01,9,2.77,1.7,"camera1/cornice",0);//cornice
loadObjMtl3('stampante',0.0044,0.008,0.006,7.45,0.6,1.78,"camera1/stampante",-5*Math.PI/4);//scrivania





loadObjMtl3('scrivania',0.006,0.012,0.007,2.37,10.8,0.1,"camera3/scrivania",3*Math.PI/2);//scrivania
loadObjMtl3('apple_pc',0.14,0.13,0.08,1.72,6.98,0.96,"camera3/apple_pc",3*Math.PI/2);//pc
loadObjMtl3('CDrack',0.014,0.013,0.01,0.7,7.3,0.2,"camera3/CDrack",3*Math.PI/2);//porta CD
loadObjMtl3('cassa',0.008,0.013,0.01,0.6,7.45,0.2,"camera3/cassa",Math.PI/2);//cassa a destra
loadObjMtl3('cassa',0.008,0.013,0.01,0.6,6.23,0.2,"camera3/cassa",Math.PI/2);//cassa a sinistra
loadObjMtl3('print',0.006,0.007,0.006,0.5,7.65,0.1,"camera3/print",Math.PI/2);//stampante
loadObjMtl3('condizionatore',0.013,0.0085,0.007,0.5,7.3,2.4,"camera3/condizionatore",Math.PI/2);//condizionatore
loadObjMtl3('extconditioning',0.013,0.012,0.012,-0.25,7.3,2.2,"camera3/extconditioning",3*Math.PI/2);//condizionatore esterno
loadObjMtl3('water_cooler',0.01,0.01,0.009,2.5,8.4,0.5,"camera3/water_cooler",0);//raffredda acqua
loadObjMtl3('sedia',0.007,0.0085,0.007,0.5,9.9,1.3,"camera3/sedia",Math.PI/4);//sedia
loadObjMtl3('pendantLamp',0.0007,0.00085,0.0007,1.7,7.2,2.3,"camera3/lampadario",0);//lampadario



var hookInt5 = new THREE.Object3D();
loadObjMtl3InterruttoreAnimation5('lightSwitch',0.0001,0.00008,0.00012,2.97,7.7,1.2,"camera3/lightSwitch",3*Math.PI/2, hookInt5);//interruttore camera 3

var hookInt4 = new THREE.Object3D();
loadObjMtl3InterruttoreAnimation4('lightSwitch',0.0001,0.00008,0.00012,5.43,6.2,1.2,"camera3/lightSwitch",Math.PI/2,hookInt4);//interruttore camera 2

var hookInt3 = new THREE.Object3D();
loadObjMtl3InterruttoreAnimation3('lightSwitch',0.0001,0.00008,0.00012,8.2,5.75,1.2,"camera3/lightSwitch",0,hookInt3);//interruttore camera hall

var hookInt2 = new THREE.Object3D();
loadObjMtl3InterruttoreAnimation2('lightSwitch',0.0001,0.00008,0.00012,8.4,2.77,1.2,"camera3/lightSwitch",0,hookInt2);//interruttore camera1

var hookInt1 = new THREE.Object3D();
loadObjMtl3InterruttoreAnimation1('lightSwitch',0.0001,0.00008,0.00012,8.64,6.02,1.2,"camera3/lightSwitch",Math.PI,hookInt1);//interruttore hall


var hookInt = new THREE.Object3D();
loadObjMtl3InterruttoreAnimation('lightSwitch',0.0001,0.00008,0.00014,3.23,6.05,1.2,"camera3/lightSwitch",Math.PI/2,hookInt);//interruttore corridoio tra le due stanze








//loadObjMtlTest('Home',0.1,0.1,0.1,0,0,5,"/roof",0,60);

//loadObjMtl3('lavastoviglie',0.008,0.012,0.009,1.515,2.8,0.3,"kitchen/lavastoviglie",Math.PI/2);





//loadObjMtl3('LowPolyGrass',1000,1000,1000,-10,-10,-10,"garden/grass",Math.PI/2);

