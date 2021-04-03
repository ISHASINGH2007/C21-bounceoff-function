var fixedRect, movingRect;
var rec1,rec2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rec1=createSprite(100,300,50,50);
  rec1.shapeColor="orange";

  rec2=createSprite(700,300,30,60);
  rec2.shapeColor="blue";

  rec1.velocityX=6;
  rec2.velocityX=-6;
}

function draw() {
  background(0,0,0);  

 bounce(movingRect,fixedRect);
 bounce(rec1,rec2);
  
  drawSprites();
}


