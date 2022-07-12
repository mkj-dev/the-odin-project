// Body
const body = document.querySelector('body');
body.style.textAlign = 'center';

// Main container
const container = document.querySelector('#container');
container.setAttribute('style', 'max-width: 960px; margin: 0 auto; padding: 16px;')

// Etch-a-sketch square block
const square = document.createElement('div');
square.setAttribute('style', 'width: 10px; height: 10px; border: 1px solid black; display: inline-block');

// Custom <br> tag
const br = document.createElement('span');
br.setAttribute('style', 'display: block; margin-bottom: -0.38em;');

// Button prompt
const btnPrompt = document.createElement('button');
btnPrompt.setAttribute('style', 'padding: 4px; border: 1px solid black; border-radius: 8px;')
btnPrompt.textContent = 'Change grid'
body.insertBefore(btnPrompt, container);

// Display 16x16 grid of squares
let i = 0;
while (i < 16) { 
    for (let j = 0; j < 16; j++) {
        container.appendChild(square);
        container.innerHTML += '';
        if (j === 15) {
            container.appendChild(br);
            i++
        }
    }
}
// Draw on mouse over
for (let n = 0; n < container.childNodes.length; n++) {
    container.childNodes[n].addEventListener('mouseover', () => {
        container.childNodes[n].style.backgroundColor = 'black';
    });    
}
