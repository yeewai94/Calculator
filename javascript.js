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

function operate(first, operator, second){
    if (operator === "+") return add(first, second);
    else if (operator === "-") return subtract(first, second);
    else if (operator === "*") return multiply(first, second);
    else if (operator === "/") return divide(first, second);
}

let array = [];
let previousNumber = "";
let currentNumber = "";

const display = document.querySelector(".display");
const clear = document.querySelector(".clear").addEventListener("click", () => {
   return display.innerText = "";
});

const items = document.querySelector(".items").addEventListener("click", (e) => {
    const item = e.target.class;
    if(e.target.classList.contains("numbers")){
        array.push(e.target.innerText);
        currentNumber = array.join("");
        display.innerText = currentNumber;
    }
    else if (e.target.classList.contains("operator")){
        array = [];
        previousNumber = currentNumber;
        let result = operate(Number(previousNumber), e.target.innerText, Number(currentNumber));
        display.innerText = result;
       
        
    }
});
// const numbers = document.querySelector(".numbers").addEventListener("click", (e) => {
//     if(!firstNumber){
//         if (!firstDigit){
//             firstDigit = e.target.innerText;
//         }
//         else if (firstDigit && !secondDigit){
//             secondDigit = e.target.innerText;
//         }
//         firstNumber = `${firstDigit}${secondDigit}`;  
//         display.innerText = firstNumber;  
//     }
//     else {
//         if (!firstDigit){
//             firstDigit = e.target.innerText;
//         }
//         else if (firstDigit && !secondDigit){
//             secondDigit = e.target.innerText;
//         }
//         secondNumber = `${firstDigit}${secondDigit}`;  
//         display.innerText = secondNumber;  
//     }
//     console.log(`${firstDigit}+${secondDigit}`);
// });



    

