createGrid(16)
mouseHover()

function createGrid(n) {
	for (var rows = 0; rows < n; rows++) {
		for (var columns = 0; columns < n; columns++) {
			$('.grid-container').append('<div class="grid"></div>')
		}
	}
	$('.grid').width(800/n)
	$('.grid').height(800/n)
}

function deleteGrid() {
	$('.grid-container').empty()
}

function promptGrid() {
	var nn = prompt('Select a number from 1 to 50')
	deleteGrid()
	if (nn <= 50 && nn != 0) {
		createGrid(nn)
	} else {
		alert('Please select a valid number')
	}
	mouseHover()
}

function mouseHover() {
	$('.grid').on('mouseover', function() {
		$(this).css('background-color', '#333')
	})
}

$('.js-btn').click(_ => {
	promptGrid()
})