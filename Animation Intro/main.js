// Animation Intro

//Setup Canvas and Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Global Variables
let rectX = 100;
let rectSize = 80;
let rectBlue = 255;
let rectRed = 0;
let rectGreen = 0;
let spaceKeyIsPressed = false;

let frameCount = 0;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
  //Update Variables
  //rectX += Math.random() * 10 - 5;
  if (spaceKeyIsPressed) {
    rectX += 1;
    rectSize += Math.random() * 2 - 1;
    rectBlue--;
    rectRed++;
  }

  //Draw a Background
  ctx.fillStyle = "cyan";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a Square
  ctx.fillStyle = "rgb(" + rectRed + ", " + rectGreen + ", " + rectBlue + ")";
  ctx.fillRect(rectX, 150, rectSize, rectSize);

  requestAnimationFrame(loop);
}

//Event Stuff

//Used to detect when left click is pressed
//document.addEventListener("mousedown", mousedownHandler);

//Use to detect when left click isn't pressed
//document.addEventListener("mouseup", mouseupHandler);

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  if (event.code == "Space") {
    spaceKeyIsPressed = true;
  }
}

function keyupHandler(event) {
  if (event.code == "Space") {
    spaceKeyIsPressed = false;
  }
}
