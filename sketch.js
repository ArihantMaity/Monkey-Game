
var monkey , monkey_running
var banana,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var b;
var survivaltime,score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,270);
  
  monkey=createSprite(80,200,20,20);
  monkey.addAnimation("monkey running",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,250,1200,10);
  ground.velocityX = -4;
  console.log(ground.x);

  Foodgroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {

  background("cyan");
  
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 0.1;
  
  if(keyDown("space")&&monkey.y>214){
    monkey.velocityY = -4;
  }
  
  //console.log(monkey.y);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  stroke("white");
  textSize = 20;
  fill("white");
  text("Score:"+score,500,50);
  
  if(monkey.isTouching(Foodgroup)){
    score = score +1;
  }
  
  
  stroke("black");
  textSize = 20;
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("survival time : "+survivaltime,100,50);
  
  
  
  obstacles();
  bananas();
  drawSprites();
}

function bananas(){
  if(frameCount%80===0){
    banana = createSprite(600,300,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.09;
    banana.y=Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime = 200;
    Foodgroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(600,235,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle);
    obstacle.scale = 0.1;
    obstacle.lifetime = 120;
  }
}


