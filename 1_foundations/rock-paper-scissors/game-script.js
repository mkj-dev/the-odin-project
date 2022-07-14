const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// Player score
const score = document.querySelector('#score');
let playerScore = 0;

// Add event listener to every button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = cleanInput(button.value);

        console.log(playerSelection);
        console.log(computerSelection);
        console.log('Score: ', playerScore);

        // Play one round with the computer
        if (playerSelection === computerSelection) {
            display.textContent = 'It\'s a draw!';
        } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            display.textContent = 'Computer wins!';
        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            display.textContent = 'Computer wins!';
        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            display.textContent = 'Computer wins!';
        } else {
            display.textContent = 'Player score +1!';
            playerScore++;
            score.textContent = playerScore;

            if (playerScore === 5) {
                display.textContent = 'Player wins!';
            }
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