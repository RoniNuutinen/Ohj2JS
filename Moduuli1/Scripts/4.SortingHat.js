const NAME = prompt("Syötä nimesi");
const CLASSNUM = Math.floor(Math.random() * 4 + 1);
let CLASS;

if (CLASSNUM == 1) {
    CLASS = "Daredevil"
}
else if (CLASSNUM == 2) {
    CLASS = "Slytherin"
}
else if (CLASSNUM == 3) {
    CLASS = "Hufflepuff"
}
else if (CLASSNUM == 4) {
    CLASS = "Ravenclaw"
}
/*
switch (CLASSNUM) {
    case 1:
        CLASS = "Daredevil";
        break;
    case 2:
        CLASS = "Slytherin";
        break;
    case 3:
        CLASS = "Hufflepuff";
        break;
    case 4:
        CLASS = "Ravenclaw";
        break;
}
*/
console.log(CLASSNUM)

document.querySelector("#Tulos").innerHTML = NAME + ", you belong to " + CLASS;
