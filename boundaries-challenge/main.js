//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Play with Player Movement

//Setup Canvas and Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let player1 = {
  x: 200,
  y: 300,
  w: 50,
  h: 50,
  speed: 5,
};

let arrowRightPressed = false;
let arrowLeftPressed = false;
let arrowUpPressed = false;
let arrowDownPressed = false;

let player2 = {
  x: 550,
  y: 300,
  w: 50,
  h: 50,
  speed: 5,
};

let wKeyPressed = false;
let aKeyPressed = false;
let sKeyPressed = false;
let dKeyPressed = false;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
  // Logic

  // Move player based on what key is pressed / held down

  // Player 1
  if (dKeyPressed) {
    player1.x += player1.speed;
  }

  if (aKeyPressed) {
    player1.x += -player1.speed;
  }

  if (wKeyPressed) {
    player1.y += -player1.speed;
  }

  if (sKeyPressed) {
    player1.y += player1.speed;
  }

  // Wrap around commands
  if (player1.x > 800) {
    player1.x = -50;
  }

  if (player1.x < -50) {
    player1.x = 800;
  }

  if (player1.y > 600) {
    player1.y = -50;
  }

  if (player1.y < -50) {
    player1.y = 600;
  }

  // Player 2

  if (player2.x <= 750) {
    if (arrowRightPressed) {
      player2.x += player2.speed;
    }
  }

  if (player2.x >= 0) {
    if (arrowLeftPressed) {
      player2.x += -player2.speed;
    }
  }

  if (player2.y >= 0) {
    if (arrowUpPressed) {
      player2.y += -player2.speed;
    }
  }

  if (player2.y <= 550) {
    if (arrowDownPressed) {
      player2.y += player2.speed;
    }
  }

  // Move Player by xSpeed and ySpeed
  // player.x += player.xSpeed;
  // player.y += player.ySpeed;

  // Draw a Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Player 1
  ctx.fillStyle = "green";
  ctx.fillRect(player1.x, player1.y, player1.w, player1.h);

  ctx.fillStyle = "blue";
  ctx.fillRect(player2.x, player2.y, player2.w, player2.h);

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
    } else if (event.code == "ArrowLeft") {
      arrowLeftPressed = true;
    } else if (event.code == "ArrowUp") {
      arrowUpPressed = true;
    } else if (event.code == "ArrowDown") {
      arrowDownPressed = true;
    }

    if (event.code == "KeyD") {
      dKeyPressed = true;
    } else if (event.code == "KeyA") {
      aKeyPressed = true;
    } else if (event.code == "KeyW") {
      wKeyPressed = true;
    } else if (event.code == "KeyS") {
      sKeyPressed = true;
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

  if (event.code == "KeyD") {
    dKeyPressed = false;
  } else if (event.code == "KeyA") {
    aKeyPressed = false;
  } else if (event.code == "KeyW") {
    wKeyPressed = false;
  } else if (event.code == "KeyS") {
    sKeyPressed = false;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
