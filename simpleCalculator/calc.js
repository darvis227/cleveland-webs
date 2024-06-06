document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn, .btn-0, .btn-c");
    const screen = document.querySelector(".calculator-screen");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = button.value;
            handleInput(value);
        });
    });

    document.addEventListener("keydown", function (event) {
        const key = event.key;
        if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === 'Enter' || key === 'Backspace') {
            handleInput(key === 'Enter' ? '=' : key);
        } else if (key === 'c' || key === 'C') {
            handleInput('C');
        }
    });

    function handleInput(value) {
        if (value === "C") {
            screen.value = "";
        } else if (value === "=") {
            try {
                screen.value = eval(screen.value);
            } catch {
                screen.value = "Error";
            }
        } else if (value === "%") {
            screen.value = parseFloat(screen.value) / 100;
        } else if (value === "+/-") {
            screen.value = parseFloat(screen.value) * -1;
        } else if (value === 'Backspace') {
            screen.value = screen.value.slice(0, -1);
        } else {
            screen.value += value;
        }
    }
});

const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.calculator-screen');

let currentInput = '';
let previousInput = '';
let operator = '';  

// buttons.forEach(button  => {
//     button.addEventListener('click', () => {
//         const value = button.value;
//         if (value === 'C') {
//             clear(); 
//          }
//         else if(value === '=') {
//             calculate();
//         } else if(['+', '-', '*', '/'].includes(value)) {
//             handleOperator(value);
//         } else {
//             handleNumber(value);    
//         }

//         updateScreen();
// });
// });

// function handleNumber(num) {
//     if(num === '.' && currentInput.includes('.')) return;
//         currentInput += num;
// }

// function handleOperator(op) {
//     if(currentInput === '') return;
    
//     if(previousInput !== ''){
//         calculate();
//     }
//     operator = op;
//     previousInput = currentInput;
//     currentInput = '';
// }

// function calculate(){
//     let result;
//     const prev = parseFloat(previousInput);
//     const current = parseFloat(currentInput);
//     if(isNaN(prev) || isNaN(current)) return;

//     switch (operator){
//         case '+':
//             result = prev + current;
//             break;
//         case '-':
//             result = prev - current;
//             break;
//         case '*':
//             result = prev * current;
//             break;
//         case '/':
//             result = prev / current;
//             break;
//         default:
//             return;
//     }
//     currentInput = result.toString().slice(0,10);
//     operator = '';
//     previousInput = '';
// }

// function clear() {
//     currentInput = '';
//     previousInput = '';
//     operator = '';
// }

// function updateScreen() {
//     screen.value = currentInput;
// }


