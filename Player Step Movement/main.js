//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Play with Player Movement

//Setup Canvas and Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let player = {
  x: 375,
  y: 550,
  w: 50,
  h: 50,
  // xSpeed: 0,
  // ySpeed: 0,
  speed: 5,
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
  if (arrowRightPressed) {
    player.x += player.speed;
  } else if (arrowLeftPressed) {
    player.x += -player.speed;
  }

  if (arrowUpPressed) {
    player.y += -player.speed;
  } else if (arrowDownPressed) {
    player.y += player.speed;
  }

  // Move Player by xSpeed and ySpeed
  // player.x += player.xSpeed;
  // player.y += player.ySpeed;

  // Draw a Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Player
  ctx.fillStyle = "orange";
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Request Another Animation Frame
  requestAnimationFrame(loop);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Key Event Stuff

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  // KeyIsPressed Movement
  console.log(event.code);
  if (!event.repeat) {
    if (event.code == "ArrowRight") {
      arrowRightPressed = true;
    } else if (event.code == "ArrowLeft") {
      arrowLeftPressed = true;
    } else if (event.code == "ArrowUp") {
      arrowUpPressed = true;
    } else if (event.code == "ArrowDown") {
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

// Key Pressed - Key Released Movement

//Key Down

// if (!event.repeat) {
//   if (event.code == "ArrowRight") {
//     player.xSpeed = player.speed;
//   } else if (event.code == "ArrowLeft") {
//     player.xSpeed = -player.speed;
//   } else if (event.code == "ArrowUp") {
//     player.ySpeed = -player.speed;
//   } else if (event.code == "ArrowDown") {
//     player.ySpeed = player.speed;
//   }
// }

//Key Up

// if (event.code == "ArrowRight" && player.xSpeed > 0) {
//   player.xSpeed = 0;
// } else if (event.code == "ArrowLeft" && player.xSpeed < 0) {
//   player.xSpeed = 0;
// } else if (event.code == "ArrowUp" && player.ySpeed < 0) {
//   player.ySpeed = 0;
// } else if (event.code == "ArrowDown" && player.ySpeed > 0) {
//   player.ySpeed = 0;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Contunuous Movement

// if (event.code == "ArrowRight") {
//   player.xSpeed = player.speed;
//   player.ySpeed = 0;
// } else if (event.code == "ArrowLeft") {
//   player.xSpeed = -player.speed;
//   player.ySpeed = 0;
// } else if (event.code == "ArrowUp") {
//   player.xSpeed = 0;
//   player.ySpeed = -player.speed;
// } else if (event.code == "ArrowDown") {
//   player.xSpeed = 0;
//   player.ySpeed = player.speed;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Step movement

// if (!event.repeat) {
// if (event.code == "ArrowRight") {
// player.x = player.x + 50;
// } else if (event.code == "ArrowLeft") {
// player.x = player.x - 50;
// } else if (event.code == "ArrowUp") {
// player.y = player.y - 50;
// } else if (event.code == "ArrowDown") {
// player.y = player.y + 50;
// }
//}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
