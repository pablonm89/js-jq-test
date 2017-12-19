createGrid(16)

function createGrid(n) {
	let grid = '<div class="grid"></div>'
	for (row = 0; row < n; row++) {
		for (column = 0; column < n; column++) {
			$('.container').append(grid)
		}
	}
	$('.grid').width(800/n)
	$('.grid').height(800/n)
	setMouseOver()
}

function clearGrid() {
	$('.container').empty()
}

function setGrid() {
	let gridValue = prompt('Display grid by: ')
	if (gridValue < 2 || gridValue > 64) return alert('Please select a number between 2 and 64.')
	clearGrid()
	createGrid(gridValue)
}

function setMouseOver() {
	$('.grid').on('mouseover', function() {
		$(this).css('background', '#333')
	})
}

$('.js-btn').click(_ => {
	setGrid()
})