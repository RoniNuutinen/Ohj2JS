const INPUT = document.querySelector("#calculation");
const BUTTON = document.querySelector("#start");
const P = document.querySelector("#result");

BUTTON.addEventListener("click", function (){
    let operation;
    let currentInput = INPUT.value;

    if (currentInput.includes("+")) {
        let values = currentInput.split("+");
        operation = +values[0] + +values[1];
    }
    if (currentInput.includes("-")) {
        let values = currentInput.split("-");
        operation = +values[0] - +values[1];
    }
    if (currentInput.includes("*")) {
        let values = currentInput.split("*");
        operation = +values[0] * +values[1];
    }
    if (currentInput.includes("/")) {
        let values = currentInput.split("/");
        operation = +values[0] / +values[1];
    }
    let operationResult = document.createTextNode(operation);
    P.textContent = "";
    P.appendChild(operationResult);
})