const NUMEROLISTA = [];

let syöte

do {
    syöte = parseFloat(prompt("Syötä luku"));
    NUMEROLISTA.push(syöte);
} while (syöte != 0)

NUMEROLISTA.sort((a, b) => b - a);

for (let n = 0; n < NUMEROLISTA.length; n++) {
    console.log(NUMEROLISTA[n])
}