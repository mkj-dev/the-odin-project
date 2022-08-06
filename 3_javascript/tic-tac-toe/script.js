// Game logic
const game = {
    xTurn: true,
    xState: [],
    oState: [],
    winningStates: [
        // Rows
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],

        // Columns
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],

        // Diagonal
        ['0', '4', '8'],
        ['2', '4', '6']
    ]
}

document.addEventListener('click', event => {
    const target = event.target;
    const isCell = target.classList.contains('block');
    const isDisabled = target.classList.contains('disabled');

    if (isCell && !isDisabled) {
        // The player clicked on a cell that is still empty
        const cellValue = target.dataset.value;

        if (game.xTurn === true)
            game.xState.push(cellValue);
        else
            game.oState.push(cellValue);
        // console.log('X:', game.xState);
        // console.log('O', game.oState);

        target.classList.add('disabled');
        target.classList.add(game.xTurn ? 'x' : 'o');
        game.xTurn = !game.xTurn;
    }

    if (document.querySelectorAll('body > div > div.block.disabled').length === 9) {
        const h3 = document.createElement('h3');
        h3.innerText = 'Draw!';
        document.querySelector('h2').appendChild(h3);
    }
});