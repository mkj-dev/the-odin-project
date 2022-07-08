const playerSelection = prompt('Type what do you choose - Rock, paper or scissors: ');
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

// Generate a random choice from choices array
function computerPlay() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	const choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
}

// Play one round with the computer
function playRound(playerSelection, computerSelection) {
	// Testing
	console.log('Player: ', playerSelection);
	console.log('Computer: ', computerSelection);
	
	if (playerSelection === computerSelection) {
		return 'It\'s a draw!';
	} else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		return 'Computer wins!';
	} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		return 'Computer wins!';
	} else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		return 'Computer wins!';
	} else {
		return 'Player wins!';
	}
}
