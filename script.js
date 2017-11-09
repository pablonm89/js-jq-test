createGrid(16)

function createGrid(n) {
    for (var rows = 0; rows < n; rows++) {
        for (var columns = 0; columns < n; columns++) {
            $(".grid-container").append("<div class='grid'></div>")
        }
    }
    $(".grid").width(800/n)
    $(".grid").height(800/n)
}

function deleteGrid() {
$('.grid-container').empty()
}

function promptGrid() {
	var nn = prompt('Select new grid number')
	deleteGrid()
	createGrid(nn)
}

$('.js-btn').click(_ => {
promptGrid()
})