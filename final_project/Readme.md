Final Project
================
Holsi Hasanaj matr: 439475
-----------------------

Project organization :
==================

* [index](index.html) call the other function to add the light, the texture and the object in the apartment with their animations.
* The functions [init](assets/scripts/init.js), create the window, dwelling that is imported from Lar model created by me, and add the texture and the light in the apartment.
* The scripts [function](assets/scripts/function.js) create some util function for adding texture on dwelling and load OBJ, [lighting](assets/scripts/lighting.js), create a sphere Mesh geometry that emulates Lamp [video](assets/scripts/video.js) create a video texture with animation on click,[animation](assets/scripts/animation.js)create functions that load OBJ, MTL and interact ,sound and animation,with the object 3D, [floor](assets/scripts/floor.js) add the texture floor on dwelling, [wall](assets/scripts/wall.js)add the texture wall on dwelling, [roof](assets/scripts/roof.js) create a geometry of roof, [object](assets/scripts/object.js) create all the objects in the apartment, some objects  are created by me, other are object imported; the most have been modified by me( by adding geometries or by changing the mtl file),[pointerLock](assets/scripts/pointerLock.js) contains the method that allow the use of first person control,[particles](assets/scripts/particles.js) contains the definition of particles,[skybox](assets/scripts/skybox.js) contains definition and integration of dwelling skybox.

Graphic Techniques:
==================
* bump map, repeat wrapping -> frame and walls.
* **Video Texture** -> tv, and pc.
* texture -> walls,floors,objects.
* tween animation -> lamp rotation, opening/closing door and windows, cloud movement, switch animation with light and sound.
* import obj, obj/mtl.
* **SkyBox.**
* **TrackballControls, PointerLockControls, picking object.**
* **particle** -> clouds, fire, fountain near the basket camp, fireflies.
* **Audio** -> tv,light on/off ,window, fire, open/close window and door, PC.
* Shape -> wall and roof.
* Gui ->  set night and day, Skybox, particle.
* PointLight, SpotLight.

Descriptions:
==================
* You can interact with object by clicking.
* With the gui you can choose which environment and camera you prefer.
* In addition to the frames, there are drawings on the walls .
* With pointerLock you can move in the ambient by clicking the darts button.