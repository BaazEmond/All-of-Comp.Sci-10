// CS10 GRADE CALC BY BAAZ

//Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let css1 = +document.getElementById("css1-in").value;
  let sp1 = +document.getElementById("sp1-in").value;
  let sp2 = +document.getElementById("sp2-in").value;
  let css2 = +document.getElementById("css2-in").value;
  let pa = +document.getElementById("pa-in").value;

  //PROCESS
  let finalGrade = (css1 + sp1 + sp2 + css2 + pa) / 5;

  //OUTPUT
  document.getElementById("output").innerHTML = Math.round(finalGrade);
}
