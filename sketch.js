var car, wall;
var speed, weight;



function setup() {
  createCanvas(1600, 400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height / 2)
  wall.shapeColor = color(80, 80, 80)
  speed = random(55, 90)
  weight = random(400, 1500)
  car.velocityX = speed;
}

function draw() {
  background("black");
  drawSprites();
  if (isRectangleTouching(car, wall)) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22500;
    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    } else if ( deformation >= 100 && deformation <= 180) {
      car.shapeColor = color(230, 230, 0);
    } else if ( deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    textSize(32);
    stroke("yellow")
    text("Deformation:"+ Math.round(deformation), 750,300)
  }

}

function isRectangleTouching(r1, r2) {

  if (abs(r1.x - r2.x) <= (r1.width + r2.width) / 2 &&
    abs(r1.y - r2.y) <= (r1.height + r2.height) / 2) {
    return true;
  } else {
    return false;
  }
}