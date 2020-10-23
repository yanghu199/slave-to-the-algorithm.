Week8 

In this week we were introduced to speech.js, a really exciting function. Basically it will translate your speech into text in the screen, obviously it will create some wonderful results by combining stuffs like what we learned last week ‘wiggle letters’ or ‘draw with images ‘ some things like that. 

Based on the code from shuchen, Karen tried to create the code by herself. In this process she created a fascinating and cool one accidentally!(accident sometimes bring surprise!!)(I REALLY LIKE THIS ONE! and saw lots of potentials which could be further developed to something really fun! like it can be combined with projector and presented how many nonsenses we spoke everyday!)

<img width="597" alt="屏幕快照 2020-10-20 上午1 24 37" src="https://user-images.githubusercontent.com/68723373/96490176-0c30dd00-1273-11eb-8faa-0ce61b74039d.png">

here was the code:

let lang = navigator.language || 'en-US';
 let speechRec = new p5.SpeechRec(lang, gotSpeech);
 let continuous = true;
 let interim = true;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  speechRec.start(continuous,interim);
}


function draw() {
gotSpeech();
}

function gotSpeech(){
   if(speechRec.resultValue){
      createP(speechRec.resultString); 
    }
    fill(255);
    text(speechRec,width/2,height/2);
  
}

After debugged some mistakes, we got the workable one:

let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;
var runningText;
function setup(){
  background(0);
  createCanvas(windowWidth, windowHeight);
  speechRec.onResult = showResult;
  speechRec.start(continuous, interim);
 
}
function draw(){
 //gotSpeech();
 //text(runningText, width/2, height/2);
}
function showResult(){
 if (speechRec.resultValue === true) {
   background(0);
   textSize(72);
   fill(255);
   text(speechRec.resultString, 50, height/2);
}
}

function gotSpeech(){
    if(speechRec.resultValue){
       
      createP(speechRec.resultString);
      runningText=speechRec.resultString;
    }
    fill (255);
 
  }

Here is the basic coding without any interactions like a subtitle.

After that, karen tried to make a hybird between the previous code 'wiggle letters' with speech.js

var xPosition, yPosition,size,rand,letter,speed;
 var letterCount=0;
 var sentence = [];
 var wigglyLetters = [];
 
 let lang = navigator.language || 'en-US';
 let speechRec = new p5.SpeechRec(lang, gotSpeech);
 let continuous = true;
 let interim = true;
 var runningText;
 
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  textSize(32);
  fill(255);
  textFont("Times");
  xPosition = 100;
  yPosition = 100;
  speechRec.onResult = showResult;
  speechRec.start(continuous,interim);
  fill(120);
  text("say something...",50,height/2);
}


function draw() {
  background(0);
  fill(255,0,0);
 // gotSpeech();
//test(runningText, 0,0);
// for (var i=0; i<wigglyLetters.length ; i++){
    //wigglyLetters[i].wiggle();
   // wigglyLetters[i].display();
}

function showResult(){
 if (speechRec.resultValue === true) {
   //background(0);
   textSize(72);
   fill(255);
   sentence = speechRec.resultString;
   text(speechRec.resultString,50,50,windowWidth-100,windowHeight);
}
}

function mousePressed(){
   rand = int(random(65,160));
   letter = char(int(random(60,160))));
   size= int(random(6,96));
   speed=int(random(1,4));
   wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
   if (letterCount<sentence.length){
     letterCount++;
} else {
  letterCount = 0;
}  
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
   speed = map(mouseX,0,windowHeight,0,10);
   this.x += random(-this.speed, this.speed);
   this.y += random (-this.speed, this.speed);
 }
 display() {
   textSize(this.textSize);
   text(this.letter, this.x, this.y);
 }
}


function gotSpeech(){
   if(speechRec.resultValue === true){
    createP(speechRec.resultString);
    }
    fill(255);
   runningTest=speechRec;
  
}


It inspired me that what if I use speech rather than text to input my collage machine? Directly mix the search function with speech.js together is not working, I need to let input = speechRec.resultValue , and a function like keyword matching??, and let word = speechRec.resultValue, word match with speech, and pop images. 

let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true, interim = true;
var bg;
var set = {};
let img1;
//const keyword = happy;

function preload() {

  img1=loadImage('img/1.png');

  bg = loadImage('img/bg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  frameRate(2);
  speechInit();
  // wordMatch('vanity')

}


function speechInit() {
  speechRec.onResult = function () {

    if (speechRec.resultValue === true) {
      let word = speechRec.resultString;
      console.log(set);
      if (!set[word]) {
        set[word] = true;
        wordMatch(word);
      }
    }
  };
  speechRec.onEnd = function () {
    speechRec.start(continuous, interim);
  }
  speechRec.start(continuous, interim);
}


function popImage() { 
  let x = windowWidth * 0.10;
  let y = windowHeight * 0.20;
  let w = (50, 50);
  let h = (100,100);
  image(img1, x, y, w, h);//size
}

function gotSpeech() {
  if (speechRec.resultValue) {
    createP(speechRec.resultString);
  }
  fill(255);
}


function wordMatch(speech) {
 // const keyword = happy;
  console.log(speech);
  let result = [];
  let words = keyword('happy');
  let m = match(speech, words);
      if (m) {
        popImage(img1);
      }
    
  
}
//const keyword = happy;

It failed. 'Uncaught ReferenceError: keyword is not defined at wordMatch (speechmatch.js:70)'
something wrongs with the match function. And obviously I couldn't use the specific keyword for 'let words' because I had nearly 200-300 keywords and 94 images !! I needed to find some more efficient method. 

For my 3d library, I followed the tutorial in youtube to learn how to input a model with three.js. but also failed...

'Failed to load resource: the server responded with a status of 404 (Not Found)'

Then I looked back to the tutorial and noticed he put his three.model.js into the build folder. Initially, I thought I could change the folder name and just typed it in './xxx.obj', but it seemed like everyone all used the folder name 'build'. Therefore I put it in the 'build' folder, and it worked!!

my code: https://github.com/yanghu199/test/tree/main/obj-test-norotate
