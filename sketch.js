function setup() {
  createCanvas(600, 1000);
  background("rgb(227,142,247)")
}

function draw() {
   
  stroke("rgb(83,83,219)");
  fill("rgb(151,101,228)");
  
  if(mouseIsPressed){
    circle(mouseX, mouseY, 10, 15);
  }
}


