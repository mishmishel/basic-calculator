let num1;
let operator;
let num2;
let operation;

let operators = ['/', '*', '+', '-', 'x', '=']

const text = document.querySelector("#text");
const buttons = document.querySelectorAll("button");

let autoClear = false;

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
                text.textContent = operate(num1, operator, num2);
            }

            autoClear = true;

        } else if (buttonText == 'AC') {
            text.textContent = '';
        } else if (operators.includes(buttonText)) {
            autoClear = false;
            text.textContent += " " + buttonText + " ";
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