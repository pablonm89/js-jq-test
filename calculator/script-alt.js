let $display = $('.display')
let tempDisplay = []
let total = 0

$('.num').click(e => {
	tempDisplay.push($(e.target).html())
	$display.html(tempDisplay)
})

$('.equal').click(_ => {
	total = eval(tempDisplay.join(''))
	tempDisplay = []
	$display.html(total)
})

$('.clear').click(_ => {
	tempDisplay = []
	$display.html(tempDisplay)
})

$('.del').click(_ => {
	tempDisplay.pop()
	$display.html(tempDisplay)
})