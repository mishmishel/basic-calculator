let num1;
let operator;
let num2;
let operation;

let result;

let operators = ['/', '*', '+', '-', 'x', '=']

const text = document.querySelector("#text");
const buttons = document.querySelectorAll("button");

let autoClear = false;
let count = 0;
let decimalPressed = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText == '=') {
            operation = text.textContent.split(" ");
            num1 = Number(operation[0])
            operator = operation[1]
            num2 = Number(operation[2])

            if (operator == '/' && num2 == 0) {
                text.textContent = 'ZERO DIVISION ERROR';
                autoClear = true;
            } else {
                result = operate(num1, operator, num2);
                let str = result.toString();
                if (str.length > 10) {
                    console.log(result);
                    let n = result.toFixed(10);
                    text.textContent = n;
                } else {
                    text.textContent = result;
                }

                autoClear = true;
                count = 0;
            }

        } else if (buttonText == 'AC') {
            text.textContent = '';
        } else if (operators.includes(buttonText)) {
            decimalPressed = false;
            autoClear = false;

            if (count >= 1) {
                operation = text.textContent.split(" ");
                num1 = Number(operation[0])
                operator = operation[1]
                num2 = Number(operation[2])

                result = operate(num1, operator, num2);
                let str = result.toString();
                if (str.length > 10) {
                    console.log(result);
                    let n = result.toFixed(10);
                    text.textContent = n;
                } else {
                    text.textContent = result;
                }
                count = 0;
            }

            text.textContent += " " + buttonText + " ";
            console.log(count);
            count++;
            console.log(count);
        } else if (buttonText == '.'){
            console.log('Pressed!');
            if (decimalPressed == false) {
                text.textContent += buttonText;
                decimalPressed = true;
            }
        } else {
            if (autoClear) {
                text.textContent = "";
                autoClear = false;
            } 
            text.textContent += buttonText;
        }
    })
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2)
    } else if (operator == '/') {
        return divide(num1, num2);
    }
}