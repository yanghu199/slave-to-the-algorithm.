week6

Paper prototype game

https://www.google.com/search?q=neo+bomberman&sxsrf=ALeKk01hRfVM1edUOe3VpTwgsokBVoCpKA:1598580615988&source=lnms&tbm=isch&sa=X&ved=2ahUKEwir24ru6LzrAhWzxzgGHSzRDPsQ_AUoAXoECCQQAw&biw=2305&bih=1216&dpr=1

![IMG_3984](https://user-images.githubusercontent.com/68723373/96475985-4300f600-1267-11eb-8313-b3274c7f5a5e.GIF)

my paper prototype

![IMG_3985](https://user-images.githubusercontent.com/68723373/96476129-6f1c7700-1267-11eb-8e4e-de3687bef474.GIF)

We started with the warmup prototype making and the paper prototype is the easiest way for manipulating and visualizing the rough idea. We decided to do the Neo bomberman and I make some extra removable props to enhance the playability. Besides, it’s interesting to see that we made 3 different versions with the same game, same logic but completely diverse outcomes. When we displayed our prototypes, Andy pointed out a detailed problem but has a great influence on the experience of presentation ——  turn your prototype around and face the person you are talking to. It provides a more immersing experience for audience.

Input voice document

This is really important coding for my project because I need to input a couple of voice records in my welcome page and 3d library web which will document how participants describe their relationship between emotion and personal objects and how these items affect their cognizance of emotion. 

var song; 
var analyzer;
function preload(){
song = loadSound('data/Don’t forget to breathe.mp3'); 

}

function setup() {
createCanvas(windowWidth, windowHeight); 
background(0); 
fill(0,0,255);
song.loop();
analyzer= new p5.Amplitude();
analyzer.setInput(song);
noStroke;
}
function draw() { 
background(0,1);
var volume=analyzer.getLevel(); 
volume=(volume*windowWidth)+60;
ellipse(windowWidth/2,windowHeight/2,volume,volume); 
}
function mousePressed(){ 
if (song.isPlaying()){ 
song.stop(); 
song.noLoop();
fill(255,0,0);
  } 
  else { fill(0,255,0); 
  song.play(); 
  song.loop();
}
}

Also I’m considering that if I can set up a voice library comprise with 3d individual items? I’m attempting to explore and provide diverse perspectives deeply regarding the narrative functions because the 3d modelings or images of substances cannot actually tell a specific story to audience. I find the reference in p5js that can support to import the obj file.

let teapot;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('assets/teapot.obj', true);
}

function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(200);
  scale(0.4); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(teapot);
}

https://p5js.org/reference/#/p5/loadModel

3d objects scanning 
Then I started to concentrate on how to use Qlone which supports the phone’s camera to scan the object with the horizontal and vertical map for the background. Compared with other 3d photoscanning applications(only supplied by iPhoneX,XR which has an AR camera), the operating system is more complicated; hence the results are more accurate.

![IMG_2647 3](https://user-images.githubusercontent.com/68723373/96476681-21ecd500-1268-11eb-989d-875a8b020754.PNG)

![IMG_2648](https://user-images.githubusercontent.com/68723373/96476403-b99df380-1267-11eb-844a-c5b2b5cd5ff7.PNG)

![IMG_3986](https://user-images.githubusercontent.com/68723373/96476617-097cba80-1268-11eb-8386-f147b4bfe9a5.PNG)


I also made a paper prototype for my 'mirror' function

![IMG_3987](https://user-images.githubusercontent.com/68723373/96477800-80ff1980-1269-11eb-8c4b-b3e08c3a7eb4.GIF)


Research for 3d library spatial mapping

https://shutdown.gallery/
The outcome of shutdown gallery is really close to my ideal spatial model for 3d library. It allows the audience to control the viewing angle and even move the camera with keyboard! Definitely it provides a more immersed and engaging experience for users. Moreover, the details are really delicate (the shadow will change while users move the viewing angle)

https://tonite.dance/ 
It’s really interesting to see the magnify function which give users various experience angle. 



