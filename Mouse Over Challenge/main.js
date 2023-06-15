// Simple Paint

//Setup Canvas and Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let mouseX, mouseY;
let randNum = Math.random();

let xBlockRand = 200;
let yBlockRand = 275;

let xCircleRand = 600;
let yCircleRand = 275;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
  // Draw a square if mouseIsPressed
  if (
    mouseX >= xBlockRand &&
    mouseX <= xBlockRand + 100 &&
    mouseY >= yBlockRand &&
    mouseY <= yBlockRand + 50
  ) {
    //Update Variables
    (xBlockRand = xBlockRand + (Math.random() * 10 - 5)),
      (yBlockRand = yBlockRand + (Math.random() * 10 - 5));

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "red";
    ctx.fillRect(xBlockRand, yBlockRand, 100, 50);

    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(xCircleRand, yCircleRand, 50, 0, 2 * Math.PI);
    ctx.fill();
  } else if (
    mouseX >= xCircleRand - 50 &&
    mouseX <= xCircleRand + 50 &&
    mouseY >= yCircleRand - 50 &&
    mouseY <= yCircleRand + 50
  ) {
    (xCircleRand = xCircleRand + (Math.random() * 10 - 5)),
      (yCircleRand = yCircleRand + (Math.random() * 10 - 5));

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "gray";
    ctx.fillRect(xBlockRand, yBlockRand, 100, 50);

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(xCircleRand, yCircleRand, 50, 0, 2 * Math.PI);
    ctx.fill();
  } else {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "gray";
    ctx.fillRect(xBlockRand, yBlockRand, 100, 50);

    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(xCircleRand, yCircleRand, 50, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Loop the program
  requestAnimationFrame(loop);
}

//Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
