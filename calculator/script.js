const container = document.getElementById('container');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Convert button node list to an array
const buttonArr = [...buttons];
buttonArr.splice(10); // Delete operator buttons from array

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
buttonArr.forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.value;
    });
});