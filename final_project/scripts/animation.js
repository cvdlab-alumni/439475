function Sound(name) {
        this.name = name;
        this.audio = document.createElement('audio');
        var source = document.createElement('source');
        source.src = 'assets/media/sounds/' + name + '.mp3';
        this.audio.appendChild(source);

}        
    Sound.prototype.play = function() {
        this.audio.play();
}
    


//apre e chiude la porta di ingresso
function loadObjMtl3DoorAnimationEntrata ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hook) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        //console.log(object);       
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        hook.add(part1);
        //hook.add(new THREE.AxisHelper(10)); utilizzato per debuggare 
        part1.scale.set(sx, sy-0.01, sz);
        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        // part1.position.set(posx,posy,posz);
        hook.position.set(posx,posy,0);
        part1.position.set(posx-11,posy-5,1.263);

        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        
        dwelling.add(part0);
        dwelling.add(hook);
        animateDoorEntrata(hook);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   

}
function animateDoorEntrata(hook) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 hook.children[0].children[1].interact = function() {
     if (open) {
        var openhookTween1 = new TWEEN.Tween(hook.rotation)
        .to({z: -Math.PI/2}, 2000).delay(10).start();
        sound=new Sound('opendoor');
        sound.audio.play();

         // hook_close_sound.play();
         open = false;
     } else {
          var closehookTween = new TWEEN.Tween(hook.rotation)
          .to({x:0,y:0,z: 0}, 1600).delay(10).start();
          sound=new Sound('closedoor');
          sound.audio.play();
         

         //hook_open_sound.play();
         open = true;
     }
 }

// intersects.push(hook);
}

//animazione prima porta interna
function loadObjMtl3DoorAnimation1 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hook1) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        //console.log(object);       
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        //hook1.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hook1.add(part2);
        part2.scale.set(sx, sy, sz);
        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hook1.position.set(posx+0.36,posy-0.59,0.3);
        part2.position.set(posx-9.49,posy-5.82,-0.3);      

        //console.log(hook1);

        dwelling.add(part0);
        dwelling.add(part1);
        dwelling.add(hook1);
        animateDoor1(hook1);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateDoor1(hook1) {
 var open = true;
 hook1.children[0].children[1].interact = function() {
     if (open) {
        var openhookTween1 = new TWEEN.Tween(hook1.rotation)
        .to({z: -Math.PI/2}, 2000).delay(10).start();
        sound=new Sound('opendoor');
        sound.audio.play();
        open = false;
     } else {
          var closehookTween = new TWEEN.Tween(hook1.rotation)
          .to({x:0,y:0,z: 0}, 1600).delay(10).start();
          sound=new Sound('closedoor');
          sound.audio.play();
         open = true;
     }
 }

// intersects.push(hook1);
}

//animazione seconda porta interna
function loadObjMtl3DoorAnimation2 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hook2) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        //console.log(object);       
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        //hook2.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hook2.add(part2);
        part2.scale.set(sx, sy, sz);
        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hook2.position.set(posx+0.36,posy-0.59,0.3);
        part2.position.set(posx-0.36-7.7,posy+0.59-3.55,-0.3);
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        
        dwelling.add(part0);
        dwelling.add(part1);
        dwelling.add(hook2);
        animateDoor2(hook2);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateDoor2(hook2) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 hook2.children[0].children[1].interact = function() {
     if (open) {
        var openhookTween1 = new TWEEN.Tween(hook2.rotation)
        .to({z: -Math.PI/2}, 1000).delay(20).start();        
        sound=new Sound('opendoor');
        sound.audio.play();
         open = false;
     } else {
          var closehookTween = new TWEEN.Tween(hook2.rotation)
          .to({x:0,y:0,z: 0}, 1000).delay(20).start();
          sound=new Sound('closedoor');
          sound.audio.play();
          open = true;
     }
 }
}

//animazione seconda porta interna
function loadObjMtl3DoorAnimation3 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hook3) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        //console.log(object);    

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        //hook3.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hook3.add(part2);
        
        
        part2.scale.set(sx, sy, sz);
        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hook3.position.set(posx-0.57,posy-0.405,0.3);
        //5.825,6.86
        part2.position.set(+0.57,+0.405,-0.3);
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        dwelling.add(part0);
        dwelling.add(part1);
        dwelling.add(hook3);
        animateDoor3(hook3);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateDoor3(hook3) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 hook3.children[0].children[1].interact = function() {
     if (open) {
        var openhookTween1 = new TWEEN.Tween(hook3.rotation)
        .to({z: -Math.PI/2}, 1000).delay(20).start();
        sound=new Sound('opendoor');
        sound.audio.play();
        


         // hook_close_sound.play();
         open = false;
     } else {
          var closehookTween = new TWEEN.Tween(hook3.rotation)
          .to({x:0,y:0,z: 0}, 1000).delay(20).start();
          sound=new Sound('closedoor');
          sound.audio.play();

         //hook_open_sound.play();
         open = true;
     }
 }

 //intersect.push(hook);
}

function loadObjMtl3DoorAnimation4 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hook4) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        //console.log(object);       
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        //hook4.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hook4.add(part2);
        part2.scale.set(sx, sy, sz);
        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hook4.position.set(posx-0.57,posy-0.405,0.3);
        //5.825,6.86
        part2.position.set(+0.57,+0.405,-0.3);
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        
        dwelling.add(part0);
        dwelling.add(part1);
        dwelling.add(hook4);
        animateDoor3(hook4);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateDoor4(hook4) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 hook4.children[0].children[1].interact = function() {
     if (open) {
        var openhookTween1 = new TWEEN.Tween(hook4.rotation)
        .to({z: -Math.PI/2}, 1000).delay(20).start();
        sound=new Sound('opendoor');
        sound.audio.play();

         // hook_close_sound.play();
         open = false;
     } else {
          var closehookTween = new TWEEN.Tween(hook4.rotation)
          .to({x:0,y:0,z: 0}, 1000).delay(20).start();
          sound=new Sound('closedoor');
          sound.audio.play();
         

         //hook_open_sound.play();
         open = true;
     }
 }

 //intersect.push(hook);
}

//fine animazione porte

//animazioni finestre
//finestra camera3
function loadObjMtl3FinAnimation1 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookFin1) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        var part3 = object.children[3];
        var part4 = object.children[4];
        var part5 = object.children[5];
        var part6 = object.children[6];
        var part7 = object.children[7];
        var part8 = object.children[8];
        //console.log(object);   

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        part2.scale.set(sx, sy, sz);
        part2.position.set(posx,posy,posz);

        part3.rotation.x = Math.PI/2;
        part3.rotation.y = rotz;
        part3.scale.set(sx, sy, sz);
        part3.position.set(posx,posy,posz);

        part4.rotation.x = Math.PI/2;
        part4.rotation.y = rotz;
        part4.scale.set(sx, sy, sz);
        part4.position.set(posx,posy,posz);

        part5.rotation.x = Math.PI/2;
        part5.rotation.y = rotz;
        part5.scale.set(sx, sy, sz);
        part5.position.set(posx,posy,posz);

        part6.rotation.x = Math.PI/2;
        part6.rotation.y = rotz;
        part6.scale.set(sx, sy, sz);
        part6.position.set(posx,posy,posz);

        part7.rotation.x = Math.PI/2;
        part7.rotation.y = rotz;
        part7.scale.set(sx, sy, sz);
        part7.position.set(posx,posy,posz);

        part8.rotation.x = Math.PI/2;
        part8.rotation.y = rotz;
        part8.scale.set(sx, sy, sz);
        part8.position.set(posx,posy,posz);

        //hookFin1.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookFin1.add(part0);
        hookFin1.add(part5);
        hookFin1.add(part4);
        hookFin1.add(part3);
        hookFin1.add(part2);
        hookFin1.add(part1);
        
        
        
        hookFin1.add(part6);
        hookFin1.add(part7);
        hookFin1.add(part8);
        
        part0.scale.set(sx, sy, sz);
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hookFin1.position.set(posx-0.539,posy-0.05,posz-0.67);

        part0.position.set(+0.539,+0.05,+0.67);
        part1.position.set(+0.539,+0.05,+0.67);
        part2.position.set(+0.539,+0.05,+0.67);
        part3.position.set(+0.539,+0.05,+0.67);
        part4.position.set(+0.539,+0.05,+0.67);
        part5.position.set(+0.539,+0.05,+0.67);
        part6.position.set(+0.539,+0.05,+0.67);
        part7.position.set(+0.539,+0.05,+0.67);
        part8.position.set(+0.539,+0.05,+0.67);
        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        

        dwelling.add(hookFin1);
        animateFin1(hookFin1);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateFin1(hookFin1) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 
  hookFin1.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookFin1.rotation)
          .to({z: -Math.PI/2}, 1000).delay(20).start();
          sound=new Sound('wind');
          sound.play();


          // hook_close_sound.play();
          open = false;
      } else {
            var closehookTween = new TWEEN.Tween(hookFin1.rotation)
            .to({x:0,y:0,z: 0}, 1000).delay(20).start();
            sound=new Sound('wind2');
            sound.play();            

             

          //hook_open_sound.play();
          open = true;
      }
  }


 //intersect.push(hook);
}


//animazioni finestre
//finestra corridoio
function loadObjMtl3FinAnimation2 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookFin2) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        var part3 = object.children[3];
        var part4 = object.children[4];
        var part5 = object.children[5];
        var part6 = object.children[6];
        var part7 = object.children[7];
        var part8 = object.children[8];
        //console.log(object);   

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        part2.scale.set(sx, sy, sz);
        part2.position.set(posx,posy,posz);

        part3.rotation.x = Math.PI/2;
        part3.rotation.y = rotz;
        part3.scale.set(sx, sy, sz);
        part3.position.set(posx,posy,posz);

        part4.rotation.x = Math.PI/2;
        part4.rotation.y = rotz;
        part4.scale.set(sx, sy, sz);
        part4.position.set(posx,posy,posz);

        part5.rotation.x = Math.PI/2;
        part5.rotation.y = rotz;
        part5.scale.set(sx, sy, sz);
        part5.position.set(posx,posy,posz);

        part6.rotation.x = Math.PI/2;
        part6.rotation.y = rotz;
        part6.scale.set(sx, sy, sz);
        part6.position.set(posx,posy,posz);

        part7.rotation.x = Math.PI/2;
        part7.rotation.y = rotz;
        part7.scale.set(sx, sy, sz);
        part7.position.set(posx,posy,posz);

        part8.rotation.x = Math.PI/2;
        part8.rotation.y = rotz;
        part8.scale.set(sx, sy, sz);
        part8.position.set(posx,posy,posz);

        //hookFin2.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookFin2.add(part0);
        hookFin2.add(part5);
        hookFin2.add(part4);
        hookFin2.add(part3);
        hookFin2.add(part2);
        hookFin2.add(part1);
        
        
        
        hookFin2.add(part6);
        hookFin2.add(part7);
        hookFin2.add(part8);
        
        part0.scale.set(sx, sy, sz);
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hookFin2.position.set(posx-0.28,posy-0.05,posz-0.54);

        part0.position.set(+0.28,+0.05,+0.54);
        part1.position.set(+0.28,+0.05,+0.54);
        part2.position.set(+0.28,+0.05,+0.54);
        part3.position.set(+0.28,+0.05,+0.54);
        part4.position.set(+0.28,+0.05,+0.54);
        part5.position.set(+0.28,+0.05,+0.54);
        part6.position.set(+0.28,+0.05,+0.54);
        part7.position.set(+0.28,+0.05,+0.54);
        part8.position.set(+0.28,+0.05,+0.54);
        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        

        dwelling.add(hookFin2);
        animateFin2(hookFin2);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateFin2(hookFin2) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 
  hookFin2.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookFin2.rotation)
          .to({z: -Math.PI/2}, 1000).delay(20).start();
          sound=new Sound('wind');
          sound.play();


          // hook_close_sound.play();
          open = false;
      } else {
            var closehookTween = new TWEEN.Tween(hookFin2.rotation)
            .to({x:0,y:0,z: 0}, 1000).delay(20).start();
            sound=new Sound('wind2');
            sound.play();         

          //hook_open_sound.play();
          open = true;
      }
  }
 //intersect.push(hook);
}



//animazioni finestre
//finestra camera2
function loadObjMtl3FinAnimation3 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookFin3) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        var part3 = object.children[3];
        var part4 = object.children[4];
        var part5 = object.children[5];
        var part6 = object.children[6];
        var part7 = object.children[7];
        var part8 = object.children[8];
        //console.log(object);   

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        part2.scale.set(sx, sy, sz);
        part2.position.set(posx,posy,posz);

        part3.rotation.x = Math.PI/2;
        part3.rotation.y = rotz;
        part3.scale.set(sx, sy, sz);
        part3.position.set(posx,posy,posz);

        part4.rotation.x = Math.PI/2;
        part4.rotation.y = rotz;
        part4.scale.set(sx, sy, sz);
        part4.position.set(posx,posy,posz);

        part5.rotation.x = Math.PI/2;
        part5.rotation.y = rotz;
        part5.scale.set(sx, sy, sz);
        part5.position.set(posx,posy,posz);

        part6.rotation.x = Math.PI/2;
        part6.rotation.y = rotz;
        part6.scale.set(sx, sy, sz);
        part6.position.set(posx,posy,posz);

        part7.rotation.x = Math.PI/2;
        part7.rotation.y = rotz;
        part7.scale.set(sx, sy, sz);
        part7.position.set(posx,posy,posz);

        part8.rotation.x = Math.PI/2;
        part8.rotation.y = rotz;
        part8.scale.set(sx, sy, sz);
        part8.position.set(posx,posy,posz);

        //hookFin3.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookFin3.add(part0);
        hookFin3.add(part5);
        hookFin3.add(part4);
        hookFin3.add(part3);
        hookFin3.add(part2);
        hookFin3.add(part1);
        
        
        
        hookFin3.add(part6);
        hookFin3.add(part7);
        hookFin3.add(part8);
        
        part0.scale.set(sx, sy, sz);
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hookFin3.position.set(posx-0.347,posy-0.05,posz-0.67);

        part0.position.set(0.347,0.05,0.67);
        part1.position.set(0.347,0.05,0.67);
        part2.position.set(0.347,0.05,0.67);
        part3.position.set(0.347,0.05,0.67);
        part4.position.set(0.347,0.05,0.67);
        part5.position.set(0.347,0.05,0.67);
        part6.position.set(0.347,0.05,0.67);
        part7.position.set(0.347,0.05,0.67);
        part8.position.set(0.347,0.05,0.67);
        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        

        dwelling.add(hookFin3);
        animateFin3(hookFin3);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateFin3(hookFin3) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 
  hookFin3.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookFin3.rotation)
          .to({z: -Math.PI/2}, 1000).delay(20).start();
          sound=new Sound('wind');
          sound.play();


          // hook_close_sound.play();
          open = false;
      } else {
            var closehookTween = new TWEEN.Tween(hookFin3.rotation)
            .to({x:0,y:0,z: 0}, 1000).delay(20).start();
            sound=new Sound('wind2');
            sound.play();         

          //hook_open_sound.play();
          open = true;
      }
  }
 //intersect.push(hook);
}


//animazioni finestre
//finestra bagno
function loadObjMtl3FinAnimation4 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookFin4) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        var part3 = object.children[3];
        var part4 = object.children[4];
        var part5 = object.children[5];
        var part6 = object.children[6];
        var part7 = object.children[7];
        var part8 = object.children[8];
        //console.log(object);   

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        part2.scale.set(sx, sy, sz);
        part2.position.set(posx,posy,posz);

        part3.rotation.x = Math.PI/2;
        part3.rotation.y = rotz;
        part3.scale.set(sx, sy, sz);
        part3.position.set(posx,posy,posz);

        part4.rotation.x = Math.PI/2;
        part4.rotation.y = rotz;
        part4.scale.set(sx, sy, sz);
        part4.position.set(posx,posy,posz);

        part5.rotation.x = Math.PI/2;
        part5.rotation.y = rotz;
        part5.scale.set(sx, sy, sz);
        part5.position.set(posx,posy,posz);

        part6.rotation.x = Math.PI/2;
        part6.rotation.y = rotz;
        part6.scale.set(sx, sy, sz);
        part6.position.set(posx,posy,posz);

        part7.rotation.x = Math.PI/2;
        part7.rotation.y = rotz;
        part7.scale.set(sx, sy, sz);
        part7.position.set(posx,posy,posz);

        part8.rotation.x = Math.PI/2;
        part8.rotation.y = rotz;
        part8.scale.set(sx, sy, sz);
        part8.position.set(posx,posy,posz);

        //hookFin4.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookFin4.add(part0);
        hookFin4.add(part5);
        hookFin4.add(part4);
        hookFin4.add(part3);
        hookFin4.add(part2);
        hookFin4.add(part1);
        
        
        
        hookFin4.add(part6);
        hookFin4.add(part7);
        hookFin4.add(part8);
        
        part0.scale.set(sx, sy, sz);
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hookFin4.position.set(posx-0.402,posy-0.05,posz-0.67);

        part0.position.set(0.402,0.05,0.67);
        part1.position.set(0.402,0.05,0.67);
        part2.position.set(0.402,0.05,0.67);
        part3.position.set(0.402,0.05,0.67);
        part4.position.set(0.402,0.05,0.67);
        part5.position.set(0.402,0.05,0.67);
        part6.position.set(0.402,0.05,0.67);
        part7.position.set(0.402,0.05,0.67);
        part8.position.set(0.402,0.05,0.67);
        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        

        dwelling.add(hookFin4);
        animateFin4(hookFin4);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateFin4(hookFin4) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 
  hookFin4.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookFin4.rotation)
          .to({z: -Math.PI/2}, 1000).delay(20).start();
          sound=new Sound('wind');
          sound.play();


          open = false;
      } else {
            var closehookTween = new TWEEN.Tween(hookFin4.rotation)
            .to({x:0,y:0,z: 0}, 1000).delay(20).start();
            sound=new Sound('wind2');
            sound.play();         

          //hook_open_sound.play();
          open = true;
      }
  }
 //intersect.push(hook);
}

//animazioni finestre
//finestra1 salone anim
function loadObjMtl3FinAnimation5 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookFin5) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        var part3 = object.children[3];
        var part4 = object.children[4];
        var part5 = object.children[5];
        var part6 = object.children[6];
        var part7 = object.children[7];
        var part8 = object.children[8];
        //console.log(object);   

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        part2.scale.set(sx, sy, sz);
        part2.position.set(posx,posy,posz);

        part3.rotation.x = Math.PI/2;
        part3.rotation.y = rotz;
        part3.scale.set(sx, sy, sz);
        part3.position.set(posx,posy,posz);

        part4.rotation.x = Math.PI/2;
        part4.rotation.y = rotz;
        part4.scale.set(sx, sy, sz);
        part4.position.set(posx,posy,posz);

        part5.rotation.x = Math.PI/2;
        part5.rotation.y = rotz;
        part5.scale.set(sx, sy, sz);
        part5.position.set(posx,posy,posz);

        part6.rotation.x = Math.PI/2;
        part6.rotation.y = rotz;
        part6.scale.set(sx, sy, sz);
        part6.position.set(posx,posy,posz);

        part7.rotation.x = Math.PI/2;
        part7.rotation.y = rotz;
        part7.scale.set(sx, sy, sz);
        part7.position.set(posx,posy,posz);

        part8.rotation.x = Math.PI/2;
        part8.rotation.y = rotz;
        part8.scale.set(sx, sy, sz);
        part8.position.set(posx,posy,posz);

        //hookFin5.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookFin5.add(part0);
        hookFin5.add(part5);
        hookFin5.add(part4);
        hookFin5.add(part3);
        hookFin5.add(part2);
        hookFin5.add(part1);
        
        
        
        hookFin5.add(part6);
        hookFin5.add(part7);
        hookFin5.add(part8);
        
        part0.scale.set(sx, sy, sz);
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hookFin5.position.set(posx-0.402,posy-0.05,posz-0.67);

        part0.position.set(0.402,0.05,0.67);
        part1.position.set(0.402,0.05,0.67);
        part2.position.set(0.402,0.05,0.67);
        part3.position.set(0.402,0.05,0.67);
        part4.position.set(0.402,0.05,0.67);
        part5.position.set(0.402,0.05,0.67);
        part6.position.set(0.402,0.05,0.67);
        part7.position.set(0.402,0.05,0.67);
        part8.position.set(0.402,0.05,0.67);
        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        

        dwelling.add(hookFin5);
        animateFin5(hookFin5);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateFin5(hookFin5) {
 var open = false;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 
  hookFin5.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookFin5.position)
          .to({x: 3.91}, 1500).delay(20).start();
          sound=new Sound('wind');
          sound.play();


          // hook_close_sound.play();
          open = false;
      } else {
            var closehookTween = new TWEEN.Tween(hookFin5.position)
            .to({x: 5.3}, 1500).delay(20).start();
            sound=new Sound('wind2');
            sound.play();

          //hook_open_sound.play();
          open = true;
      }
  }
 //intersect.push(hook);
}

//animazioni finestre
//finestra1 salone anim
function loadObjMtl3FinAnimation6 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookFin6) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        var part3 = object.children[3];
        var part4 = object.children[4];
        var part5 = object.children[5];
        var part6 = object.children[6];
        var part7 = object.children[7];
        var part8 = object.children[8];
        //console.log(object);   

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        part2.scale.set(sx, sy, sz);
        part2.position.set(posx,posy,posz);

        part3.rotation.x = Math.PI/2;
        part3.rotation.y = rotz;
        part3.scale.set(sx, sy, sz);
        part3.position.set(posx,posy,posz);

        part4.rotation.x = Math.PI/2;
        part4.rotation.y = rotz;
        part4.scale.set(sx, sy, sz);
        part4.position.set(posx,posy,posz);

        part5.rotation.x = Math.PI/2;
        part5.rotation.y = rotz;
        part5.scale.set(sx, sy, sz);
        part5.position.set(posx,posy,posz);

        part6.rotation.x = Math.PI/2;
        part6.rotation.y = rotz;
        part6.scale.set(sx, sy, sz);
        part6.position.set(posx,posy,posz);

        part7.rotation.x = Math.PI/2;
        part7.rotation.y = rotz;
        part7.scale.set(sx, sy, sz);
        part7.position.set(posx,posy,posz);

        part8.rotation.x = Math.PI/2;
        part8.rotation.y = rotz;
        part8.scale.set(sx, sy, sz);
        part8.position.set(posx,posy,posz);

        //hookFin6.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookFin6.add(part0);
        hookFin6.add(part5);
        hookFin6.add(part4);
        hookFin6.add(part3);
        hookFin6.add(part2);
        hookFin6.add(part1);
        
        
        
        hookFin6.add(part6);
        hookFin6.add(part7);
        hookFin6.add(part8);
        
        part0.scale.set(sx, sy, sz);
        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        


        // part1.position.set(posx,posy,posz);
        hookFin6.position.set(posx-0.402,posy-0.05,posz-0.67);

        part0.position.set(0.402,0.05,0.67);
        part1.position.set(0.402,0.05,0.67);
        part2.position.set(0.402,0.05,0.67);
        part3.position.set(0.402,0.05,0.67);
        part4.position.set(0.402,0.05,0.67);
        part5.position.set(0.402,0.05,0.67);
        part6.position.set(0.402,0.05,0.67);
        part7.position.set(0.402,0.05,0.67);
        part8.position.set(0.402,0.05,0.67);
        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        

        dwelling.add(hookFin6);
        animateFin6(hookFin6);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateFin6(hookFin6) {
 var open = false;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 
  hookFin6.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookFin6.position)
          .to({y: 1.7}, 1500).delay(20).start();
          sound=new Sound('wind');
          sound.play();


          // hook_close_sound.play();
          open = false;
      } else {
            var closehookTween = new TWEEN.Tween(hookFin6.position)
            .to({y: 2.9}, 1500).delay(20).start();
            sound=new Sound('wind2');
            sound.play();

          //hook_open_sound.play();
          open = true;
      }
  }
 //intersect.push(hook);
}

//animazioni finestre
//finestra1 salone anim
function loadObjMtl3FinAnimation7 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookFin7) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        var part3 = object.children[3];
        var part4 = object.children[4];
        var part5 = object.children[5];
        var part6 = object.children[6];
        var part7 = object.children[7];
        var part8 = object.children[8];
        //console.log(object);   

        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);

        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;
        part2.scale.set(sx, sy, sz);
        part2.position.set(posx,posy,posz);

        part3.rotation.x = Math.PI/2;
        part3.rotation.y = rotz;
        part3.scale.set(sx, sy, sz);
        part3.position.set(posx,posy,posz);

        part4.rotation.x = Math.PI/2;
        part4.rotation.y = rotz;
        part4.scale.set(sx, sy, sz);
        part4.position.set(posx,posy,posz);

        part5.rotation.x = Math.PI/2;
        part5.rotation.y = rotz;
        part5.scale.set(sx, sy, sz);
        part5.position.set(posx,posy,posz);

        part6.rotation.x = Math.PI/2;
        part6.rotation.y = rotz;
        part6.scale.set(sx, sy, sz);
        part6.position.set(posx,posy,posz);

        part7.rotation.x = Math.PI/2;
        part7.rotation.y = rotz;
        part7.scale.set(sx, sy, sz);
        part7.position.set(posx,posy,posz);

        part8.rotation.x = Math.PI/2;
        part8.rotation.y = rotz;
        part8.scale.set(sx, sy, sz);
        part8.position.set(posx,posy,posz);

        //hookFin7.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookFin7.add(part0);
        hookFin7.add(part1);
        hookFin7.add(part2);
        hookFin7.add(part3);
        hookFin7.add(part4);
        hookFin7.add(part5);
        hookFin7.add(part6);
        hookFin7.add(part7);
        hookFin7.add(part8);
        


        // part1.position.set(posx,posy,posz);
        hookFin7.position.set(posx-0.402,posy-0.05,posz-0.67);

        part0.position.set(0.402,0.05,0.67);
        part1.position.set(0.402,0.05,0.67);
        part2.position.set(0.402,0.05,0.67);
        part3.position.set(0.402,0.05,0.67);
        part4.position.set(0.402,0.05,0.67);
        part5.position.set(0.402,0.05,0.67);
        part6.position.set(0.402,0.05,0.67);
        part7.position.set(0.402,0.05,0.67);
        part8.position.set(0.402,0.05,0.67);
        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        dwelling.add(hookFin7);
        animateFin7(hookFin7);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateFin7(hookFin7) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 
  hookFin7.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookFin7.rotation)
          .to({x: -Math.PI/8}, 1000).delay(20).start();
          sound=new Sound('wind');
          sound.play();


          // hook_close_sound.play();
          open = false;
      } else {
            var closehookTween = new TWEEN.Tween(hookFin7.rotation)
            .to({x:0, y:0, z:0}, 1000).delay(20).start();
            sound=new Sound('wind2');
            sound.play();

         

          //hook_open_sound.play();
          open = true;
      }
  }
 //intersect.push(hook);
}



//animazione lampadario a ventole
function loadObjMtl3VentilatoreAnimation ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookVent) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        var part2 = object.children[2];
        var part3 = object.children[3];
        //console.log(object);    

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        //part1.position.set(posx,posy,posz);

        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        //part0.position.set(posx,posy,posz);


        part2.rotation.x = Math.PI/2;
        part2.rotation.y = rotz;       
        part2.scale.set(sx, sy, sz);
        //part2.position.set(posx,posy,posz);

        part3.rotation.x = Math.PI/2;
        part3.rotation.y = rotz;       
        part3.scale.set(0.01, 0.01, 0.01);
        //part3.position.set(posx,posy,posz);

        
        hookVent.add(part0);
        hookVent.add(part1);
        hookVent.add(part2);
        hookVent.add(part3);

        // part1.position.set(posx,posy,posz);
        hookVent.position.set(posx -0.68 ,posy-0.7  ,posz);
        part0.position.set(+0.68,0.7,0);
        part1.position.set(+0.68,0.7,0);
        part2.position.set(+0.68,0.7,0);
        part3.position.set(+0.52,0.535,0.07);
        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        //hook.position.set(posx,posy,posz);
        dwelling.add(hookVent);
        animateVentilatore(hookVent);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateVentilatore(hookVent) {
 var open = true;
 
 // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
 // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
 //console.log(hook);
 hookVent.children[0].interact = function() {
     if (open) {
        var openhookTween1 = new TWEEN.Tween(hookVent.rotation)
        .to({z: 2500*Math.PI}, 10000).delay(20).start();

         // hook_close_sound.play();
         open = false;
     } else {
          var closehookTween = new TWEEN.Tween(hookVent.rotation)
          .to({z: 0}, 100000).delay(20).start();
         

         //hook_open_sound.play();
         open = true;
     }
 }
}


//animazione seconda porta interna
// function loadObjMtl3GabinAnimation ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookGab) {
//     var loader = new THREE.OBJMTLLoader();
//     loader.addEventListener('load', function (event) {

//         var object = event.content;
//         var part0 = object.children[0];
//         var part1 = object.children[1];
//         var part2 = object.children[2];
//         var part3 = object.children[3];
//         //console.log(object);    

//         part0.rotation.x = Math.PI/2;
//         part0.rotation.y = rotz;
//         part0.scale.set(posx,posy,posz);
//         //part0.position.set(posx,posy,posz);


//         part1.rotation.x = Math.PI/2;
//         part1.rotation.y = rotz;
//         part1.scale.set(sx, sy, sz);
//         part1.position.set(posx,posy,posz);

//         part2.rotation.x = Math.PI/2;
//         part2.rotation.y = rotz;       
//         part2.scale.set(sx, sy, sz);
//         part2.position.set(posx,posy,posz);

//         part3.rotation.x = Math.PI/2;
//         part3.rotation.y = rotz;       
//         part3.scale.set(sx, sy, sz);
//         //part3.position.set(posx,posy,posz);

//         hookGab.add(new THREE.AxisHelper(1))
//         // hookGab.add(part0);
//         // hookGab.add(part1);
//         // hookGab.add(part2);
//         hookGab.add(part3);

//         // part1.position.set(posx,posy,posz);
//         hookGab.position.set(posx-0.025  ,posy-0.1 ,posz+0.55);
//         // part0.position.set(0.22,0.2,-0.55);
//         // part1.position.set(0.22,0.2,-0.55);
//         // part2.position.set(0.22,0.2,-0.55);
//         part3.position.set(0.26,0.2,-0.55);
//         //5.825,6.86
//         //console.log(object);
//         //dwelling.add(object.children[0]);
//         // dwelling.add(object);
//         // }  

//         //hook.position.set(posx,posy,posz);
//         dwelling.add(part0);
//         dwelling.add(part1);
//         dwelling.add(part2);
//         dwelling.add(hookGab);
//         animateGabinetto(hookGab);     
//     });
    
//    loader.load(
//     'assets/models/'+dir+'/'+name+'.obj', 
//     'assets/models/'+dir+'/'+name+'.mtl', 
//     {side: THREE.DoubleSide}
//     );
   
// }

// function animateGabinetto(hookGab) {
//  var open = false;
 
//  // var hook_open_sound = new Sound(['hook_open.mp3'], 0, 0.3, false);
//  // var hook_close_sound = new Sound(['hook_close.mp3'], 0, 0.3, false);
//  //console.log(hook);
//  hookGab.children[0].interact = function() {
//      if (open) {
//         var openhookTween1 = new TWEEN.Tween(hookGab.rotation)
//         .to({y: Math.PI/2}, 1000).delay(100).start();

//          // hook_close_sound.play();
//          open = false;
//      } else {
//           var closehookTween = new TWEEN.Tween(hookGab.rotation)
//           .to({y: 0}, 1000).delay(100).start();
         

//          //hook_open_sound.play();
//          open = true;
//      }
//  }

//  //intersect.push(hook);
// }



// function loadObjMtl3TVAnimation(name, sx, sy, sz, posx, posy, posz, dir, rotz, hookTV){
//     var loader = new THREE.OBJMTLLoader();
//     loader.addEventListener('load', function (event) {

//         var object = event.content;
//         var part0 = object.children[0];
//         //console.log(object);

//         part0.rotation.x = Math.PI/2;
//         part0.rotation.y = rotz;
//         part0.scale.set(sx, sy, sz);
//         //part0.position.set(posx,posy,posz);

//         console.log("parte1");
//         var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true } );
//         var movieGeometry = new THREE.PlaneGeometry( 0.4, 0.2, 0.1, 4 );
//         var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
//         movieScreen.position.set(0.64,0.34);
//         movieScreen.rotation.x=Math.PI/2;
//         movieScreen.rotation.y=Math.PI;
//         movieScreen.position.set(8.5,4.915,1.885);

//         console.log("parte2");
//         var movieBlackGeom = new THREE.PlaneGeometry( 0.4, 0.2, 0.1, 4 );
//         var movieBlackMat = new THREE.MeshLambertMaterial({color: 0x000000});
//         var movieBlack = new THREE.Mesh(movieBlackGeom, movieBlackMat);
//         movieBlack.position.set(0.64,0.34);
//         movieBlack.rotation.x=Math.PI/2;
//         movieBlack.rotation.y=Math.PI;

//         movieScreen.visible=false;
//         console.log("parte3");

//         video.load();        
//         hookTV.add(part0); 
//         hookTV.add(movieBlack);
//         hookTV.add(movieScreen);    



//         // part1.position.set(posx,posy,posz);
//         hookTV.position.set(posx,posy,posz);
//         //5.825,6.86
//         //console.log(object);
//         //dwelling.add(object.children[0]);
//         // dwelling.add(object);
//         // }  

//         //hook.position.set(posx,posy,posz);
//         dwelling.add(hookTV);
//         console.log("parte4");
//         animateTV(hookTV);
//         console.log("parte5");     
//     });
    
//    loader.load(
//     'assets/models/'+dir+'/'+name+'.obj', 
//     'assets/models/'+dir+'/'+name+'.mtl', 
//     {side: THREE.DoubleSide}
//     );
// }

// function animateTV(hookTV) { 
//   open=false;
//   hookTV.children[0].interact = function() {
//         // glass_tel.position.set(0.68,0.7,0);
//         if(open){
//            console.log("parte6");
//            video.src = "assets/video/Kings.mp4";           
//            movieBlack.visible=false;
//            movieScreen.visible= true;
//            video.play = false;
//            video.play();
//            console.log("parte7");
//            }
//         else{
//            movieBlack.visible=true;
//            movieScreen.visible= false;
//            video.play = true;
//            video.pause();
//            }
//   }
// }


//animazioni interrutore salone
function loadObjMtl3InterruttoreAnimation ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookInt) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        //console.log(object);   

        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);


        //hookInt.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookInt.add(part0);
        hookInt.add(part1);        


        // part1.position.set(posx,posy,posz);
        hookInt.position.set(posx,posy+0.02,posz+0.01);
        part0.position.set(0,-0.02,-0.01);
        part1.position.set(-0.013,-0.02,-0.01);

        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        dwelling.add(hookInt);
        animateInterruttore(hookInt);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateInterruttore(hookInt) {
  var open = true;


  hookInt.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookInt.children[1].position)
          .to({z: 0.02}, 300).delay(20).start();
          open = false;
       if(!bool_room_light){
          sound=new Sound('SwitchOn');
          sound.audio.play();
          bool_room_light = true;
          // window.LIGHT = room_light;
          // console.log(room_light.intensity);
          // console.log(room_light);

          // scene.traverse(function (obj) {
          //   if (obj === room_light) {
          //       console.log('LIGHTTTTT');
          //   }
          // });
        }
    }

       else {
            var closehookTween = new TWEEN.Tween(hookInt.children[1].position)
            .to({z: -0.01}, 300).delay(20).start();
            sound=new Sound('SwitchOff');
            sound.audio.play();
            //hook_open_sound.play();
            open = true;
            bool_room_light = false;
      }
  }
}

//animazioni interrutore bagno
function loadObjMtl3InterruttoreAnimation1 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookInt1) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        //console.log(object);   

        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);


        //hookInt.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookInt1.add(part0);
        hookInt1.add(part1);     


        // part1.position.set(posx,posy,posz);
        hookInt1.position.set(posx,posy+0.02,posz+0.01);
        part0.position.set(0,-0.02,-0.01);
        part1.position.set(0,-0.029,-0.01);

        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        dwelling.add(hookInt1);
        animateInterruttore1(hookInt1);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateInterruttore1(hookInt1) {
  var open = true;
  var room_light1 = new THREE.PointLight( 0xffffff, 2.8, 2.2 );
  room_light1.position.set(9.83,7.19,1.5);
  dwelling.add( room_light1 );
  room_light1.intensity=0;

  hookInt1.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookInt1.children[1].position)
          .to({z: 0.02}, 300).delay(20).start();
          open = false;
       if(room_light1.intensity===0){
          room_light1.intensity=2.8;
          sound=new Sound('SwitchOn');
          sound.audio.play();
        }
    }

       else {
            var closehookTween = new TWEEN.Tween(hookInt1.children[1].position)
            .to({z: -0.01}, 300).delay(20).start();         
            room_light1.intensity=0;
            sound=new Sound('SwitchOff');
            sound.audio.play();
            //hook_open_sound.play();
            open = true;
      }
  }
}

//animazioni interrutore camera1
function loadObjMtl3InterruttoreAnimation2 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookInt2) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        //console.log(object);   

        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);


        //hookInt.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookInt2.add(part0);
        hookInt2.add(part1);     


        // part1.position.set(posx,posy,posz);
        hookInt2.position.set(posx,posy+0.02,posz+0.01);
        part0.position.set(0,-0.02,-0.01);
        part1.position.set(0,-0.016,-0.01);

        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        dwelling.add(hookInt2);
        animateInterruttore2(hookInt2);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateInterruttore2(hookInt2) {
  var open = true;
  var room_light2 = new THREE.PointLight( 0xffffff, 2.8, 2.2 );
  room_light2.position.set(8,1.9,1.5);
  dwelling.add( room_light2 );
  room_light2.intensity=0;

  hookInt2.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookInt2.children[1].position)
          .to({z: 0.02}, 300).delay(20).start();
          open = false;
       if(room_light2.intensity===0){
          room_light2.intensity=2.8;
          sound=new Sound('SwitchOn');
          sound.audio.play();
        }
    }

       else {
            var closehookTween = new TWEEN.Tween(hookInt2.children[1].position)
            .to({z: -0.01}, 300).delay(20).start();         
            room_light2.intensity=0;
            sound=new Sound('SwitchOff');
            sound.audio.play();
            //hook_open_sound.play();
            open = true;
      }
  }
}

//animazioni interrutore hall
function loadObjMtl3InterruttoreAnimation3 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookInt3) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        //console.log(object);   

        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);


        //hookInt.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookInt3.add(part0);
        hookInt3.add(part1);     


        // part1.position.set(posx,posy,posz);
        hookInt3.position.set(posx,posy+0.02,posz+0.01);
        part0.position.set(0,-0.02,-0.01);
        part1.position.set(0,-0.019,-0.01);

        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        dwelling.add(hookInt3);
        animateInterruttore3(hookInt3);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateInterruttore3(hookInt3) {
  var open = true;
  var room_lighth = new THREE.PointLight( 0xffffff, 2.8, 2.2 );
  room_lighth.position.set(8.83,3.5,1.5);
  dwelling.add( room_lighth );
  room_lighth.intensity=0;

  hookInt3.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookInt3.children[1].position)
          .to({z: 0.02}, 300).delay(20).start();
          open = false;
       if(room_lighth.intensity===0){
          room_lighth.intensity=2.8;
          sound=new Sound('SwitchOn');
          sound.audio.play();
        }
    }

       else {
            var closehookTween = new TWEEN.Tween(hookInt3.children[1].position)
            .to({z: -0.01}, 300).delay(20).start();         
            room_lighth.intensity=0;
            sound=new Sound('SwitchOff');
            sound.audio.play();
            //hook_open_sound.play();
            open = true;
      }
  }
}


//animazioni interrutore camera2
function loadObjMtl3InterruttoreAnimation4 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookInt4) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        //console.log(object);   

        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);


        //hookInt.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookInt4.add(part0);
        hookInt4.add(part1);        


        // part1.position.set(posx,posy,posz);
        hookInt4.position.set(posx,posy+0.02,posz+0.01);
        part0.position.set(0,-0.02,-0.01);
        part1.position.set(-0.013,-0.02,-0.01);

        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        dwelling.add(hookInt4);
        animateInterruttore4(hookInt4);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateInterruttore4(hookInt4) {
  var open = true;
  var room_light4 = new THREE.PointLight( 0xffffff, 2.8, 2.2 );
  room_light4.position.set(6.83,7.19,1.5);
  dwelling.add( room_light4 );
  room_light4.intensity=0;

  hookInt4.children[0].interact = function() {
       if (open) {
          var openhookTween1 = new TWEEN.Tween(hookInt4.children[1].position)
          .to({z: 0.02}, 300).delay(20).start();
          open = false;
       if(room_light4.intensity===0){
          room_light4.intensity=2.8;
          sound=new Sound('SwitchOn');
          sound.audio.play();
        }
    }

       else {
            var closehookTween = new TWEEN.Tween(hookInt4.children[1].position)
            .to({z: -0.01}, 300).delay(20).start();         
            room_light4.intensity=0;
            sound=new Sound('SwitchOff');
            sound.audio.play();
            //hook_open_sound.play();
            open = true;
      }
  }
}

//animazioni interrutore camera1
function loadObjMtl3InterruttoreAnimation5 ( name, sx, sy, sz, posx, posy, posz, dir, rotz, hookInt5) {
    var loader = new THREE.OBJMTLLoader();
    loader.addEventListener('load', function (event) {

        var object = event.content;
        var part0 = object.children[0];
        var part1 = object.children[1];
        //console.log(object);   

        part0.rotation.x = Math.PI/2;
        part0.rotation.y = rotz;
        part0.scale.set(sx, sy, sz);
        part0.position.set(posx,posy,posz);

        part1.rotation.x = Math.PI/2;
        part1.rotation.y = rotz;
        part1.scale.set(sx, sy, sz);
        part1.position.set(posx,posy,posz);


        //hookInt.add(new THREE.AxisHelper(1)); //utilizzato per debuggare 
        hookInt5.add(part0);
        hookInt5.add(part1);        


        // part1.position.set(posx,posy,posz);
        hookInt5.position.set(posx,posy+0.02,posz+0.01);
        part0.position.set(0,-0.02,-0.01);
        part1.position.set(0.01,-0.02,-0.01);

        //5.825,6.86
        //console.log(object);
        //dwelling.add(object.children[0]);
        // dwelling.add(object);
        // }  

        dwelling.add(hookInt5);
        animateInterruttore5(hookInt5);     
    });
    
   loader.load(
    'assets/models/'+dir+'/'+name+'.obj', 
    'assets/models/'+dir+'/'+name+'.mtl', 
    {side: THREE.DoubleSide}
    );
   
}

function animateInterruttore5(hookInt5) {
  var open = true;
  var room_light3 = new THREE.PointLight( 0xffffff, 2.8, 2.2 );
  room_light3.position.set(1.83,7.19,1.5);
  dwelling.add( room_light3 );
  room_light3.intensity=0;

  hookInt5.children[0].interact = function() {
       if (open) {
            var openhookTween1 = new TWEEN.Tween(hookInt5.children[1].position)
                .to({z: 0.02}, 300).delay(20).start();
            open = false;
            // if(room_light3.intensity===0){
              room_light3.intensity=2.8;
              sound=new Sound('SwitchOn');
              sound.audio.play();
            // }
        }

       else {
            var closehookTween = new TWEEN.Tween(hookInt5.children[1].position)
                .to({z: -0.01}, 300).delay(20).start();         
            room_light3.intensity=0;
            sound=new Sound('SwitchOff');
            sound.audio.play();
            //hook_open_sound.play();
            open = true;
      }
  }
}

function creaForno(name, sx, sy, sz, posx, posy, posz, dir, rotz, oggetto){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(sx, sy, sz);
        object.rotation.x = Math.PI/2;
        object.rotation.y = rotz;
        
        toFire = new THREE.Object3D();
        toFire.add(object);

        

        var cubeGeometry = new THREE.BoxGeometry(0.6,0.6,0.005);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x000000,  side:THREE.DoubleSide});
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;
        fireMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
        toFire.add(fireMesh);
        toFire.position.set(posx,posy,posz);
        fireMesh.position.set(0.35,0.3,0.05);



        dwelling.add(toFire);

        fireMesh.interact=function(){

          sound=new Sound('fires');
          sound.audio.play();

          var settings3={

          positionStyle  : Type.SPHERE,
          positionBase   : new THREE.Vector3( posx+0.18, posy+0.16, posz+0.05 ),
          positionRadius : .001,
            
          velocityStyle : Type.SPHERE,
          speedBase     : 1.3,
          speedSpread   : .3,
        
          particleTexture : THREE.ImageUtils.loadTexture( 'assets/media/img/spikey.png' ),

          sizeTween    : new Tween( [0, 0.0000062], [0.00062, 2] ),
          opacityTween : new Tween( [0.7, 1], [1, 0] ),
          colorBase    : new THREE.Vector3(0.02, 1, 0.4),
          blendStyle   : THREE.AdditiveBlending,  
          
          particlesPerSecond : 90,
          particleDeathAge   : .05,   
          emitterDeathAge    : 5.6
          }
          if(oggetto[0]!==null){
            oggetto[0].destroy();}
          engine3 = new ParticleEngine();   
          engine3.setValues( settings3 );
          engine3.initialize();
          oggetto[0]=engine3;
        }
      });

        loader.load(
        'assets/models/'+dir+'/'+name+'.obj', 
        'assets/models/'+dir+'/'+name+'.mtl', 
        {side: THREE.DoubleSide}
        );

        return oggetto;

}

engine=creaForno('fornelletti',0.0119,0.019,0.012,0.42,4.065,1.18,"kitchen/fornelletti",Math.PI/2,engine);





