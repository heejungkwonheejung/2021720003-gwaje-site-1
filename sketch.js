function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   background(0);
}

function draw() {
 /*
  stroke(mouseX, 150, mouseY);
  strokeWeight (0.5);
  fill(150, 255, 170);

  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
torus(200, 80,3);
*/

  if (mouseIsPressed == true) {
    
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    torus( 220, 80, 8);
    fill(mouseX, 10, mouseY);
  } else {
     rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.03);
    rotateZ(frameCount * 0.03);
    torus( 200, 80, 5);
    stroke(mouseX, 120, mouseY);
    noFill();

  }
}

/*
if(mouseIsPressed){
   rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(200, 80,4);
 }
 */

