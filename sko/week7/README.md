W7
1min quick presentation for paper prototype & feedback

I made a quick sketch model for my search function library:

![IMG_3989](https://user-images.githubusercontent.com/68723373/96478977-eacbf300-126a-11eb-9427-57a134fd52a8.GIF)

my code: https://github.com/yanghu199/test/tree/main/search-function

Basically it provides the keyword match function; hence when users typing words, the systems will match the keyword with images in data library automatically

Karen gave me the feedback which I found the link was really beneficial!
“This project could work well with the constructor class we covered in class to track the model and terms associated etc. Also the Speech to text library for p5js: https://github.com/IDMNYU/p5.js-speech (Links to an external site.) is a great find!”
I also found a really useful link for my reading pages:https://brm.io/matter-js/,  which is a 2d physics engine for the web. The sample of “ball pool”inspired me that I can use item images instead of  the geometry shapes. I will definitely explore it after I finish 3d stuff.

Pseudo-code

“Pseudo code is a term which is often used in programming and algorithm based fields. It is a methodology that allows the programmer to represent the implementation of an algorithm. Simply, we can say that it's the cooked up representation of an algorithm.”
pseudo code can help me find the logic mistakes in the process of running the system. Moreover, it visualizes and points out my actual essential function that I need to learn in the next step.

We started with the simple model:
FUNCTION make pseudocode
INPUT your tasks and events
IF interaction
  explain inputs => calculations => outcomes through functions eg. FUNCTION mousePressed or FUNCTION voice input...
ELSE IF data input
  explain process of operations and what results
ELSE IF other
  explain what happens, gets made, generated
END IF

I made a short one with amazon:

FUNCTION shopping in amazon
INPUT credit card, bank account
WHILE shopping
IF money<0 in account
Use credit card
ELSE IF limit of credit card<0
END IF stop shopping!!!

after the warm-up excise which was able to provide the further understanding of what pseudo-code meant, I attempted to interpret the whole working process of my system:

For the welcome page:
let img,video,float1;
let x,y;//floating animation

function preload() {
img = loadImage(‘data/xxx.jpg');
float1 = loadImage(‘data/float1.jpg');
}

function setup() {
createCanvas(windowWidth,windowHeight)
x=width/2
y=height
video = loadVideo([‘data/video.mov', ‘data/video.webm']);
video.hide(); 
   image(img, windowWidth,windowHeight);
}

function draw(){
video(video, 10, 10); 
  filter(GRAY);
float1 (50,50);
x = x + random(-1,1);
//moving up at a constant speed
y = y - 1;
//reset to the bottom
If (y < 0 ){
y = height;

}

}

function mousePressed() {
 video.loop(); 

}

I’m not sure it works but I just attempted to use code to achieve the ideal animation and outcome.

In the afternoon class we learned a couple of interactive coding which were playing with typography. Karen show us how amazing the coding is again!

sketch will allow us to 'paint with type'

PFont myfont;// initiating a font va riable
int randchar,randSize; //initiating our variables
char letter;
color randColorR,randColorG,randColorB;

void setup(){
  size(500,500);
  background(200);
  myfont=loadFont("AbrilDisplay-Black-60.vlw"); //this font needs to be in your data folder
}


void draw(){
  fill(0);  //ink
  textFont(myfont); //typeface
  randchar=int(random(120)+1); //this will pluck a random character out of our 'type
  randSize=int(random(60)+1);
  letter=char(randchar);
  textSize(int(randSize)+1);
  
  if (mousePressed){
  text(letter,mouseX,mouseY);
  } // if mouse pressed, it will draw otherwise nope.
}


void keyPressed(){
  
    randColorR=int(map(mouseX, 0,width,0,255));
    randColorG=int(map(mouseY, 0,height,0,255));
    randColorB=int(map(mouseX+mouseY,0,width+height,0,255));
    
    background(randColorR,randColorG,randColorB);
}


Wiggle letters

var letter,size,rand,speed;
var wigglyLetters = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(32);
  textFont("Times");
}
function draw() {
  fill(255);
  background(0);
  //each of the wiggly letters that we have
  for (var i=0; i<wigglyLetters.length ; i++){
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();
  }
}
function mousePressed(){
   rand = int(random(65,160));
   letter = char(rand);
   size= int(random(6,96));
   speed=int(random(1,4));
   wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
}
class Wiggle {
 constructor(x, y, size, letter, speed){
   this.x= x;
   this.y= y;
   this.textSize=size;
   this.letter=letter;
   this.speed=speed;
 }
 wiggle() {  //randomwalker
   // x+=4  add 4 to the variable
   this.x += random(-this.speed, this.speed);
   this.y += random (-this.speed, this.speed);
 }
 display() {
   text(this.letter, this.x, this.y);
 }
}


Wiggle letters with typing keyboard

var letter,size,rand,speed,start;
var wigglyLetters = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(32);
  textFont("Times");
    start = 0;
}
function draw() {
  fill(255);
  background(0);
  //each of the wiggly letters that we have
  for (var i=0; i<wigglyLetters.length ; i++){
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();
  }
}
function mousePressed(){
   rand = int(random(65,160));
   letter = char(rand);
   size= int(random(6,100));
   speed=int(100-size)/4;
   wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
}
function keyTyped(){
  wigglyLetters.push(new Wiggle (start, height/2, 54, key, 2));
  start+=32;
}
class Wiggle {
 constructor(x, y, size, letter, speed){
   this.x= x;
   this.y= y;
   this.textSize=size;
   this.letter=letter;
   this.speed=speed;
 }
 wiggle() {  //randomwalker
   // x+=4  add 4 to the variable
   this.x += random(-this.speed, this.speed);
   this.y += random (-this.speed, this.speed);
   if (this.x <0){
     this.x += this.speed;
   }
 }
 display() {
   textSize(this.textSize);
   text(this.letter, this.x, this.y);
 }
}

For my voice library, I tried to import my local obj file and play with the angle of ratation. Meanwhile, I collected some images and recordings from my friends and strangers on Instagram. It's really interesting and meaningful to hear someone interpreted and described their memories and stories behind those items and what kind of emotion did the item brings to them. 

<img width="1362" alt="屏幕快照 2020-10-14 下午8 24 21" src="https://user-images.githubusercontent.com/68723373/96479661-d76d5780-126b-11eb-8e7a-3382d0165c03.png">


