document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let word1 = document.getElementById("word1-in").value;
  let word2 = document.getElementById("word2-in").value;
  let word3 = document.getElementById("word3-in").value;

  let msg = `the ${word1} went and ${word2} when it was also ${word3}.`;
}
