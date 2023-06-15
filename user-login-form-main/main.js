//Password Strength Checker by: Baaz Emond

//Button Event Listener
document.getElementById("pword-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let uname = document.getElementById("uname-in").value;

  let pword = document.getElementById("pword-in").value;

  //PROCESS
  if (uname === "admin" && pword === "1234") {
    document.getElementById("output-info").innerHTML = `
    <h2>Login Successful</h2>
  `;
  } else if (uname !== "admin") {
    document.getElementById("output-info").innerHTML = `
    <h2>Invalid Username</h2>
  `;
  } else if (uname === "admin" && pword !== "1234") {
    document.getElementById("output-info").innerHTML = `
    <h2>Invalid Password</h2>
  `;
  }
}
