const HOWMANY = parseInt(prompt("Kuinka monta nimeä?"));

for (let nimi = 1; nimi <= HOWMANY; nimi++) {
    let tämäNimi = prompt("Syötä nimi #" + nimi);
    let listaSyöte = document.createElement("li");
    listaSyöte.innerText = tämäNimi;
    document.querySelector("#NimiLista").appendChild(listaSyöte);
}