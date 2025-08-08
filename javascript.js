function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

let number;
let operator;
let anotherNumbers;

function operate(numbers, operators, otherNumbers){
    if (operators === "+") return add(numbers, otherNumbers);
    else if (operators === "-") return subtract(numbers, otherNumbers);
    else if (operators === "*") return multiply(numbers, otherNumbers);
    else if (operators === "/") return divide(numbers, otherNumbers);
    else return
}
const display = document.querySelector(".display");
const clear = document.querySelector(".clear").addEventListener("click", () => {
   return display.innerText = "";
});

// const btn = document.querySelectorAll("button").forEach()
