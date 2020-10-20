week9

1 min quick presentation uploaded the working progress 

<img width="1014" alt="屏幕快照 2020-10-20 下午3 42 40" src="https://user-images.githubusercontent.com/68723373/96555915-ef37f080-12ea-11eb-8022-70a42b0d2c87.png">


In the morning class we needed to upload our working process one by one with Karen and got suggestions. For my emotion mapping website, the latest version is including  the collage machine, 3d items library and sound library. Through this website I tried to explore the relationship between people and their personal belongings. Compared with the initial idea, I gave up the ar function because it needs to recognize the environment and scan items to analyze the personality, which needs enormous data to support that. 

For the 3d library, I’m still keep building the 3d modeling in c4d. And I also tried to explore the method that can display 3d stuff in html. Three.js is great, however, the size of my 3d file is nearly 600mb so it’s too big for loading and rendering. then I started to find a more easier and faster way to display and 360 degree panorama gram would help! And it also support camera control!

For the collage machine, the initial idea was created a search bar function that users could import their feelings with text and some images would jump out. last week we learned the basic function of speech.js and now I’m trying to combine the speech.js with search function. So when people started to say something about their feelings, the system will recognize the keywords and match them with images and these images will be overlapped when people are saying. So I tried to remix the coding but obviously it didn’t work and now I’m debugging it.

For the sound library, i’m collecting short answers from others that respond two questions:Do you have emotional attachment with your personal items? And What kind of emotion or feeling do you have to them? And I will make a 3d model for their items. So when people click the model, it will start to play the recording.

Karen suggested that it’s better to upload the original obj file into the web. In order to achieve that, I needed to reduce the size of all models. The panorama gram could be the plan B just in case the model didn’t work. In group discussion, KaiQi had some visual advice for the collage machine. Rather than multi-canvas, she thought a main and center canvas could concentratedly present the images better and had a more distinct structure. 

<img width="384" alt="屏幕快照 2020-10-20 下午4 33 16" src="https://user-images.githubusercontent.com/68723373/96584181-7186db80-1310-11eb-96cd-a1fc1ef54d7f.png">
the final visual prototype of collage machine

that's looked much better!


Afternoon class 

Multipul canvas

let pg;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pgleft = createGraphics(width/2, height);
  pgright = createGraphics(width/2, height);
  textSize(120);
  textAlign(CENTER,CENTER);
    background(200);
    pgleft.background(0,255,0, 100);
        
}

function draw() {

  fill(0,0,255);

  pgright.background(255,0);

  pgleft.noStroke();
  pgleft.fill(255);
  rect(mouseX-25, mouseY-25, 50, 50);
  pgright.fill(255,0,0);
  pgright.background(mouseX,mouseY,0, 100);
  pgright.ellipse(mouseX-width/2, mouseY, 50, 50);
  image(pgleft, 0, 0,width/2,height);
  image(pgright, width/2, 0, width/2, height);
  text('Slave to the Algorithm', 50, 0,  width, height/2);
}

I thought this multi-canvas code was especially worked well with others who used the motion sensor(one vision for camera and another for visualization). 


Split text

var myText = 'And yet this naked body of \"quotemarks\"words just now starting to play out its creative potential is not really my own. It’s part of something much larger than me— some kind of dynamic, shape-shifting intersubjectivity where I am always losing sight of myself as I improvisationally interact with The Network and, without thinking about it, intuitively manipulate the pulse of Time (as if such a thing as Time could actually exist).';
var words;
function setup() {
createCanvas (windowWidth, windowHeight);
background (0);
textSize (32); 
textFont ('Times');
words=myText.split(' ');
}
//to have this 'appear over time' you can use the ongoing variable 'frameCount'
function draw() {
  background (0);
  fill(255);
  for (i=0; i<words.length; i++){
    if (frameCount>10*i){
      text(words[i], 10, i*30, width, height); //(x,y, length of x, length of y)
    }
  }
}

3d library development

I already imported a small obj file with three.js, the next step was tried to increase the control function. Actually I found a couple of coding that supported the first person camera & keyboard control and I thought I could combined them with mine.

https://github.com/mrdoob/three.js/blob/master/examples/js/controls/FirstPersonControls.js
https://github.com/brianpeiris/three-firstperson-vr-controls
https://download.csdn.net/download/weixin_41164386/10880228?utm_medium=distribute.pc_relevant.none-task-download-BlogCommendFromMachineLearnPai2-2.add_param_isCf
https://blog.csdn.net/qq_41960265/article/details/108470700?utm_medium=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase

import * as Three from './build/three.module.js';
		      //import * as Three from 'three'
		      import {OrbitControls} from './jsm/controls/OrbitControls';
		      import {OBJLoader} from './data/OBJLoader.js';
		      import {MTLLoader} from './data/MTLLoader.js';
		      import { PointerLockControls } from './jsm/controls/PointerLockControls.js';
		      export default {
		      name: 'ThreeTest',
		      data() {
			  return {
			  camera: null,
			  scene: null,
			  renderer: null,
			  mesh: null,
			  controls:"",
			  intersections:null,
			  objects : [],
			  clock:"",
			  moveForward:false,
			  moveLeft:false,
			  moveBackward:false,
			  moveRightInit:false,
			  direction : new Three.Vector3(),
			  velocity : new Three.Vector3(),
			  prevTime : performance.now()
			 }
		      },
		      methods: {
			  init: function() {
			  this.initScene()//scene
			  this.initCamera()//camera
			  this.initWebGLRenderer()//renderer
			  this.initAxisHelper()//axis helper
			  this.render()
			  this.createControls()//control
			  this.Box()
			  this.initControls()
			  this.initPlane()//plane
			  this.initMobile()//movement
			  },
			  //mouse control the angle of view
			  initControls(){
			  let that=this
			  that.controls = new PointerLockControls( this.camera, document.body );
			  var container = document.getElementById( 'container' );
			  container.addEventListener( 'click', function () {
				that.controls.lock();
			  });
			  this.scene.add(that.controls.getObject() );
			  },
			  //移动
			  initMobile(){
			  let that=this
			  console.log(this.controls)
			  var onKeyDown = function ( event ) {
	  
				switch ( event.keyCode ) {
	  
				  case 38: // up
				  case 87: // w
					that.moveForward = true;
					break;
	  
				  case 37: // left
				  case 65: // a
					that.moveLeft = true;
					break;
	  
				  case 40: // down
				  case 83: // s
					that.moveBackward = true;
					break;
	  
				  case 39: // right
				  case 68: // d
					that.moveRightInit = true;
					break;
	  
				}
	  
			  };
	  
			  var onKeyUp = function ( event ) {
	  
				switch ( event.keyCode ) {
	  
				  case 38: // up
				  case 87: // w
					that.moveForward = false;
					break;
	  
				  case 37: // left
				  case 65: // a
					that.moveLeft = false;
					break;
	  
				  case 40: // down
				  case 83: // s
					that.moveBackward = false;
					break;
	  
				  case 39: // right
				  case 68: // d
					that.moveRightInit = false;
					break;
	  
				}
	  
			  };
	  
			  document.addEventListener( 'keydown', onKeyDown, false );
			  document.addEventListener( 'keyup', onKeyUp, false );
		       },
		
		      var container,control

		      var camera, scene, renderer;

		      var mouseX = 0, mouseY = 0;

		      var windowHalfX = window.innerWidth / 2;
		      var windowHalfY = window.innerHeight / 2;


		      init();
		      animate();


		      function init() {

			  container = document.createElement( 'div' );
			  document.body.appendChild( container );

			  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 20000 );
			  camera.position.z = 1000;

			 // scene

			 scene = new THREE.Scene();
			 scene.background = new THREE.Color(0x101833);
			 var ambientLight = new THREE.AmbientLight( 0xcccccc, 1 );
			 scene.add( ambientLight );

			 var pointLight = new THREE.PointLight( 0xffffff, 1 );
			 camera.add( pointLight );
			 scene.add( camera );
 

			 // model

			 var onProgress = function ( xhr ) {

				 

			 };

			var onError = function (e) {
				console.log(e)
			};

			var manager = new THREE.LoadingManager();
		 

			new MTLLoader( manager )
					.setPath( 'data/' )
					.load( 'toycar.mtl', function ( materials ) {

						materials.preload();

						new OBJLoader( manager )
								.setMaterials( materials )
								.setPath( 'data/' )
								.load( 'toycar.obj', function ( object ) {

									object.position.y = - 95;
									scene.add( object );

								}, onProgress, onError );

					} );

			//

			renderer = new THREE.WebGLRenderer();
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth, window.innerHeight );
			container.appendChild( renderer.domElement );
			 

		}
 

		//

		function animate() {

			requestAnimationFrame( animate );
			render();

		}

		function render() {

			  
			renderer.render( scene, camera );

		}
	  
			  //coding for control the movement
			  let time = performance.now();
			  let delta = ( time - that.prevTime ) / 1000;
	  
			  that.velocity.x -= that.velocity.x * 10.0 * delta;
			  that.velocity.z -= that.velocity.z * 10.0 * delta;
	  
			  that.direction.z = Number( that.moveForward ) - Number( that.moveBackward );
			  that.direction.x = Number( that.moveRightInit ) - Number( that.moveLeft );
	  
			  that.velocity.z -= that.direction.z * 400.0 * delta;
			  that.velocity.x -= that.direction.x * 400.0 * delta;
	  
			  //&& is to judege if there has moveRight.if it has then keep loading otherwise will have the syntaxerror
			  that.controls && that.controls.moveRight(- that.velocity.x * delta)
			  that.controls && that.controls.moveForward(- that.velocity.z * delta)
			  that.prevTime = time;
			 },
			
			createControls () {
			  this.controls = new OrbitControls(this.camera,this.renderer.domElement)
			}
	  
		  },
		  mounted() {
			this.init();
			this.render();
			
		  }
      
    
 Failed!! 'Failed to load resource: Uncaught SyntaxError: Cannot use import statement outside a module'
 what's that actually meant? so I googled this syntax error and found the method could fix it:https://blog.csdn.net/qq_43340929/article/details/101862294
 https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import
 
 
      
      
