Particles=
{
	clouds :
	{
    positionStyle  : Type.CUBE,
    positionBase   : new THREE.Vector3( -20, 5,  20 ),
    positionSpread : new THREE.Vector3(    0,  10, 30 ),
    
    velocityStyle  : Type.CUBE,
    velocityBase   : new THREE.Vector3( 40, 0, 0 ),
    velocitySpread : new THREE.Vector3( 20, 0, 0 ), 
    
    particleTexture : THREE.ImageUtils.loadTexture( 'assets/media/img/clouds.png'),

    sizeBase     : 80.0,
    sizeSpread   : 100.0,
    colorBase    : new THREE.Vector3(0.0, 0.0, 1.0), // H,S,L
    opacityTween : new Tween([0,1,4,5],[0,1,1,0]),

    particlesPerSecond : 50,
    particleDeathAge   : 10.0,    
    emitterDeathAge    : 60
	},

	fires :
	{
	positionStyle  : Type.SPHERE,
	positionBase   : new THREE.Vector3( 0.7,2.4,0.95 ),
	positionRadius : .025,
	
	velocityStyle  : Type.CUBE,
	velocityBase   : new THREE.Vector3(0,0,0),
	velocitySpread : new THREE.Vector3(.2,.2,.2),
	
	particleTexture : THREE.ImageUtils.loadTexture( 'assets/media/img/spark.png' ),
	
	sizeTween    : new Tween( [0, 0.3, 1.5], [0.4,0.4,0.4] ),
	opacityTween : new Tween( [0.9, 1.5], [0.2, 0.3] ),
	colorTween   : new Tween( [0.5, 1], [ new THREE.Vector3(0.02, 1, 0.5),new THREE.Vector3(0.05, 1, 0.5)
	 ] ),
	blendStyle : THREE.AdditiveBlending,  
	
	particlesPerSecond : 60,
	particleDeathAge   : 1.5,		
	emitterDeathAge    : 60
	}

	// starfield :
	// {
	// 	positionStyle    : Type.CUBE,
	// 	positionBase     : new THREE.Vector3( 100, 250, 0 ),
	// 	positionSpread   : new THREE.Vector3( 1000, 100, 1000 ),

	// 	velocityStyle    : Type.CUBE,
	// 	velocityBase     : new THREE.Vector3( 0, 0, 0 ),
	// 	velocitySpread   : new THREE.Vector3( 0.5, 0.5, 0.5 ), 
		
	// 	angleBase               : 0,
	// 	angleSpread             : 720,
	// 	angleVelocityBase       : 0,
	// 	angleVelocitySpread     : 4,

	// 	particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/general/spikey.png' ),
		
	// 	sizeBase    : 10.0,
	// 	sizeSpread  : 2.0,				
	// 	colorBase   : new THREE.Vector3(0.15, 1.0, 0.9), // H,S,L
	// 	colorSpread : new THREE.Vector3(0.00, 0.0, 0.2),
	// 	opacityBase : 1,

	// 	particlesPerSecond : 5000,
	// 	particleDeathAge   : 60.0,		
	// 	emitterDeathAge    : 0.1
	// },

	// fireflies :
	// {
	// 	positionStyle  : Type.CUBE,
	// 	positionBase   : new THREE.Vector3( 0, 5, 0 ),
	// 	positionSpread : new THREE.Vector3( 400, 200, 400 ),

	// 	velocityStyle  : Type.CUBE,
	// 	velocityBase   : new THREE.Vector3( 0, 0, 0 ),
	// 	velocitySpread : new THREE.Vector3( 40, 20, 60 ), 
		
	// 	particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/general/spark.png' ),

	// 	sizeBase   : 5.0,
	// 	sizeSpread : 2.0,
	// 	opacityTween : new Tween([0.0, 1.0, 1.1, 2.0, 2.1, 3.0, 3.1, 4.0, 4.1, 5.0, 5.1, 6.0, 6.1],
	// 	                         [0.2, 0.2, 1.0, 1.0, 0.2, 0.2, 1.0, 1.0, 0.2, 0.2, 1.0, 1.0, 0.2] ),				
	// 	colorBase   : new THREE.Vector3(0.30, 1.0, 0.6), // H,S,L
	// 	colorSpread : new THREE.Vector3(0.3, 0.0, 0.0),

	// 	particlesPerSecond : 40,
	// 	particleDeathAge   : 6.1,		
	// 	emitterDeathAge    : 600
	// },
	
}