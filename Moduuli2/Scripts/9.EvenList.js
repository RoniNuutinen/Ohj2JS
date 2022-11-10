function even(theList) {
    const EVENLIST = [];
    for (let number = 0; number < theList.length; number++) {
        if (theList[number] % 2 == 0 && theList[number] != 0) {
            EVENLIST.push(theList[number]);
        }
    }
    return (EVENLIST);
}

const THELIST = [0, 1, 4, 5, 6, 8, 11, 12, 37];

console.log(THELIST);
console.log(even(THELIST));