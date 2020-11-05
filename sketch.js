var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 15);
  bullet.shapeColor="white";
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  
  
  bullet.collide(wall);
}

function draw() {
  background(255,255,255); 
background("black");

if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    bullet.shapeColor="red";
  }
 if(damage<10)
 {
 bullet.shapeColor="lightgreen";
 }
}
  drawSprites();
}