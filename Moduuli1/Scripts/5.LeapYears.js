const YEAR = parseInt(prompt("Syötä vuosi numero"));

let LEAPYEAR = " ei ole "

if (YEAR % 4 == 0 && (YEAR % 100 != 0 || YEAR % 400 == 0)) {
  LEAPYEAR = " on "
}

document.querySelector("#Tulos").innerHTML = YEAR + LEAPYEAR + "karkausvuosi"