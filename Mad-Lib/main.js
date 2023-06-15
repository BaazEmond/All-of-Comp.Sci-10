// Mad-Lib

//Add an Event Listener to run the placeOrder function.
//document.getElementById("btn").addEventListener("click", madLibRun);

//Store the order code in a function
//function madLibRun() {
//INPUT
//let word1 = document.getElementById("word1-in").value;
//let word2 = document.getElementById("word2-in").value;
//let word3 = document.getElementById("word3-in").value;

//PROCESS
//let msg = `Once upon a time, there was a creature that everyone called ${word1} .  It roamed the land.  It wandered free.  Then one day, the ${word1} was captured.  The ${word1} ${word2} and ${word2}, but no matter how much it ${word2}, it couldn't get free of its chains.  The ${word1} knew it's fate.  The ${word1} gave up, and decided that it was a good idea to ${word3} before it was locked away.`;

//OUTPUT
//document.getElementById("output").innerHTML = msg;
//}

//add event listener
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  //INPUT
  let word1 = document.getElementById("word1-in").value;
  let word2 = document.getElementById("word2-in").value;
  let word3 = document.getElementById("word3-in").value;

  //Process
  let msg = `the ${word1} went and ${word3} when it was also ${word2}.`;

  //output
  document.getElementById("output").innerHTML = msg;
}
