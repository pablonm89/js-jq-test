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

