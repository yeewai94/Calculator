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

function operate(firstNumber, operator, secondNumber){
    if (operator === "+") return add(firstNumber, secondNumber);
    else if (operator === "-") return subtract(firstNumber, secondNumber);
    else if (operator === "*") return multiply(firstNumber, secondNumber);
    else if (operator === "/") return divide(firstNumber, secondNumber);
    else return
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let firstDigit = "";
let secondDigit = "";

const display = document.querySelector(".display");
const clear = document.querySelector(".clear").addEventListener("click", () => {
   return display.innerText = "";
});

const numbers = document.querySelector(".numbers").addEventListener("click", (e) => {
    if (!firstDigit){
        firstDigit = e.target.innerText;
    }
    else if (firstDigit && !secondDigit){
        secondDigit = e.target.innerText;
    }
    else {
        return display.innerText = `${firstDigit}${secondDigit}`;
    }
    firstNumber = `${firstDigit}${secondDigit}`;  
    return display.innerText = firstNumber;  

});


const operators = document.querySelector(".operators").addEventListener("click", (e) => {
    operator = e.target.innerText;
    if (operator !== "="){
        return display.innerText = operator;
    }
});
    

