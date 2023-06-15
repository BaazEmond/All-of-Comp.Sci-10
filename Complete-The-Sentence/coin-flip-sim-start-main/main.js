// COIN FLIP SIMULATOR BY: BAAZ

//HTML Variables
let outputEl = document.getElementById("output");

//Add Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Generate Random Number
  let randNum = Math.random();
  console.log(randNum);

  //Simulate the Coin Flip

  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    console.log("Heads");
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    console.log("tails");
  }
}
