//Acronym Lookup By: Baaz

//Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let name = document.getElementById("search-in").value.toLowerCase();
  console.log(name);

  //PROCESS
  if (name === "html") {
    document.getElementById("acro-info").innerHTML = `
      <h2>HyperText Markup Language</h2>
    `;
  } else if (name === "css") {
    document.getElementById("acro-info").innerHTML = `
<h2>Cascading Style Sheets<h2>
`;
  } else if (name === "gui") {
    document.getElementById("acro-info").innerHTML = `
    <h2>Graphical User Interphase<h2>
    `;
  } else if (name === "rn") {
    document.getElementById("acro-info").innerHTML = `
    <h2>Right Now<h2>
    `;
  } else if (name === "fomo") {
    document.getElementById("acro-info").innerHTML = `
    <h2>Fear Of Missing Out<h2>
    `;
  } else if (name === "brb") {
    document.getElementById("acro-info").innerHTML = `
<h2>Be Right Back<h2>
`;
  } else if (
    name === "abdulsalam oguntade" ||
    name === "abdulsalam" ||
    name === "abdul" ||
    name === "oguntade"
  ) {
    document.getElementById("acro-info").innerHTML = `
  <h2>Gay, btw he said thats what he is, so no assumptions here.<h2>
  `;
  } else {
    document.getElementById("acro-info").innerHTML = `
<h2>Sorry, I don't know what this acronym stands for.<h2>
`;
  }
}
