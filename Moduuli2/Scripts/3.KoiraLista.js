const koiraLista = [];

for (let koira = 1; koira <= 6; koira++) {
    let tämäKoira = prompt("Syötä " + koira + ".:n koiran nimi");
    koiraLista.push(tämäKoira);
}

koiraLista.sort()
koiraLista.reverse()

for (let koira = 0; koira < koiraLista.length; koira++) {
    document.querySelector("#KoiraLista").innerHTML += "<li>" + koiraLista[koira] + "</li>";
}