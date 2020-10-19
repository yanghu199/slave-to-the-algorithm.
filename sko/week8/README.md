Week8 

In this week we were introduced speech.js, a really excited function. Basically it will translate your speech into text in screen, obviously it will create some wonderful results with combining stuffs like what we learned last week ‘wiggle letters’ or ‘draw with images ‘ some sort of things like that. 

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

Here is the basic coding without any interactions, just like a subtitle. It makes me reminds the subtitles in youtube and Siri. It inspired me that what if I use speech rather than text for the input of my collage machine ? Directly mix the search function with speech.js together is not working, I need to let input = speechRec.resultValue , and a function like keyword matching?? ,and let word = speechRec.resultValue, word match with speech, and pop images. 

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

For my 3d library, I followed the tutorial in youtube to learn how to input model with three.js. but also failed...
'Failed to load resource: the server responded with a status of 404 (Not Found)'
my code: https://github.com/yanghu199/test/tree/main/obj-test-norotate

Then I looked back to the tutorial and noticed he put his three.model.js into the build folder. Initially I thought I could change the folder name and just typed it in './xxx.obj', but seemed like everyone all used the folder name 'build'. Therefore I put it in the 'build' folder, and it worked!!


