const SYÖTE = parseInt(prompt("Syötä kokonaisluku"));

const HAARUKKA = parseInt(Math.floor(Math.sqrt(SYÖTE)));

let alkuLuku = " on ";
let alkio = 1

while (alkuLuku == " on " && alkio <= HAARUKKA) {

  alkio++

  if (SYÖTE % alkio == 0 && SYÖTE != 2 && SYÖTE != 1) {
      alkuLuku = " ei ole ";
      break;
      }
  }

document.querySelector("#Onko").innerHTML = SYÖTE + alkuLuku + "alkuluku";