//Magic * Ball Simulator by: Baaz

//8 Ball Event Listener
document.getElementById("magic8ball-in").addEventListener("click", btnClicked);

//HTML Vars
let output = document.getElementById("div-out");

function btnClicked() {
  //Input Vars
  let question = document.getElementById("question-in").value.toLowerCase();

  //Check if Special Question was Asked
  switch (question) {
    case "":
      output.innerHTML = "Please ask a question...";
      break;
    case "does a magic 8 ball actually work?":
      output.innerHTML = "How dare you doubt me!";
      break;
    case "is abdul human?":
      output.innerHTML = "NO! HE IS MONKEY!";
      break;
    default:
      //Generate Random Response
      let randNum = Math.random();
      output.innerHTML = randNum;
      if (randNum < 0.2) {
        output.innerHTML = "Without a doubt.";
      } else if (randNum < 0.4) {
        output.innerHTML = "As I see it, yes.";
      } else if (randNum < 0.6) {
        output.innerHTML = "Concentrate and ask again.";
      } else if (randNum < 0.8) {
        output.innerHTML = "Don't count on it.";
      } else {
        output.innerHTML = "Outlook: not so good.";
      }
      break;
  }
}
