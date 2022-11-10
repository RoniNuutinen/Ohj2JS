function die_roll() {
    return (Math.floor(Math.random() * 6 + 1));
}

let heitto;

do {
    heitto = die_roll();
    document.querySelector("#DieRoller").innerHTML += "<li>" + heitto + "</li>"
} while (heitto != 6);