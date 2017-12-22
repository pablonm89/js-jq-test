let $display = $('.display')
let tempDisplay = []
let total = 0

$('.num').click(e => {
	tempDisplay.push($(e.target).html())
	$display.html(tempDisplay)
})

const add = (a,b) => a + b
const sub = (a,b) => a - b
const mul = (a,b) => a * b
const div = (a,b) => a / b

function operate(operator, a, b) {
	a = parseFloat(a)
	b = parseFloat(b)
	if (operator == '+') return add(a,b)
	if (operator == '-') return subs(a,b)
	if (operator == '/') return mult(a,b)
	if (operator == '*') return div(a,b)
}