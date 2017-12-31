let $display = $('.display')
let $buttons = $('.btn')
let tempDisplay = []
let operator;
let didOperate = false
let a = ''
let b = ''

const add = (a,b) => a + b
const sub = (a,b) => a - b
const mul = (a,b) => a * b
const div = (a,b) => a / b

const operate = (ops, a, b) => {
	a = parseFloat(a)
	b = parseFloat(b)
	if (ops == '+') return add(a,b)
	if (ops == '-') return sub(a,b)
	if (ops == '*') return mul(a,b)
	if (ops == '/') return div(a,b)
}

function getInput(input) {
	console.log(input)
	if (input == 'AC') {
		a = ''
		b = ''
		tempDisplay = []
		$display.html('0')
	} else if (input == 'back') {
		tempDisplay.pop()
		$display.html(tempDisplay)
	} else if (/[0-9\.]/.test(input)) {
		if (input == '.' && tempDisplay.join('').includes('.')) return
		tempDisplay.push(input)
		$display.html(tempDisplay.join(''))
	} else if (/[+-/*]/.test(input)) {
		if (a == '' || didOperate) {
			a = tempDisplay.join('') || a
			didOperate = false
		} else {
			b = tempDisplay.join('')
			if (b) {
				total = `${operate(operator, a, b)}`
	        		a = total
	        		tempDisplay = []
			}
			$display.html(a)
		}
		operator = input
		tempDisplay = []
	} else if (input == '=') {
		b = tempDisplay.join('') || b
		total = `${operate(operator, a, b)}`
		if (total != "NaN" && total != "undefined") {
     			a = total
      			tempDisplay = []
      			didOperate = true
      			$display.html(a)
    		}
	}
}

$buttons.click(e => {
	getInput($(e.target).html())
})
