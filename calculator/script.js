const container = document.getElementById('container');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Operators
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
// Clear button
const clearBtn = document.getElementById('clear');

// Make input #display disabled
display.disabled = true;

// Display button values
buttons.forEach(btn => {
    btn.addEventListener('click',()=> {
        display.value += btn.value;
    });
});