//Password Strength Checker by: Baaz Emond

//Button Event Listener
document.getElementById("pword-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let name = document.getElementById("pword-in").value;

  if (name.length < 5) {
    document.getElementById("pword-info").style.color = "red";
    document.getElementById("pword-info").innerHTML = `
<h2>Weak<h2>
`;
  } else if (name.length >= 5 && name.length <= 8) {
    document.getElementById("pword-info").style.color = "orange";
    document.getElementById("pword-info").innerHTML = `
<h2>Okay<h2>
  `;
  } else if (name.length >= 9 && name.length <= 12) {
    document.getElementById("pword-info").style.color = "lime";
    document.getElementById("pword-info").innerHTML = `
<h2>Strong<h2>
  `;
  } else if (name.length >= 13) {
    document.getElementById("pword-info").style.color = "green";
    document.getElementById("pword-info").innerHTML = `
<h2>Very Strong<h2>
  `;
  } else {
    document.getElementById("pword-info").innerHTML = `
    <h2>Please enter a password before pressing the button.<h2>
    `;
  }
}
