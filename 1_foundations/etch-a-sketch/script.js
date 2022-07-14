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

btnPrompt.addEventListener('click', () => {
    container.textContent = '';
    while(true) {
        const userChoice = parseInt(prompt('What size should the grid be? Max. 25.'));
        if(userChoice > 25) {
            alert('Grid size is too big! Max. 25.');
        } else {
            displayGrid(userChoice);
            break;
        }
    }
});

// Display 16x16 grid of squares
displayGrid(16);