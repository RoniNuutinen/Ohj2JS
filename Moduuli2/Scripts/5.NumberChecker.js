const NUMBERLIST = [];

let syöte;

do {
    syöte = parseFloat(prompt("Syötä luku"));
    if (!(NUMBERLIST.includes(syöte))) {
        NUMBERLIST.push(syöte);
    }
} while (!(syöte in NUMBERLIST));

NUMBERLIST.sort((a,b) => a - b);

for (let n = 0; n < NUMBERLIST.length; n++) {
    console.log(NUMBERLIST[n]);
}