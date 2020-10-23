week 10

sharing & research

<img width="957" alt="屏幕快照 2020-10-20 下午5 17 28" src="https://user-images.githubusercontent.com/68723373/96566997-d6363c00-12f8-11eb-8419-f4c613c415b0.png">

https://vimeo.com/74877028

'1194D is originally a tweak of 115C8 (vimeo.com/45569702), one of my "Algorithmic Creature" series based on the recursive triangle subdivision. The idea and complexity of the work started to go beyond the initial expectation after I decided to experiment with multiple "creatures" co-existing within the environment. So I created this grid with regular tetrahedron as its unit cell, put these triangle-based "creatures" into this environment and tested their mutation and combination in various ways.The entire work is programmed and generated in Processing, with a few scenes using some blur and blend modes in Premiere during the composition stage.'

Those triangles subdivision created some extraordinary scenes that exceeded my imagination of what processing can do.

<img width="426" alt="屏幕快照 2020-10-20 下午5 43 14" src="https://user-images.githubusercontent.com/68723373/96573303-83f91900-1300-11eb-8784-e6dee50478a8.png">

http://www.thisisamagazine.com/livedraw/

‘This is a Magazine presents a new publishing experiment in robo-typography and machinic-drawing called Livedraw. Livedraw is a networked, artist-machine collaborative publishing project, consisting of a custom-made drawing-robot capable of producing "live-drawn" works in natural-media on paper. Artists, designers and writers from This are a magazine (about nothing) project that are invited to contribute works to the project via a custom-coded application that captures their drawing-movements and automatically combines and transmits them to the drawing-robot which draws unique editions.’

Karen and Andy showed us their project about livedraw, which is a really cool and futuristic auto-machine and this experiment can represent a kind of development tendency of drawing ---- collaborated with machine learning and Artificial Intelligence. If this machine can capture the movement in the video,  what will the machine draw when it watch the video from Picasso?


Then we started to concreate on fixing the bug. I was still stuck in the code development of the collage machine. I tried to search the other method of matching multiple keywords in github, and I found some : https://github.com/oskmkr/nodejs-module/blob/2345c7236d596476a7bea0b9fc6505dda3d65842/express-mvc/controllers/keywords.js
https://github.com/matan3sh/meme-generator/blob/6a710e8f5a5874acf661bb557a735417e1dcf052/js/images-service.js
https://github.com/giladberg/meme-generator/blob/021077bc654e6177bd67abd4bcfa134ce241f2c1/js/memeService.js

I also came to ask my friend who learned coding before for help and she suggested that I can use the JSON format to connect my image with multiple keywords liked that:

<img width="281" alt="屏幕快照 2020-10-13 上午1 03 28" src="https://user-images.githubusercontent.com/68723373/96573549-e4885600-1300-11eb-8f88-33ecd048736b.png">

so image1,2,3,4... can be represented as 'idx'. 

<img width="859" alt="屏幕快照 2020-10-20 下午6 40 20" src="https://user-images.githubusercontent.com/68723373/96575773-ca9c4280-1303-11eb-91b1-328f7991c0f8.png">

<img width="314" alt="屏幕快照 2020-10-20 下午6 40 43" src="https://user-images.githubusercontent.com/68723373/96575765-c7a15200-1303-11eb-890d-10e78e824651.png">

I tried to combine mine:

    for (let i = 0; i < keywords.length; i++) {
    let words = keywords[i].keyword
    let idx = keywords[i].id
    
 so one keywords[i]linked with the word, and the other linked with images. the next step was the match 
 
      let m = match(speech, words)
      if (m) {
        popImage(idx)
        }
        
<img width="732" alt="屏幕快照 2020-10-20 下午7 44 45" src="https://user-images.githubusercontent.com/68723373/96581669-c0327680-130c-11eb-9f8a-fc5c5773de27.png">

Something wrong with the width... but at least the image pop up finally!!! the next step was fixed the windowWidth and windowHeight to make them pop up in the mirror.


3d library development

I tried to use another control code in github and combined my part of importing model code:

      function ss() {
			var blocker = document.getElementById('blocker');
			var instructions = document.getElementById('instructions');
			instructions.addEventListener('click', function () {
				controls.lock();
			}, false);
			controls.addEventListener('lock', function () {
				instructions.style.display = 'none';
				blocker.style.display = 'none';
			});
			controls.addEventListener('unlock', function () {
				blocker.style.display = 'block';
				instructions.style.display = '';
			});
			scene.add(controls.getObject());
			var onKeyDown = function (event) {
				switch (event.keyCode) {
					case 38:
						moveUp = true;
						break;
					case 40:
						moveDown = true;
						break;
					case 87: // w
						moveForward = true;
						break;
					case 65: // a
						moveLeft = true;
						break;
					case 83: // s
						moveBackward = true;
						break;
					case 68: // d
						moveRight = true;
						break;
					case 32: // space
						if (canJump === true) velocity.y += 350;
						canJump = false;
						break;
				}
			};

			var onKeyUp = function (event) {

				switch (event.keyCode) {
					case 38:
						moveUp = false;
						break;
					case 40:
						moveDown = false;
						break;
					case 87: // w
						moveForward = false;
						break;
					case 65: // a
						moveLeft = false;
						break;
					case 83: // s
						moveBackward = false;
						break;
					case 68: // d
						moveRight = false;
						break;
				}
			};
			document.addEventListener('keydown', onKeyDown, false);
			document.addEventListener('keyup', onKeyUp, false);
		}
    
  and import fbx:
  
      function init() {

			var container = document.getElementById('container');

			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			container.appendChild(renderer.domElement);

			camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
			camera.position.y = -20;
			scene = new THREE.Scene();
			scene.background = new THREE.Color(0xffffff);

			var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
			light.position.set(1.5, 0.45, 0.75);
			scene.add(light);
			scene.add(new THREE.AmbientLight(0xEE7AE9));

			// controls
			controls = new PointerLockControls(camera, document.body);
			ss();


			var loader = new FBXLoader();
			loader.load('fbx/cactus.fbx', function (object) {
				object.scale.multiplyScalar(0.01)
				scene.add(object);
				document.getElementById('loading').innerHTML = 'Model Load Successfully. Click to view'
			});


			window.addEventListener('resize', onWindowResize, false);
			window.velocity = velocity;
		}

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		}


and the control part: 

      function animate() {

			requestAnimationFrame(animate);
			// controls.update(); // required when damping is enabled
			if (controls.isLocked === true) {


				var time = performance.now();
				var delta = (time - prevTime) / 500;

				velocity.x -= velocity.x * 10.0 * delta;
				velocity.z -= velocity.z * 10.0 * delta;
				velocity.y -= velocity.y * 10.0 * delta;

				direction.z = Number(moveForward) - Number(moveBackward);
				direction.x = Number(moveRight) - Number(moveLeft);
				direction.y = Number(moveDown) - Number(moveUp);
				direction.normalize(); // this ensures consistent movements in all directions

				if (moveForward || moveBackward) velocity.z -= direction.z * 10.0 * delta;
				if (moveLeft || moveRight) velocity.x -= direction.x * 10.0 * delta;
				if (moveUp || moveDown) velocity.y -= direction.y * 10.0 * delta;

				controls.moveRight(- velocity.x * delta);
				controls.moveForward(- velocity.z * delta);

				controls.getObject().position.y += (velocity.y * delta); // new behavior

				prevTime = time;

			}

			renderer.render(scene, camera);

		}
    
 I also tried this for another version:
 
            this.update = function( delta ) {

            if ( this.enabled === false ) return;

            if ( this.heightSpeed ) {

                var y = THREE.Math.clamp( this.object.position.y, this.heightMin, this.heightMax );
                var heightDelta = y - this.heightMin;

                this.autoSpeedFactor = delta * ( heightDelta * this.heightCoef );

            } else {

                this.autoSpeedFactor = 0.0;

            }

            var actualMoveSpeed = delta * this.movementSpeed;

            if ( this.moveForward || ( this.autoForward && !this.moveBackward ) ) this.object.translateZ( - ( actualMoveSpeed + this.autoSpeedFactor ) );
            if ( this.moveBackward ) this.object.translateZ( actualMoveSpeed );

            if ( this.moveLeft ) this.object.translateX( - actualMoveSpeed );
            if ( this.moveRight ) this.object.translateX( actualMoveSpeed );

            if ( this.moveUp ) this.object.translateY( actualMoveSpeed );
            if ( this.moveDown ) this.object.translateY( - actualMoveSpeed );

            var actualLookSpeed = delta * this.lookSpeed;

            if ( !this.activeLook ) {

                actualLookSpeed = 0;

            }

            var verticalLookRatio = 1;

            if ( this.constrainVertical ) {

                verticalLookRatio = Math.PI / ( this.verticalMax - this.verticalMin );

            }

            this.lon += this.mouseX * actualLookSpeed;
            if( this.lookVertical ) this.lat -= this.mouseY * actualLookSpeed * verticalLookRatio;

            this.lat = Math.max( - 85, Math.min( 85, this.lat ) );
            this.phi = THREE.Math.degToRad( 90 - this.lat );

            this.theta = THREE.Math.degToRad( this.lon );

            if ( this.constrainVertical ) {

                this.phi = THREE.Math.mapLinear( this.phi, 0, Math.PI, this.verticalMin, this.verticalMax );

            }

            var targetPosition = this.target,
                position = this.object.position;

            targetPosition.x = position.x + 100 * Math.sin( this.phi ) * Math.cos( this.theta );
            targetPosition.y = position.y + 100 * Math.cos( this.phi );
            targetPosition.z = position.z + 100 * Math.sin( this.phi ) * Math.sin( this.theta );

            this.object.lookAt( targetPosition );

        };


        this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );

        this.domElement.addEventListener( 'mousemove', bind( this, this.onMouseMove ), false );
        this.domElement.addEventListener( 'mousedown', bind( this, this.onMouseDown ), false );
        this.domElement.addEventListener( 'mouseup', bind( this, this.onMouseUp ), false );

        window.addEventListener( 'keydown', bind( this, this.onKeyDown ), false );
        window.addEventListener( 'keyup', bind( this, this.onKeyUp ), false );

        function bind( scope, fn ) {

            return function () {

                fn.apply( scope, arguments );

            };

        };

        this.handleResize();

    };

    };
    
 reference : https://github.com/mathisonian/three-first-person-controls/blob/master/index.js
 https://github.com/mrdoob/three.js/blob/master/examples/js/controls/FirstPersonControls.js
 https://github.com/dotnet-websharper/threejs.firstpersoncontrols
 
 my small fbx test code:https://github.com/yanghu199/test/tree/main/small-fbx-test-keyboard
 and it worked!! finally!!

