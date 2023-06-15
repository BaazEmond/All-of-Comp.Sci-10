//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Play with Player Movement

//Setup Canvas and Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables

let player = {
  x: 250,
  y: 300,
  w: 50,
  h: 50,
  speed: 10,
};

let arrowRightPressed = false;
let arrowLeftPressed = false;
let arrowUpPressed = false;
let arrowDownPressed = false;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
  // Logic

  // Move player based on what key is pressed / held down

  // Player

  if (player.x <= 750) {
    if (arrowRightPressed) {
      player.x += player.speed;
    }
  }

  if (player.x >= 0) {
    if (arrowLeftPressed) {
      player.x += -player.speed;
    }
  }

  if (player.y >= 0) {
    if (arrowUpPressed) {
      player.y += -player.speed;
    }
  }

  if (player.y <= 550) {
    if (arrowDownPressed) {
      player.y += player.speed;
    }
  }

  // Border

  //Top

  if (
    player.x >= 501 &&
    player.x <= 599 &&
    player.y >= 160 &&
    player.y <= 200
  ) {
    player.y += -player.speed;
    player.y = 150;
  }

  if (
    player.x >= 501 &&
    player.x <= 599 &&
    player.y <= 395 &&
    player.y >= 350
  ) {
    player.y += player.speed;
    player.y = 400;
  }

  if (
    player.x >= 500 &&
    player.x <= 525 &&
    player.y <= 399 &&
    player.y >= 151
  ) {
    player.x += player.speed;
    player.x = 500;
  }

  if (
    player.x >= 550 &&
    player.x <= 590 &&
    player.y <= 399 &&
    player.y >= 151
  ) {
    player.x += -player.speed;
    player.x = 600;
  }

  // Draw a Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Player
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Draw Border
  ctx.fillStyle = "gray";
  ctx.fillRect(550, 200, 50, 200);

  // Request Another Animation Frame
  requestAnimationFrame(loop);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Key Event Stuff

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  // KeyIsPressed Movement
  if (!event.repeat) {
    if (event.code == "ArrowRight") {
      arrowRightPressed = true;
    }
    if (event.code == "ArrowLeft") {
      arrowLeftPressed = true;
    }

    if (event.code == "ArrowUp") {
      arrowUpPressed = true;
    }

    if (event.code == "ArrowDown") {
      arrowDownPressed = true;
    }
  }
}

function keyupHandler(event) {
  // Key pressed - Key released Movement
  if (event.code == "ArrowRight") {
    arrowRightPressed = false;
  } else if (event.code == "ArrowLeft") {
    arrowLeftPressed = false;
  } else if (event.code == "ArrowUp") {
    arrowUpPressed = false;
  } else if (event.code == "ArrowDown") {
    arrowDownPressed = false;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
