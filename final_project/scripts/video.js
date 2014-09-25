		//video tv
		
		video = document.createElement( 'video' );
		video.src = "assets/media/videos/Kings.mp4";
		video.bool = false;

		videoImage = document.createElement( 'canvas' );
		videoImage.width = 480;
		videoImage.height = 360;

		videoImageContext = videoImage.getContext( '2d' );
		videoImageContext.fillStyle = '#000000';
		videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

		videoTexture = new THREE.Texture( videoImage );
		videoTexture.minFilter = THREE.LinearFilter;
		videoTexture.magFilter = THREE.LinearFilter;


		//tv
		var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
		var movieGeometry = new THREE.PlaneGeometry( 0.89,0.435,4,4);
		var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
		movieScreen.rotation.x=5*Math.PI/2;
		movieScreen.rotation.y=3*Math.PI/2;
		movieScreen.position.set(6.73,1.724,1.33);

		var blackScreenGeom = new THREE.PlaneGeometry( .89,.435,4,4 );
		var blackScreenMat = new THREE.MeshLambertMaterial({color: 0x000000});
		var blackScreen = new THREE.Mesh(blackScreenGeom, blackScreenMat);
		blackScreen.rotation.x=5*Math.PI/2;
		blackScreen.rotation.y=3*Math.PI/2;
		blackScreen.position.set(6.73,1.724,1.33);
		dwelling.add(blackScreen);
		dwelling.add(movieScreen);
		movieScreen.visible=false;

		blackScreen.interact=function(){
			if(video.bool){ 
				blackScreen.visible=false;
				movieScreen.visible= true;
				video.bool = false;
				video.play();

			}
			else{
				blackScreen.visible=true;
				movieScreen.visible= false;
				video.bool = true;
				video.pause();

			}
		};


		//video pc
			video2 = document.createElement( 'video' );
			video2.src = "assets/media/videos/mac.mp4";
			video2.bool = false;

			videoImage2 = document.createElement( 'canvas' );
			videoImage2.width = 640;
			videoImage2.height = 356;

			videoImageContext2 = videoImage2.getContext( '2d' );
			videoImageContext2.fillStyle = '#000000';
			videoImageContext2.fillRect( 0, 0, videoImage2.width, videoImage2.height );

			videoTexture2 = new THREE.Texture( videoImage2 );
			videoTexture2.minFilter = THREE.LinearFilter;
			videoTexture2.magFilter = THREE.LinearFilter;

			//pc
			var movieMaterial2 = new THREE.MeshBasicMaterial( { map: videoTexture2, overdraw: true, side:THREE.DoubleSide } );
			var movieGeometry2 = new THREE.PlaneGeometry( .174,.177,4,4);
			var movieScreen2 = new THREE.Mesh( movieGeometry2, movieMaterial2 );
			//movieScreen2.rotation.x=5*Math.PI/2;
			//movieScreen2.rotation.y=-Math.PI/4;
			// movieScreen2.rotation.z=-Math.PI/12
			//movieScreen2.position.set(7.71,0.89,1.1);
			hookBlack = new THREE.Object3D();
			hookBlack.add(movieScreen2);

			var blackScreenGeom2 = new THREE.PlaneGeometry( .174,.177,4,4 );
			var blackScreenMat2 = new THREE.MeshLambertMaterial({color: 0x000000, side: THREE.DoubleSide});
			var blackScreen2= new THREE.Mesh(blackScreenGeom2, blackScreenMat2);
			
			hookBlack.add(blackScreen2);

			hookBlack.rotation.x=5*Math.PI/2;
			hookBlack.rotation.y=-Math.PI/4;
			//hookBlack.rotation.z=3*Math.PI/4;
			
			//hookBlack.rotation.z=Math.PI/12
			// blackScreen2.rotation.z=-Math/12;
			hookBlack.position.set(7.72,0.905,1.096);
			dwelling.add(hookBlack);
			//dwelling.add(movieScreen2);
			movieScreen2.visible=false;

			blackScreen2.interact=function(){
				if(video2.bool){ 
					blackScreen2.visible=false;
					movieScreen2.visible= true;
					video2.bool = false;
					video2.play();

				}
				else{
					blackScreen2.visible=true;
					movieScreen2.visible= false;
					video2.bool = true;
					video2.pause();
				}
			};

		//video pc
			video3 = document.createElement( 'video' );
			video3.src = "assets/media/videos/mac2.mp4";
			video3.bool = true;

			videoImage3 = document.createElement( 'canvas' );
			videoImage3.width = 640;
			videoImage3.height = 356;

			videoImageContext3 = videoImage3.getContext( '2d' );
			videoImageContext3.fillStyle = '#000000';
			videoImageContext3.fillRect( 0, 0, videoImage3.width, videoImage3.height );

			videoTexture3 = new THREE.Texture( videoImage3 );
			videoTexture3.minFilter = THREE.LinearFilter;
			videoTexture3.magFilter = THREE.LinearFilter;

			//pc
			var movieMaterial3 = new THREE.MeshBasicMaterial( { map: videoTexture3, overdraw: true, side:THREE.DoubleSide } );
			var movieGeometry3 = new THREE.PlaneGeometry( .31,.2,4,4);
			var movieScreen3 = new THREE.Mesh( movieGeometry3, movieMaterial3 );
			//movieScreen3.rotation.x=5*Math.PI/2;
			//movieScreen3.rotation.y=-Math.PI/4;
			// movieScreen3.rotation.z=-Math.PI/12
			//movieScreen3.position.set(7.71,0.89,1.1);
			hookBlack3 = new THREE.Object3D();
			hookBlack3.add(movieScreen3);

			var blackScreenGeom3 = new THREE.PlaneGeometry( .31,.2,4,4 );
			var blackScreenMat3 = new THREE.MeshLambertMaterial({color: 0x000000, side: THREE.DoubleSide});
			var blackScreen3= new THREE.Mesh(blackScreenGeom3, blackScreenMat3);
			
			hookBlack3.add(blackScreen3);

			hookBlack3.rotation.x=Math.PI/2;
			hookBlack3.rotation.y=-Math.PI/2;
			//hookBlack.rotation.z=3*Math.PI/4;
			
			//hookBlack.rotation.z=Math.PI/12
			// blackScreen2.rotation.z=-Math/12;
			hookBlack3.position.set(1.902,7.126,1.13);
			dwelling.add(hookBlack3);
			//dwelling.add(movieScreen2);
			movieScreen3.visible=false;

			blackScreen3.interact=function(){
				if(video3.bool){ 
					blackScreen3.visible=false;
					movieScreen3.visible= true;
					video3.bool = false;
					video3.play();

				}
				else{
					blackScreen3.visible=true;
					movieScreen3.visible= false;
					video3.bool = true;
					video3.pause();
				}
			};
