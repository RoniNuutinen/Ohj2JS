const NUMBERLIST = [];

let syöte;

do {
    if (!(NUMBERLIST.includes(syöte)) && typeof syöte !== "undefined") {
        NUMBERLIST.push(syöte);
    }
    syöte = parseFloat(prompt("Syötä luku"));
} while (!(NUMBERLIST.includes(syöte)));

NUMBERLIST.sort((a,b) => a - b);

for (let n = 0; n < NUMBERLIST.length; n++) {
    console.log(NUMBERLIST[n]);
}