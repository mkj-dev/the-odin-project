const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// Add event listener to every button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = cleanInput(button.value);
        console.log(playerSelection);
        console.log(computerSelection);

        // Play one round with the computer
        if (playerSelection === computerSelection) {
            console.log('It\'s a draw!');
        } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            console.log('Computer wins!');
        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            console.log('Computer wins!');
        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            console.log('Computer wins!');
        } else {
            console.log('Player wins!');
        }
    });
});

// Clean user's input
// Make only first letter of input uppercase
function cleanInput(string) {
    string = string.toLowerCase();
    upperCaseLetter = string[0].toUpperCase();
    string = string.replace(string[0], upperCaseLetter);
    return string;
}

// Generate a random choice from choices array
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}