//clears the equation
$('.clear').click(_ => clear())

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

function clear() {
	$('.display').html('0')
}

let pushed = $('.display').html()

/*
$('.num').click(e => {
	$('.display').html($(e.target).html())
})
*/

$('.num').click(e => {
	$('.display').html($(e.target).html())
})

/*
    var inputLabel = document.getElementById('inputLabel');
     
    function pushBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calculate
            inputLabel.innerHTML = eval(inputLabel.innerHTML);
             
        } else if (pushed == 'AC') {
            // All Clear
            inputLabel.innerHTML = '0';
             
        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;
                 
            } else {
                inputLabel.innerHTML += pushed;
                 
            }
        }
    }

*/