// Multi Page Website By: Baaz

//Add EventListener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let question1 = document.getElementById("q1").value.toLowerCase();
  console.log(question1);

  let question2 = document.getElementById("q2").value.toLowerCase();
  console.log(question2);

  let question3 = document.getElementById("q3").value.toLowerCase();
  console.log(question3);

  let question4 = document.getElementById("q4").value.toLowerCase();
  console.log(question4);

  let question5 = document.getElementById("q5").value.toLowerCase();
  console.log(question5);

  let question6 = document.getElementById("q6").value.toLowerCase();
  console.log(question6);

  let score = 0;

  //PROCESS
  if (
    question1 === "hypertext markup language" ||
    question1 === "hyper text markup language" ||
    question1 === "hypertextmarkuplanguage" ||
    question1 === "easter egg"
  ) {
    document.getElementById("q1-info").style.color = "limegreen";
    document.getElementById("q1-info").innerHTML = `
      <h2>Correct</h2>
    `;
    score++;
  } else {
    document.getElementById("q1-info").style.color = "red";
    document.getElementById("q1-info").innerHTML = `
    <h2>Incorrect</h2>
    `;
  }

  if (
    question2 === "cascading style sheets" ||
    question2 === "cascadingstyle sheets" ||
    question2 === "cascading stylesheets" ||
    question2 === "cascadingstylesheets" ||
    question2 === "easter egg"
  ) {
    document.getElementById("q2-info").style.color = "limegreen";
    document.getElementById("q2-info").innerHTML = `
      <h2>Correct</h2>
    `;
    score++;
  } else {
    document.getElementById("q2-info").style.color = "red";
    document.getElementById("q2-info").innerHTML = `
    <h2>Incorrect</h2>
    `;
  }

  if (
    question3 === "cascading style sheets" ||
    question3 === "cascadingstyle sheets" ||
    question3 === "cascading stylesheets" ||
    question3 === "cascadingstylesheets" ||
    question3 === "css" ||
    question3 === "easter egg"
  ) {
    document.getElementById("q3-info").style.color = "limegreen";
    document.getElementById("q3-info").innerHTML = `
      <h2>Correct</h2>
    `;
    score++;
  } else {
    document.getElementById("q3-info").style.color = "red";
    document.getElementById("q3-info").innerHTML = `
    <h2>Incorrect</h2>
    `;
  }

  if (
    question4 === "javascript" ||
    question4 === "java script" ||
    question4 === "js" ||
    question4 === "easter egg"
  ) {
    document.getElementById("q4-info").style.color = "limegreen";
    document.getElementById("q4-info").innerHTML = `
      <h2>Correct</h2>
    `;
    score++;
  } else {
    document.getElementById("q4-info").style.color = "red";
    document.getElementById("q4-info").innerHTML = `
    <h2>Incorrect</h2>
    `;
  }

  if (
    question5 === "hypertext markup language" ||
    question5 === "hyper text markup language" ||
    question5 === "hypertextmarkuplanguage" ||
    question5 === "html" ||
    question5 === "easter egg"
  ) {
    document.getElementById("q5-info").style.color = "limegreen";
    document.getElementById("q5-info").innerHTML = `
      <h2>Correct</h2>
    `;
    score++;
  } else {
    document.getElementById("q5-info").style.color = "red";
    document.getElementById("q5-info").innerHTML = `
    <h2>Incorrect</h2>
    `;
  }

  if (
    question6 === "cascading style sheets" ||
    question6 === "cascadingstyle sheets" ||
    question6 === "cascading stylesheets" ||
    question6 === "cascadingstylesheets" ||
    question6 === "css" ||
    question6 === "easter egg"
  ) {
    document.getElementById("q6-info").style.color = "limegreen";
    document.getElementById("q6-info").innerHTML = `
      <h2>Correct</h2>
    `;
    score++;
  } else {
    document.getElementById("q6-info").style.color = "red";
    document.getElementById("q6-info").innerHTML = `
    <h2>Incorrect</h2>
    `;
  }

  let totalScore = Math.round((score / 6) * 100);

  let fraction = Math.round(score);

  //OUTPUT
  if (score === 0) {
    document.getElementById("finalscore-info").innerHTML = `
<h2>Better Luck Next Time!</h2>
`;
  } else if (score === 1) {
    document.getElementById("finalscore-info").innerHTML = `
  <h2>At least you got Something!</h2>
  `;
  } else if (score === 2) {
    document.getElementById("finalscore-info").innerHTML = `
<h2>You're getting there!</h2>
`;
  } else if (score === 3) {
    document.getElementById("finalscore-info").innerHTML = `
    <h2>Halfway There!</h2>
  `;
  } else if (score === 4) {
    document.getElementById("finalscore-info").innerHTML = `
    <h2>Almost There!</h2>
  `;
  } else if (score === 5) {
    document.getElementById("finalscore-info").innerHTML = `
    <h2>So close!</h2>
  `;
  } else if (score === 6) {
    document.getElementById("finalscore-info").innerHTML = `
    <h2>You did it!  Congradulations!</h2>
    `;
  } else {
    document.getElementById("finalscore-info").innerHTML = `
    <h2>You've done the impossible.  How did you even get here!?!?!?!?</h2>
    `;
  }
  document.getElementById("output").innerHTML = totalScore;
  document.getElementById("fraction").innerHTML = fraction;
}

//If you don't know the answers, don't come here to find them.
