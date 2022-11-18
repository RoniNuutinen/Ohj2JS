const INPUT1 = document.querySelector("#num1");
const INPUT2 = document.querySelector("#num2");
const OPERATION = document.querySelector("#operation");
const BUTTON = document.querySelector("#start");
const P = document.querySelector("#result");


let operation;

BUTTON.addEventListener("click", function () {
    switch (OPERATION.value) {
        case "add":
            operation = +INPUT1.value + +INPUT2.value;
            break;
        case "sub":
            operation = +INPUT1.value - +INPUT2.value;
            break;
        case "multi":
            operation = +INPUT1.value * +INPUT2.value;
            break;
        case "div":
            operation = +INPUT1.value / +INPUT2.value;
    }
    let result = document.createTextNode(operation);
    P.textContent = "";
    P.appendChild(result);
});