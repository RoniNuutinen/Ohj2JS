function concat(theList) {
    let concatonation = "";
    for (let name = 0; name < theList.length; name++) {
        concatonation += theList[name];
    }
    return (concatonation);
}

const THELIST = ["Johnny", "DeeDee", "Joey", "Marky"];

console.log(THELIST)

document.querySelector("#Concatonation").innerHTML = concat(THELIST);