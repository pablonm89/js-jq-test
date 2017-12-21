//clears the equation
$('.clear').click(_ => clear())

const clear = () =>	{
	aDisplay = []
	$('.display').html('0')
}

const add = (a, b) => a + b
const sub = (a, b) => a - b
const mult = (a, b) => a * b
const div = (a, b) => a / b

function operate(operator, a, b) {
	if (operator == '+') return add(a, b)
	if (operator == '-') return sub(a, b)
	if (operator == '*') return mult(a, b)
	if (operator == '/') return div(a, b)
}


let aDisplay = []

$('.num').click(e => {
	aDisplay.push($(e.target).html())
	$('.display').html(aDisplay)
})

$('.del').click(_ => {
	aDisplay.pop()
	$('.display').html(aDisplay)
})

