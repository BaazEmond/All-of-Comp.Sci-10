//Where boredom gets you: Baaz Emond

//HTML Variables

//Initial Values
let score = 99;
let stage = 1;
let perk1 = "0";

//Event listener for main button
document.getElementById("mainBtn").addEventListener("click", mainBtnClicked);

//Function for main button
function mainBtnClicked() {
  //Random number generator
  let randNum = Math.random();
  console.log(randNum);

  //Number generation
  if (stage === 1) {
    score++;
  } else if (stage === 2) {
    score + 2;
  }
  //Output of Score
  document.getElementById("score-out").innerHTML = score;

  //Perk #1
  if (score === 100) {
    document.getElementById("perks").innerHTML = `
    <h3>
    PERK #1
        <p>
        This perk gives you an extra click everytime the button is clicked.  Comes at a price of 50 points.
        
        </p>
      </h3>
    `;
    document.getElementById("option-one-in").value = perk1;
  }
  if (perk1 === "yes-one-in") {
    stage++;
    score - 50;
    document.getElementById("perks").innerHTML = ``;
  } else if (perk1 === "Deny the Perk") {
    document.getElementById("perks").innerHTML = ``;
  } else {
  }
}
