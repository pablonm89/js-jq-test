let $display = $('.display')
let tempDisplay = ''

$('.num').click(e => {
	tempDisplay += $(e.target).html()
	$display.html(tempDisplay)
})

$('.equal').click(_ => {
	$display.html(eval(tempDisplay))
})

$('.clear').click(_ => {
	$display.html('0')
})


//TO DO
/*
1- Fix clear button
2- Fix back button
3- don't use eval, it's cheating
4- cap the decimals
5- if you press = and then add more numbers, fix the display
6- cap the numbers show in the screen or make them scroll outside display

*/