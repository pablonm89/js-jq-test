// return Rock/Paper/Scissor at random
function computerPlay() {
	let choice = ['Rock', 'Paper', 'Scissors']
	let selectRandom = Math.floor(Math.random() * choice.length)
	return choice[selectRandom]
}

// plays a round of the game
function playRound(computerSelection) {
	let playerChoice = prompt('Choose Rock, Paper or Scissors.').toLowerCase()
	let computerChoice = computerSelection.toLowerCase()

	if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') return alert('Please select Rock, Paper or Scissors.')

	if (playerChoice == computerChoice) return $('.para').text('It\'s a tie!')
	
	let rockPaper = (playerChoice == 'rock' && computerChoice == 'paper')
	let paperRock = (playerChoice == 'paper' && computerChoice == 'rock')
	let scissorsPaper = (playerChoice == 'scissors' && computerChoice == 'paper')

	if (rockPaper || paperRock || scissorsPaper) {
		return $('.para').text('You win! ' + playerChoice + ' ' + 'beats' + ' ' + computerChoice)
	} else {
		return $('.para').text('You lose! ' + computerChoice + ' beats ' + playerChoice)
	}
}

// play n rounds of the game
function playGame() {
	playRound(computerPlay())
}

// jQuery for the button
$('.js-btn').click(_ => {
	playGame()
});