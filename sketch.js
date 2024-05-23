function setup() {
  createCanvas(600, 600);
  background("rgb(227,142,247)")
}

function draw() {
   
  stroke("rgb(83,83,219)");
  fill("rgb(151,101,228)");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
}


