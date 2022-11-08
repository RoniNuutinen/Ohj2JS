const ALKUVUOSI = parseInt(prompt("Syötä aloitusvuosi"))
const LOPETUSVUOSI = parseInt(prompt("Syötä lopetusvuosi"))

for (let vuosi = ALKUVUOSI; vuosi <= LOPETUSVUOSI; vuosi++) {
    if (vuosi % 4 == 0 && (vuosi % 100 != 0 || vuosi % 400 == 0)) {
        let karkausVuosi = document.createElement("li");
        karkausVuosi.innerText = vuosi;
        document.querySelector("#Karkausvuodet").appendChild(karkausVuosi);
    }
}