const container = document.getElementById('container');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator');

// Convert button node list to an array
const buttonArr = [...buttons];
buttonArr.splice(10); // Delete operator buttons from array

// Operators
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalsBtn = document.getElementById('equals');

// Clear button
const clearBtn = document.getElementById('clear');

// Make input #display disabled
display.disabled = true;

// Display button values
buttonArr.forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.value;
    });
});

const valuesArr = []
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        valuesArr.push(parseInt(display.value));
        console.log(valuesArr);
        display.value= null;
    });
})

// Clear display screen
clearBtn.addEventListener('click', clearDisplay);