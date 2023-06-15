// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables
let row, column; // Row & Column of Mouse on the Map
let outputEl = document.getElementById("currentTile");

// Solution Functions...
function level1Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 4) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level2Solution() {
  if (column <= 2) {
    outputEl.innerHTML = "Hills";
  } else if (column <= 7 && column >= 3) {
    outputEl.innerHTML = "Sand";
  } else if (column >= 8) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "----";
  }
}

function level3Solution() {
  if (column <= 2) {
    outputEl.innerHTML = "Hills";
  } else if (column <= 7 && column >= 3) {
    outputEl.innerHTML = "Sand";
  } else if (column >= 8) {
    outputEl.innerHTML = "Hills";
  } else {
    outputEl.innerHTML = "----";
  }
}

function level4Solution() {
  if (row >= 3) {
    outputEl.innerHTML = "Sand";
  } else if (row <= 2) {
    outputEl.innerHTML = "Hills";
  } else {
    outputEl.innerHTML = "----";
  }
}

function level5Solution() {
  if (row >= 3 && row < 6) {
    outputEl.innerHTML = "Sand";
  } else if (row <= 2) {
    outputEl.innerHTML = "Hills";
  } else if (row >= 6) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "----";
  }
}

function level6Solution() {
  if (row <= 5 && row >= 2) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level7Solution() {
  if (row === 4 && column === 7) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level8Solution() {
  if (row === 5 || column === 2) {
    outputEl.innerHTML = "Tree";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level9Solution() {
  if (row <= 5 && column <= 5) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level10Solution() {
  if (column <= 1) {
    outputEl.innerHTML = "Hills";
  } else if (column <= 3 && column >= 2) {
    outputEl.innerHTML = "Tree";
  } else if (column >= 8) {
    outputEl.innerHTML = "Water";
  } else if (column <= 7 || column >= 4) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "----";
  }
}

function level11Solution() {
  if (column <= 5 && row <= 3) {
    outputEl.innerHTML = "Water";
  } else if (column > 5 && row <= 3) {
    outputEl.innerHTML = "Hills";
  } else if (column <= 5 && row > 3) {
    outputEl.innerHTML = "Sand";
  } else if (column > 5 && row > 3) {
    outputEl.innerHTML = "Tree";
  } else {
    outputEl.innerHTML = "----";
  }
}

function level12Solution() {
  if ((column <= 5 && row <= 4) || (column > 5 && row > 4)) {
    outputEl.innerHTML = "Water";
  } else if ((column > 5 && row <= 4) || (column <= 5 && row > 4)) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "----";
  }
}

function level13Solution() {
  if (column <= 9 && column >= 4 && row >= 2 && row <= 5) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Tree";
  }
}

function level14Solution() {
  if (column <= 4 && column >= 2 && row >= 1 && row <= 5) {
    outputEl.innerHTML = "Tree";
  } else if (column <= 10 && column >= 7 && row >= 3 && row <= 5) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}
