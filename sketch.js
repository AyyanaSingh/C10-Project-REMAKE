var sea,ship;
var seaImg,shipImg,shipImg2;

function preload(){
  //uncomment the code to add animation to ship 

  shipImg = loadImage("ship-1.png");
  shipImg2 = loadImage("ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup()
{
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg, shipImg2);
  ship.scale =0.25;
}

function draw() 
{
  background(0);
  sea.velocityX = -3;

  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width;
    sea.x = sea.width/8;
    sea.y = height;
  }
 
  drawSprites();
}