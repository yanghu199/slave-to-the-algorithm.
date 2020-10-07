var song1;
let phone,butterfly,ufo,hand,toycar;
let tietu,green,orange,di,black,red;

function preload() {
   song1 = loadSound('data/song1.mp3',true);
  // Load model with normalise parameter set to true
 butterfly = loadModel('data/butterfly.obj', true);
  phone = loadModel('data/phone.obj', true);
    toycar = loadModel('data/toycar.obj', true);
  ufo = loadModel('data/ufo.obj', true);
    hand = loadModel('data/hand.obj', true);

 di = loadImage('data/di.png',true);//background image
  tietu = loadImage('data/tietu1.jpg',true);
    red = loadImage('data/red.png',true);
   black = loadImage('data/black.png',true);
  green = loadImage('data/green.png',true);
 orange = loadImage('data/orange.png',true);
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
imageMode(CENTER);
image(di,0,0,windowWidth,windowHeight);
}

function draw() {
 // background(0);
  scale(1); 
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.03);
 noStroke();
translate(mouseX-width/2,mouseY-height/2);
//translate(160,90,260);
  texture(red);
 model(toycar);
 
  scale(1); 
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.03);
 noStroke();
translate(mouseX-width/2,mouseY-height/2);
//translate(160,90,260);
  texture(tietu);
 model(phone);
 
 scale(1); 
  rotateX(frameCount * 0.008);
 rotateY(frameCount * 0.008);
   // rotateZ(frameCount * 0.008);
 noStroke();
 translate(mouseX-width/2,mouseY-height/2);
 //translate(60,80,240);
  texture(green);
 model(butterfly);
 
  scale(1); 
  rotateX(frameCount * 0.008);
 rotateY(frameCount * 0.008);
   // rotateZ(frameCount * 0.008);
 noStroke();
 translate(mouseX-width/2,mouseY-height/2);
 //translate(160,-80,240);
  texture(orange);
 model(ufo);
 
 scale(1); 
  rotateX(frameCount * 0.008);
 rotateY(frameCount * 0.008);
   // rotateZ(frameCount * 0.008);
 noStroke();
 translate(mouseX-width/2,mouseY-height/2);
// translate(160,-80,240);
  texture(black);
 model(hand);
}

function mousePressed(){
   if (song1.isPlaying()){ //checks if the song is playing!!
  song1.stop(); // if it is, then stop the song
   }
   else{
     song1.play();
    
   }
}
