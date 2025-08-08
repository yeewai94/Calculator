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
let operator = null;

const display = document.querySelector(".display");
const clear = document.querySelector(".clear").addEventListener("click", () => {
     display.innerText = "";
     array = [];
     currentNumber = "";
     previousNumber = "";
     operator = "";
});

const items = document.querySelector(".items").addEventListener("click", (e) => {
    if (e.target.classList.contains("numbers")){
        array.push(e.target.innerText); 
        display.innerText = array.join("");
        currentNumber = display.innerText;
    }
    else if (e.target.classList.contains("operators")){
        if(!previousNumber){
            previousNumber = currentNumber;
            operator = e.target.innerText;
            array = [];
            currentNumber = "";
        }
        else {
            let result = operate(Number(previousNumber), operator, Number(currentNumber));
            result = Number(result).toFixed(2);
            display.innerText = result;
            previousNumber = result;
            operator = e.target.innerText;
            array = [];
            currentNumber = "";
        }}
    else if (e.target.classList.contains("equal")){
        let result = operate(Number(previousNumber), operator, Number(currentNumber));
        result = Number(result).toFixed(2);
        display.innerText = result;
        array = [];
        previousNumber = "";
        currentNumber = "";
        operator = "";
    }  
});






// const items = document.querySelector(".items").addEventListener("click", (e) => {
//     if (e.target.classList.contains("numbers")){
//         currentNumber += e.target.innerText;
//         display.innerText = currentNumber;
//     }
//     else if (e.target.classList.contains("operators")){
//         if(!previousNumber){
//             previousNumber = currentNumber;
//             operator = e.target.innerText;
//             currentNumber = "";
//             display.innerText = "";
//         }
//         else if(previousNumber){
//             let result = operate(Number(previousNumber), operator, Number(currentNumber));
//             display.innerText = result;
//             previousNumber = result;
//             operator = e.target.innerText;
//             currentNumber = "";
//         }
        
//     }
// });


    

