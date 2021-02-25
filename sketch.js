var backgroundImg,background1, playerImg, player, background2, background2Img, playerLeft,
playerRight, background3Img, background4Img, sceneCount=0



function preload(){
  backgroundImg=loadImage("images/Road A.jpg")
  playerImg= loadAnimation("images/pl1.png","images/pl2.png", "images/pl3.png",
   "images/pl4.png", "images/pl5.png", "images/pl6.png", "images/pl7.png", "images/pl8.png")
   background2Img=loadImage("images/Road c.jpg")
   background3Img = loadImage("images/Road D.jpg")
   background4Img = loadImage("images/Road B.jpg")

playerLeft=loadAnimation("images/pl1left.png","images/pl2left.png","images/pl3left.png",
"images/pl4left.png","images/pl5left.png","images/pl6left.png","images/pl7left.png","images/pl8left.png")
playerRight=loadAnimation("images/pl1right.png","images/pl2right.png","images/pl3right.png",
"images/pl5right.png","images/pl6right.png","images/pl7right.png","images/pl8right.png")

}
function setup() {
  
  createCanvas(windowWidth, windowHeight);

  background1=createSprite(width/2, height/2, 100, 100);
  background1.scale=3
  background1.addImage(backgroundImg)

  
  

  player = createSprite(width/2, height, 20, 20)
   player.scale = 1.5
  player.addAnimation("running",playerImg)
  player.addAnimation("runningLeft",playerLeft)
player.addAnimation("runningRight", playerRight)
  
}

function draw() {
  background("white"); 
  if(player.y<100 &&sceneCount===0) {
//player.velocityY=0
background1.addImage(background2Img)
background1.scale=1
player.y=height;
player.scale=1.5
sceneCount=1
  }
  else if(player.x<0){
    background1.addImage(background3Img)
    background1.scale=1
    player.y=height
    player.x=width/2
    player.scale=1.5
    sceneCount=2
    player.changeAnimation("running", player)
  }
  else if(player.y<20){
    background1.addImage(background4Img)
    background1.scale=3
    player.y=height
    player.x=width/2
    player.scale=1.5
    sceneCount=3
  }
  if(keyIsDown(UP_ARROW)){
    player.y=player.y-5
    
    player.changeAnimation("running", player)

  }
  else if(keyIsDown(LEFT_ARROW)){
    player.x= player.x-5
    
    player.changeAnimation("runningLeft", playerLeft)
  }
  else if(keyIsDown(RIGHT_ARROW)){
    player.x= player.x+5
    player.changeAnimation("runningRight", playerRight)
  }

  // if(player.scale>=0){
  // player.scale -= 0.003
  
  // }
  drawSprites();
}