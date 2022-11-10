const NUMBERLIST = [];

for (let number = 1; number <= 5; number++) {
    let thisNumber = parseInt(prompt("Syötä luku"));
    NUMBERLIST.push(thisNumber);
}

for (let number = NUMBERLIST.at(-1); number >= 0; number--) {
    console.log(NUMBERLIST.at(number));
}