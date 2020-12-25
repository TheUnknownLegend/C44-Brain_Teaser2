var bg1 , bg2 , bg3;
var welcome , welcomeMusic;
var bgMusic;
var hero , heroBack;
var message;
var drAni;
var doorImg;
var platform;
var plPlatform;

var dr1,dr2,dr3;

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

  messageImg = loadImage("assets/message.png");

  doorImg = loadAnimation("assets/door1.png")

  drAni = loadAnimation("assets/door1.png","assets/door2.png","assets/door3.png","assets/door4.png","assets/door5.png","assets/door6.png",);

  platform = loadImage("assets/platform.png");

  plPlatform = loadImage("assets/plPlatform.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  btnNext = createButton("Next");
  btnNext.mousePressed(changeLevel);
  btnNext.position(width/2 - 30, height/1.2);
  btnNext.hide();

  pauseBtn = createButton("Play/Pause");
  pauseBtn.mousePressed(pauses);
  pauseBtn.position(width/1.1 - 30, height/1.1);
  
  message = createSprite(1000,60,10,10);
  message.addImage(messageImg);
  message.scale = 0.5;
  message.visible = false;

  dr1 = createSprite(width/7,height/2.1,10,10);
  dr1.addAnimation("closed",doorImg);
  dr1.addAnimation("animation",drAni);
  dr1.scale = 1.5;
  dr1.visible = false;
  
  dr2 = createSprite(width/2,height/2.1,10,10);
  dr2.addAnimation("closed",doorImg);
  dr2.addAnimation("animation",drAni);
  dr2.scale = 1.5;
  dr2.visible = false;

  dr3 = createSprite(width/1.2,height/2.1,10,10);
  dr3.addAnimation("closed",doorImg);
  dr3.addAnimation("animation",drAni);
  dr3.scale = 1.5;
  dr3.visible = false;

}

function draw() { 

  if(gameState === 0){
    background(welcome);
  
    image(hero , width/1.2 , height/6.5)

    //cnv.mousePressed( image(message ,200 ,100 , 500 ,500));

    if(!welcomeMusic.isPlaying()){
    welcomeMusic.loop();
    }
  }
  else if(gameState === 1){
    background(bg1);
    btnNext.hide();
    message.visible = false;

    dr1.visible = true;
    dr2.visible = true;
    dr3.visible = true;
    image(platform, width/7 - 170 , height/1.5,platform.width/2,platform.height/2  );
    image(platform, width/2 - 170 , height/1.5,platform.width/2,platform.height/2  );
    image(platform, width/1.2 - 170 , height/1.5,platform.width/2,platform.height/2 );

    image(plPlatform, width/3 - 170 , height/1.4 ,plPlatform.width/2,plPlatform.height/2 );

    image(heroBack , width/3.5, height/2.5 , heroBack.width/2 , heroBack.height/2)

  }
  else if(gameState === 2){
    background(bg2);
    
  }
  else if(gameState === 3){
    background(bg3);
  }

 
  drawSprites();

  text (mouseX + "," + mouseY , mouseX , mouseY);
}

function mouseClicked() {
  if (gameState === 0) {
    message.visible = true;
    btnNext.show();
  } 
}

function changeLevel(){
  gameState = 1;
}

function pauses(){
  welcomeMusic.pause();
}