const container = document.querySelector('#container');

// Etch-a-sketch square block
const square = document.createElement('div');
square.setAttribute('style', 'width: 10px; height: 10px; border: 1px solid black; display: inline-block');

// Custom <br> tag
const br = document.createElement('span');
br.setAttribute('style', 'display: block; margin-bottom: -0.38em;');

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
