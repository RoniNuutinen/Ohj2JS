const NOPPIENMÄÄRÄ = parseInt(prompt("Syötä noppien määrä"));
const HALUTTUNOPPIENSUMMA = parseInt(prompt("Syötä haluttu noppien summa"));

if (NOPPIENMÄÄRÄ > 0) {
  let osuma = 0;

  for (let heittoKerta = 1; heittoKerta <= 10_000; heittoKerta++) {
      let heittoSumma = 0;

      for (let heitto = 1; heitto <= NOPPIENMÄÄRÄ; heitto++) {
          const TÄMÄHEITTO = Math.floor(Math.random() * 6 + 1);
          heittoSumma += TÄMÄHEITTO
      }
      if (heittoSumma == HALUTTUNOPPIENSUMMA) {
          osuma += 1;
      }
  }
  const TODENNÄKÖISYYS = parseFloat(osuma / 10_000 * 100).toFixed(0);

  document.querySelector("#Todennäköisyys").innerHTML = NOPPIENMÄÄRÄ + ":n heitetyn nopan yhteen laskettu summa on "
      + TODENNÄKÖISYYS + "%:n todennäköisyydellä " + HALUTTUNOPPIENSUMMA;
} else {
  document.querySelector("#Todennäköisyys").innerHTML = "Emmä voi heittää " + NOPPIENMÄÄRÄ + " noppaa...";
}