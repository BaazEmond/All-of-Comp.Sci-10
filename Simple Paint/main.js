// Simple Paint

//Setup Canvas and Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Global Variables
let mouseIsPressed = false;
let mouseX, mouseY;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
  //Update Variables

  // Dwaw a circle if mouseIsPressed
  if (mouseIsPressed) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Loop the program
  requestAnimationFrame(loop);
}

//Event Stuff

document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);

function mousedownHandler(event) {
  mouseIsPressed = true;
  console.log(event);
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  console.log(cnvRect);
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
  // console.log(event);
}
