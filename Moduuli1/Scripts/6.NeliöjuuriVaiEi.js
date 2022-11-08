const JOOVAIEI = confirm("Lasketaanko jonkin luvun neljöjuuri")

if (JOOVAIEI) {
const SYÖTE = parseFloat(prompt("Syötä joku luku"))
if (SYÖTE >= 0) {
  const TULOS = Math.sqrt(SYÖTE)

  document.querySelector("#Tulos").innerHTML = SYÖTE + ":n neliöjuuri on " + TULOS;
} else {
  document.querySelector("#Tulos").innerHTML = SYÖTE + ":n neliöjuuri on irrationaalinen. I don't do irrationals.";
}
} else {
document.querySelector("#Tulos").innerHTML = "Ei sit";
}