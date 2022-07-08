const playerSelection = prompt('Type what do you choose - Rock, paper or scissors: ');
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);

// Generate a random choice from choices array
function computerPlay() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	const choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
}

// Play one round
function playRound(playerSelection, computerSelection) {
	
}
