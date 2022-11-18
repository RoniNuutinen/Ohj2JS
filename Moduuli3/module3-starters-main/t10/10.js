const FORM = document.querySelector("#source");
const ETUNIMI = document.querySelector("input[name='firstname']");
const SUKUNIMI = document.querySelector("input[name='lastname']");
const LÄHETÄ = document.querySelector(type="submit");
const P = document.querySelector("#target");

FORM.addEventListener("submit", function (event){
    let input1 = ETUNIMI.value;
    let input2 = SUKUNIMI.value;

    let print = `Your name is ${input1} ${input2}`;
    let printValue = document.createTextNode(print);
    P.appendChild(printValue);
    event.preventDefault();
})