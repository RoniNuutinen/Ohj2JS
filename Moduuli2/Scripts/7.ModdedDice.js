function die_roll(sides) {
    return (Math.floor(Math.random() * sides + 1));
}

const SIDES = parseInt(prompt("Syötä nopan tahkojen määrä"));

let heitto;

do {
    heitto = die_roll(SIDES);
    document.querySelector("#Heitot").innerHTML += "<li>" + heitto + "</li>";
} while (heitto != SIDES);