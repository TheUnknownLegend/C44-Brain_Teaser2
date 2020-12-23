var bg1 , bg2 , bg3;
var welcome , welcomeMusic;
var bgMusic;
var hero , heroBack;
var message;

var gameState = 0;

var scene = 0;

var cnv;

function preload(){

  bg1 = loadImage("assets/bg1.jpg");
  bg2 = loadImage("assets/bg2.jpg");
  bg3 = loadImage("assets/bg3.jpg");

  welcome = loadImage("assets/welcome.png");
  welcomeMusic = loadSound("assets/welcom.mp3");

  bgMusic = loadSound("assets/music.mp3");

  hero = loadImage("assets/hero.png");
  heroBack = loadImage("assets/heroBack.png");

  message = loadImage("assets/message.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cnv = createSprite(windowWidth, windowHeight,width/2 , height/2) ;

  welcomeMusic.loop(); 
}

function draw() { 

  if(gameState === 0){
    background(welcome);
  
   image(hero , width/1.2 , height/6.5)

   cnv.mousePressed( image(message ,200 ,100 , 500 ,500));


  }
  else if(gameState === 1){
    
  }
  else if(gameState === 2){
    
  }
  else if(gameState === 3){
    
  }


  drawSprites();
}