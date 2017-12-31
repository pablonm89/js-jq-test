let userPoints = 0
let computerPoints = 0
let ties = 0
let rounds = 0

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

	// if random input
	if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') return alert('Please select Rock, Paper or Scissors.')

	// if tie
	if (playerChoice == computerChoice) {
		$('.para').text('It\'s a tie!')
		ties +=1
		return $('.counter').text('You: ' + userPoints + ' | Computer: ' + computerPoints + ' | ties: ' + ties)
	}
	
	let rockScissors = (playerChoice == 'rock' && computerChoice == 'scissors')
	let paperRock = (playerChoice == 'paper' && computerChoice == 'rock')
	let scissorsPaper = (playerChoice == 'scissors' && computerChoice == 'paper')

	// checks who wins each round
	if (rockScissors || paperRock || scissorsPaper) {
		$('.para').text('You win! ' + playerChoice + ' ' + 'beats' + ' ' + computerChoice)
		userPoints +=1
		return $('.counter').text('You: ' + userPoints + ' | Computer: ' + computerPoints + ' | ties: ' + ties)
	} else {
		$('.para').text('You lose! ' + computerChoice + ' beats ' + playerChoice)
		computerPoints +=1
		return $('.counter').text('You: ' + userPoints + ' | Computer: ' + computerPoints + ' | ties: ' + ties)
	}
}

// play n rounds of the game
function playGame() {
	playRound(computerPlay())
	rounds +=1

	// check who's the winner
	if (rounds == 5 && userPoints > computerPoints) {
		$('.result').text('FINAL RESULT: You have beaten the computer. Congratulations!')
	} else if (rounds == 5 && userPoints < computerPoints) {
		$('.result').text('FINAL RESULT: The computer beat you. Shame.')
	} else if (rounds == 5 && userPoints == computerPoints) {
		$('.result').text('FINAL RESULT: Well, this is awkward.')
	}
}

// jQuery for the button
$('.js-btn').click(_ => {
	if (rounds == 5) {
		rounds = 0
		userPoints = 0
		computerPoints = 0
		ties = 0
		$('p').empty()
	}
	playGame()
});
