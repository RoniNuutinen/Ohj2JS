let LUKU1 = parseInt(prompt("Syötä kokonaisluku"));
let LUKU2 = parseInt(prompt("Syötä toinen kokonaisluku"));
let LUKU3 = parseInt(prompt("Syötä kolmas kokonaisluku"));

document.querySelector("#Summa").innerHTML = "Syöttämiesi lukujen summa on " + (LUKU1 + LUKU2 + LUKU3);
document.querySelector("#Tulo").innerHTML = "Syöttämiesi lukujen tulo on " + LUKU1 * LUKU2 * LUKU3;
document.querySelector("#Keskiarvo").innerHTML = "Syöttämiesi lukujen keskiarvo on " + ((LUKU1 + LUKU2 + LUKU3) / 3);