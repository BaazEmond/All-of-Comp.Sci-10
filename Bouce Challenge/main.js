//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bounce Challenge

//Setup Canvas and Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let square1 = {
  x: 300,
  y: 300,
  w: 50,
  h: 50,
  speed: 6,
};

let square2 = {
  x: 300,
  y: 300,
  w: 50,
  h: 50,
  speed: -6,
};

let square3 = {
  x: 300,
  y: 300,
  w: 50,
  h: 50,
  xSpeed: 6,
  ySpeed: 6,
};

let square4 = {
  x: 300,
  y: 300,
  w: 50,
  h: 50,
  xSpeed: -6,
  ySpeed: -6,
};

let square5 = {
  x: 300,
  y: 300,
  w: 50,
  h: 50,
  xSpeed: -6,
  ySpeed: 6,
};

let square6 = {
  x: 300,
  y: 300,
  w: 50,
  h: 50,
  xSpeed: 6,
  ySpeed: -6,
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
  // Logic
  square1.y += square1.speed;
  square2.x += square2.speed;
  square3.x += square3.xSpeed;
  square3.y += square3.ySpeed;
  square4.x += square4.xSpeed;
  square4.y += square4.ySpeed;
  square5.x += square5.xSpeed;
  square5.y += square5.ySpeed;
  square6.x += square6.xSpeed;
  square6.y += square6.ySpeed;

  // Move Blue Square
  if (square2.x <= 0) {
    square2.speed = square2.speed * -1;
  } else if (square2.x >= 750) {
    square2.speed = square2.speed * -1;
  }

  // Move Grren Square
  if (square1.y <= 0) {
    square1.speed = square1.speed * -1;
  } else if (square1.y >= 550) {
    square1.speed = square1.speed * -1;
  }

  // Move Orange Square
  if (square3.y <= 0) {
    square3.ySpeed = square3.ySpeed * -1;
  } else if (square3.y >= 550) {
    square3.ySpeed = square3.ySpeed * -1;
  }

  if (square3.x <= 0) {
    square3.xSpeed = square3.xSpeed * -1;
  } else if (square3.x >= 750) {
    square3.xSpeed = square3.xSpeed * -1;
  }

  // Move Red Square
  if (square4.y <= 0) {
    square4.ySpeed = square4.ySpeed * -1;
  } else if (square4.y >= 550) {
    square4.ySpeed = square4.ySpeed * -1;
  }

  if (square4.x <= 0) {
    square4.xSpeed = square4.xSpeed * -1;
  } else if (square4.x >= 750) {
    square4.xSpeed = square4.xSpeed * -1;
  }

  // Move Purple Square
  if (square5.y <= 0) {
    square5.ySpeed = square5.ySpeed * -1;
  } else if (square5.y >= 550) {
    square5.ySpeed = square5.ySpeed * -1;
  }

  if (square5.x <= 0) {
    square5.xSpeed = square5.xSpeed * -1;
  } else if (square5.x >= 750) {
    square5.xSpeed = square5.xSpeed * -1;
  }

  // Move Yellow Square
  if (square6.y <= 0) {
    square6.ySpeed = square6.ySpeed * -1;
  } else if (square6.y >= 550) {
    square6.ySpeed = square6.ySpeed * -1;
  }

  if (square6.x <= 0) {
    square6.xSpeed = square6.xSpeed * -1;
  } else if (square6.x >= 750) {
    square6.xSpeed = square6.xSpeed * -1;
  }

  // Draw a Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // ADHD Curer
  ctx.lineWidth = 10;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(square4.x + 25, square4.y + 25);
  ctx.lineTo(square2.x + 25, square2.y + 25);
  ctx.lineTo(square5.x + 25, square5.y + 25);
  ctx.lineTo(square1.x + 25, square1.y + 25);
  ctx.lineTo(square3.x + 25, square3.y + 25);
  ctx.lineTo(square6.x + 25, square6.y + 25);
  ctx.closePath();
  ctx.stroke();

  // Draw Square 1
  ctx.fillStyle = "green";
  ctx.fillRect(square1.x, square1.y, square1.w, square1.h);

  // Draw Square 2
  ctx.fillStyle = "blue";
  ctx.fillRect(square2.x, square2.y, square2.w, square2.h);

  // Draw Square 3
  ctx.fillStyle = "orange";
  ctx.fillRect(square3.x, square3.y, square3.w, square3.h);

  // Draw Square 4
  ctx.fillStyle = "red";
  ctx.fillRect(square4.x, square4.y, square4.w, square4.h);

  // Draw Square 5
  ctx.fillStyle = "purple";
  ctx.fillRect(square5.x, square5.y, square5.w, square5.h);

  // Draw Square 6
  ctx.fillStyle = "yellow";
  ctx.fillRect(square6.x, square6.y, square6.w, square6.h);

  // Request Another Animation Frame
  requestAnimationFrame(loop);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
