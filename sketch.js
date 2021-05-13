var aRect,bRect
function setup() {
  createCanvas(800,400);
  aRect = createSprite(400, 200, 50, 50);
  bRect = createSprite(400,400,100,150)
  aRect.shapeColor = "green"
  bRect.shapeColor = "green"

}

function draw() {
  background(255,255,255);  
  bRect.x = mouseX
  bRect.y = mouseY

  if(bRect.x-aRect.x <=bRect.width/2+aRect.width/2&&
     aRect.x-bRect.x <=bRect.width/2+aRect.width/2&&
     bRect.y-aRect.y <=bRect.height/2+aRect.height/2&&
     aRect.y-bRect.y <=bRect.height/2+aRect.height/2){
    aRect.shapeColor = "red"
    bRect.shapeColor = "red"
  }
  else{
    aRect.shapeColor = "green"
    bRect.shapeColor = "green"
  }
  drawSprites();
}