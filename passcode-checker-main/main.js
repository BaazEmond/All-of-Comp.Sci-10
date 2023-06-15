// Passcode Checker

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let code1 = +document.getElementById("code1-in").value;
  let code2 = +document.getElementById("code2-in").value;
  let code3 = +document.getElementById("code3-in").value;

  // Check Passcode

  //#1
  //if ((code1 === 10 && code2 === 20) || code3 === 30) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //#2
  //if (code1 === 10 && (code2 === 20 || code3 === 30)) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //#3
  //if (code1 >= 0 && code2 >= 0 && code3 >= 0) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //#4
  //if (code1 < 0 || code2 < 0 || code3 < 0) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //#5
  //if (code1 === 7 && code2 === 7 && code3 === 7) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //#6
  //if (code1 !== 0 && code2 !== 0 && code3 !== 0) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //#7
  //if (code1 === code2 && code2 === code3 && code3 === code1) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //#8
  //if (code3 > code1 && code3 > code2) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //#9
  //if (code3 > code1 + code2) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //#10
  //if (code2 > code1 && code2 < code3) {
  //  document.getElementById("status").style.backgroundColor = "green";
  //} else {
  //  document.getElementById("status").style.backgroundColor = "red";
  //}

  //Deafault;
  if (
    code3 === 3 &&
    code1 <= 7 &&
    (code2 === 8 || code2 === 24 || code2 > 1000)
  ) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
}
