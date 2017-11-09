var rows = 8;
var columns = 8;

var $row = $('.row');
var $squares = $('.squares');

for (i = 1; i < columns; i++) {
	$row.append($squares.clone());
}

for (q = 1; q < rows; q++) {
	$('.grid-container').append($row.clone());
}