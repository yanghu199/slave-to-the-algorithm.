let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true, interim = true;
var images = [], bg
var set = {}
//loae image
function preload() {
  for (let i = 0; i < 94; i++) {
    images.push(loadImage('img/' + (i + 1) + '.png'))
  }

  bg = loadImage('img/bg.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  frameRate(2);
  speechInit();
  // wordMatch('vanity')
  noLoop()
}

//initialize speech
function speechInit() {
  speechRec.onResult = function () {

    if (speechRec.resultValue === true) {
      let word = speechRec.resultString
      console.log(set)
      if (!set[word]) {
        set[word] = true
        wordMatch(word)
      }
    }
  };
  speechRec.onEnd = function () {
    speechRec.start(continuous, interim)
  }
  speechRec.start(continuous, interim); //start to recognize
}

///pop image randomly 
function popImage(idx) {
  let img = images[idx] //image id1..2..3..4..

  let minX = windowWidth * 0.30, minY = windowHeight * 0.16
  let maxX = minX + 350, maxY = minY + 320
  let x = abs(random(minX, maxX))
  let y = abs(random(minY, maxY))
  let w = abs(random(150, 200))
  let h = abs(random(150, 200))
  image(img, x, y, w, h)//size of images
}

function gotSpeech() {
  if (speechRec.resultValue) {
    createP(speechRec.resultString);
  }
  fill(255);
}

//match result with keywords and images
function wordMatch(speech) {
  console.log(speech)
  let result = []
  for (let i = 0; i < keywords.length; i++) {
    let words = keywords[i].keyword
    let idx = keywords[i].id

    for (let j = 0; j < words.length; j++) {
      let m = match(speech, words[j])
      if (m) {
        popImage(idx)
      }
    }
  }
}


const keywords = [{ id: 1, keyword: ['fear', 'afraid', 'terrified', 'despair', 'depression', 'anxious', 'anxiety', 'pressure', 'dreadful', 'strange', 'distressed', 'panic', '恐惧'] },
{ id: 2, keyword: ['complicated', 'hard', 'difficult', 'confuse', 'confusing', 'satisfied', 'contented', 'complacence', '复杂'] },
{ id: 3, keyword: ['vanity', 'vain', 'vague', 'fancy', 'satisfied', 'expensive', 'luxurious', 'hollow', 'inane', 'happy', '快乐'] },
{ id: 4, keyword: ['fear', 'weird', 'strange', 'awkward', 'embarrassed', '尴尬'] },
{ id: 5, keyword: ['weird', 'strange', 'funny', 'mock', 'derision', 'awkward', 'embarrassed', '尴尬'] },
{ id: 6, keyword: ['escape', 'addicted', 'obsessed', 'distressed', 'sad', 'sadness', 'pressure', 'anxiety', 'panic', 'mad', 'crazy', 'worried', 'anxious', 'pensive', '焦虑'] },
{ id: 7, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 8, keyword: ['happy', 'sweet', 'attaching', 'memory', 'nostalgic', 'vivacious', 'cheerful', 'optimistic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '快乐'] },
{ id: 9, keyword: ['annoyed', 'frustrated', 'peeved', 'cranky', 'crabby', 'bored', 'impatient', 'rankled', '烦人'] },
{ id: 10, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 11, keyword: ['annoyed', 'frustrated', 'peeved', 'cranky', 'crabby', 'bored', 'impatient', 'rankled', '烦人'] },
{ id: 12, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 13, keyword: ['sweet', 'attaching', 'memory', 'nostalgic', 'vivacious', '依赖'] },
{ id: 14, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 15, keyword: ['happy', 'sweet', 'cool', 'curious', 'addicted', 'cheerful', 'optimistic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '快乐'] },
{ id: 16, keyword: ['happy', 'sweet', 'cool', 'cheerful', 'optimistic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '美好'] },
{ id: 17, keyword: ['happy', 'sweet', 'cool', 'cheerful', 'optimistic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '美好'] },
{ id: 18, keyword: ['happy', 'sweet', 'cool', 'cheerful', 'optimistic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '美好'] },
{ id: 19, keyword: ['happy', 'sweet', 'cool', 'cheerful', 'optimistic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '美好'] },
{ id: 20, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 21, keyword: ['happy', 'sweet', 'curious', 'crazy', 'passion', '快乐'] },
{ id: 22, keyword: ['useful', '有用'] },
{ id: 23, keyword: ['pensive', 'hard', '忧郁'] },
{ id: 24, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 25, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 26, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 27, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 28, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 29, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 30, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 31, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 32, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 33, keyword: ['happy', 'sweet', 'elated', 'vanity', 'fancy', 'satisfied', 'vain', 'hollow', 'inane', '虚荣'] },
{ id: 34, keyword: ['happy', 'sweet', 'memory', 'nostalgic', 'vivacious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '快乐'] },
{ id: 35, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '快乐'] },
{ id: 36, keyword: ['disenchanted', 'unnerved', 'nervious', 'awkward', 'embarrassed', '尴尬'] },
{ id: 37, keyword: ['nostalgic', 'vivacious', 'curious', 'fidgety', 'awkward', 'embarrassed', '尴尬'] },
{ id: 38, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 39, keyword: ['curious', 'cool', 'funny', 'interesting', '有趣'] },
{ id: 40, keyword: ['beautiful', 'calm', 'cool', 'meaning', '有趣'] },
{ id: 41, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 42, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '快乐'] },
{ id: 43, keyword: ['curious', 'cool', 'funny', 'interesting', 'nothing', '有趣'] },
{ id: 44, keyword: ['curious', 'cool', 'interesting', '有趣'] },
{ id: 45, keyword: ['interesting', 'cool', 'fab', '有趣'] },
{ id: 46, keyword: ['interesting', 'beautiful', '有趣'] },
{ id: 47, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', '美好'] },
{ id: 48, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 49, keyword: ['unnerved', 'nervious', 'fear', 'terrified', 'distressed', 'sad', 'sadness', 'pressure', 'anxiety', 'panic', 'mad', 'crazy', 'worried', 'anxious', 'pensive', '焦虑'] },
{ id: 50, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 51, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 52, keyword: ['curious', 'cool', 'interesting', '有趣'] },
{ id: 53, keyword: ['curious', 'cool', 'interesting', '有趣'] },
{ id: 54, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 55, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '美好'] },
{ id: 56, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '美好'] },
{ id: 57, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 58, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 59, keyword: ['unnerved', 'nervious', 'fear', 'terrified', 'distressed', 'sad', 'sadness', 'pressure', 'anxiety', 'panic', 'mad', 'crazy', 'worried', 'anxious', 'pensive', '焦虑'] },
{ id: 60, keyword: ['annoyed', 'frustrated', 'peeved', 'cranky', 'crabby', 'bored', 'impatient', 'rankled', '烦人'] },
{ id: 61, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 62, keyword: ['beautiful', 'calm', 'peace', '美好'] },
{ id: 63, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 64, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 65, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 66, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 67, keyword: ['annoyed', 'frustrated', 'peeved', 'cranky', 'crabby', 'bored', 'impatient', 'rankled', 'angry', 'mad', '烦人'] },
{ id: 68, keyword: ['sad', '伤心'] },
{ id: 69, keyword: ['curious', '好奇'] },
{ id: 70, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 71, keyword: ['annoyed', 'frustrated', 'peeved', 'cranky', 'crabby', 'bored', 'impatient', 'rankled', 'angry', 'mad', '烦人'] },
{ id: 72, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 73, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 74, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 75, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 76, keyword: ['energy', 'happy', 'excited', 'playful', '美好'] },
{ id: 77, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 78, keyword: ['happy', 'passion', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 79, keyword: ['happy', 'passion', 'crazy', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 80, keyword: ['curious', 'cool', 'interesting', 'fun', '有趣'] },
{ id: 81, keyword: ['happy', 'passion', 'crazy', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 82, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 83, keyword: ['happy', 'passion', 'crazy', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 84, keyword: ['curious', '好奇'] },
{ id: 85, keyword: ['unnerved', 'disappointed', 'nervious', 'fear', 'terrified', 'distressed', 'sad', 'sadness', 'pressure', 'anxiety', 'addicted', 'panic', 'mad', 'crazy', 'worried', 'anxious', 'pensive', '焦虑'] },
{ id: 86, keyword: ['happy', 'passion', 'crazy', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 87, keyword: ['curious', 'disappointed', 'nervious', 'fear', 'terrified', 'distressed', 'sad', 'sadness', 'pressure', 'anxiety', 'addicted', 'panic', 'mad', 'crazy', 'worried', 'anxious', 'pensive', '上瘾'] },
{ id: 88, keyword: ['happy', 'passion', 'crazy', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '快乐'] },
{ id: 89, keyword: ['memory', 'attaching', 'sweet', '依赖'] },
{ id: 90, keyword: ['serene', 'calm', 'neutral', 'tranquil', 'nothing', '平静'] },
{ id: 91, keyword: ['happy', 'passion', 'crazy', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '美好'] },
{ id: 92, keyword: ['happy', 'passion', 'crazy', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '美好'] },
{ id: 93, keyword: ['happy', 'passion', 'memory', 'attaching', 'energy', 'cool', 'curious', 'cheerful', 'optimstic', 'lively', 'delighted', 'pleased', 'excited', 'gleeful', 'playful', 'sweet', '美好'] },
{ id: 94, keyword: ['happy', 'sweet', 'memory', 'nostalgic', 'attaching', '依恋'] }]
