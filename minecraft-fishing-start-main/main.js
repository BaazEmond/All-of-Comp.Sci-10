// Functionize Minecraft Fishing Start Code By: Baaz

//HTML VARIABLES

let resultImg = document.getElementById("result-img");

let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let numTotalSpan = document.getElementById("num-total");

//Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

let numTotal = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;
  if (character === "steve") {
    //Steve Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum <= 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      numCodSpan.innerHTML = numCod;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    } else if (randNum > 0.7 && randNum <= 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    } else if (randNum > 0.9 && randNum <= 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      console.log("Tropical Fish");
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    } else if (randNum > 0.95) {
      resultImg.src = "img/Pufferfish.png";
      console.log("Pufferfish");
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    }
  } else if (character === "alex") {
    //Alex Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum <= 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      numCodSpan.innerHTML = numCod;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    } else if (randNum > 0.1 && randNum <= 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    } else if (randNum > 0.2 && randNum <= 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      console.log("Tropical Fish");
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    } else if (randNum > 0.5) {
      resultImg.src = "img/Pufferfish.png";
      console.log("Pufferfish");
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    }
  } else if (character === "villager") {
    //Villager Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      numCodSpan.innerHTML = numCod;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    } else if (randNum >= 0.25 && randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    } else if (randNum >= 0.5 && randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      console.log("Tropical Fish");
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    } else {
      resultImg.src = "img/Pufferfish.png";
      console.log("Pufferfish");
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      numTotal++;
      numTotalSpan.innerHTML = numTotal;
    }
  }
  if (numTotal === 10000) {
    document.getElementById("special-event").innerHTML = `
    <p>STOP!</p>
    `;
  }
}
