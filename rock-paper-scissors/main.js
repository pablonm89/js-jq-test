
// return Rock/Paper/Scissor at random
function computerPlay() {
	let choice = ['Rock', 'Paper', 'Scissors']
	let selectRandom = Math.floor(Math.random() * choice.length)
	return choice[selectRandom]
}

function playRound(computerSelection) {
	let playerChoice = prompt('Choose Rock, Paper or Scissors.').toLowerCase()
	let computerChoice = computerSelection.toLowerCase()

	if (playerChoice == computerChoice) {
		return alert('It\'s a tie!')
	}

	if (playerChoice == 'rock' && computerChoice == 'paper') {
		return alert('You win! ' + playerChoice + ' ' + 'beats' + ' ' + computerChoice)
	} else {
		return alert('You lose! ' + computerChoice + ' beats ' + playerChoice)
	}
	if (playerChoice == 'paper' && computerChoice == 'rock') {
		return alert('You win! ' + playerChoice + ' ' + 'beats' + ' ' + computerChoice)
	} else {
		return alert('You lose! ' + computerChoice + ' beats ' + playerChoice)
	}
	if (playerChoice == 'scissors' && computerChoice == 'paper') {
		return alert('You win! ' + playerChoice + ' ' + 'beats' + ' ' + computerChoice)
	} else {
		return alert('You lose! ' + computerChoice + ' beats ' + playerChoice)
	}
}

function playGame() {
	playRound(computerPlay())
}

