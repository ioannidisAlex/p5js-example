/*function setup() {
  createCanvas(400, 400);
}
var dY;
let c=20;*/

window.addEventListener('wheel', (event) => {
  //c.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';
  var dY = event.deltaY;
  var flag = true
  console.log(speed);
  //an einai pros ta panw to scroll tote au3ise speed)
  if (dY < 0) speed += 0.1;
  else speed -= 0.1;
  if (speed <=10 && speed>=4)
    flag= false;
  if (speed <=10 && speed>=4 && dY>0)
    speed -= 0.3;
    
  if (speed > 3 && 
      flag == true &&
      dY <0){
    speed = 10;
    flag = false
  }
  if (speed <0.1) speed = 0.1;
});
/*
let x=0,y=0;
function draw() {
  background(c);
  ellipse(x,y,20,20);
  x+=0.01;
  y+=0.02;
  requestAnimationFrame(draw);
}*/

/**
Bryn Mawr College, Department of Computer Science <br>
Classic starfield using 2D transformations and z-scaling.
*/

// Array of stars
var stars = [];

function setup(){
  createCanvas(windowWidth,windowHeight);
  //smooth();
  stroke(255);
  strokeWeight(5);
  for (let i=0; i<1700; i++) 
    stars[i] = new Star();
}
function draw(){
  background(0);
  
  // Draw all stars wrt center of screen
  translate(0.5*width, 0.5*height);
  
  // Update and draw all stars
  for (let i=0; i<stars.length; i++) {
    stars[i].update();
    stars[i].ddraw();
  }
}

var speed = 0.4;
class Star {
  constructor() {
    this.x = random(-5000, 5000);
    this.y = random(-5000, 5000);
    this.z = random(0, 2000);
    this.scaleZ = random(0.0001,0.00015)*(2000.0-this.z);
  }
  
  update() {
    this.z=this.z-speed*10;        // Move star closer to viewport
    if (this.z <= 0.0) // Reset star if it passes viewport
      this.reset();
  }
  
  reset() {
    // Reset star to a position far away
    this.x = random(-5000, 5000);
    this.y = random(-5000, 5000);
    this.z = 2000.0;
  }

  ddraw() {
    // Project star only viewport
    var offsetX = 100.0*(this.x/this.z);
    var offsetY = 100.0*(this.y/this.z);
    this.scaleZ = 0.0001*(2000.0-this.z);
    //console.log(scaleZ);
    // Draw this star
    push();
    translate(offsetX, offsetY);
    scale(this.scaleZ);
    ellipse(0,0,20,20);
    pop();
  }
}
