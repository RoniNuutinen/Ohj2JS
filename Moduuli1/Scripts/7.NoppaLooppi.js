const NOPPIENMÄÄRÄ = parseInt(prompt("Syötä noppien lukumäärä"));

let SUMMA = 0;

if (NOPPIENMÄÄRÄ > 0) {
for (NOPPA=1; NOPPA < NOPPIENMÄÄRÄ; NOPPA++) {
SUMMA += Math.floor(Math.random() * 6 + 1);
}
document.querySelector("#Summa").innerHTML = NOPPIENMÄÄRÄ + ":n heitetyn nopan summaksi tuli: " + SUMMA;
} else {
  document.querySelector("#Summa").innerHTML = "Emmä voi heittää " + NOPPIENMÄÄRÄ + " noppaa";
}