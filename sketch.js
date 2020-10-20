var gameState;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  createCanvas(600, 200);

  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(300,195,1200,10);
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  score = 0;
  
  gameState="play";
}


function draw() {
  background("lightblue");
  
  textSize(15);
  text("Score: "+ score, 500,30);
  
  textSize(15);
  survivalTime=Math.round(frameCount/frameRate());
  text("Survival Time: "+survivalTime,470,50);
  

  if(gameState==="play")
    {
      ground.velocityX =-5;
      
       if (ground.x < 0)
       {
      ground.x = ground.width/2;
       }
      
    spawnObstacles();
      spawnBananas();
      
      if(keyDown("space")&& monkey.y >= 150) 
      {
        monkey.velocityY = -12;
      }
      
      monkey.velocityY=monkey.velocityY+0.9;
      monkey.collide(ground);
      
    }
  
   
  
  drawSprites();
}

function spawnObstacles()
{
 if (frameCount%80===0)
 {
   obstacle = createSprite(600,175,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX =-5;
   obstacle.scale=0.1;
   obstacle.lifetime=200;
   obstacleGroup.add(obstacle);
  }
}

function spawnBananas()
{
 if (frameCount%30===0)
 {
   banana = createSprite(Math.round(random(600,650)),Math.round(random(100,140)),10,40);
   banana.addImage(bananaImage);
   banana.velocityX =-5;
   banana.scale=0.1;
   banana.lifetime=200;
   FoodGroup.add(banana);
  }
}







