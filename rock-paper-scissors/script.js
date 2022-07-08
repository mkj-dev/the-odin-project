game();
//console.log(playRound(cleanInput(playerSelection), computerSelection));

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

// Play one round with the computer
function playRound(playerSelection, computerSelection) {
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

// Playing the game 5 times
function game() {
	for (let i = 1; i <= 5; i++) {
		const playerSelection = prompt('Type what do you choose - Rock, paper or scissors: ');
		const computerSelection = computerPlay();
		console.log('Game: ', i);
		console.log(playRound(cleanInput(playerSelection), computerSelection));
	}
}

