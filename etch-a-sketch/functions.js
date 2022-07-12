function displayGrid(userChoice) {
    // Display grid of squares
    let i = 0;
    while (i < userChoice) {
        for (let j = 0; j < userChoice; j++) {
            container.appendChild(square);
            container.innerHTML += '';
            if (j === userChoice - 1) {
                container.appendChild(br);
                i++
            }
        }
    }
    draw();
}

function draw() {
    // Draw on mouse over
    for (let n = 0; n < container.childNodes.length; n++) {
        container.childNodes[n].addEventListener('mouseover', () => {
            container.childNodes[n].style.backgroundColor = 'black';
        });
    }
}