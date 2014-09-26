(function () {
	var grid  = [
		null, null, null,
		null, null, null,
		null, null, null
		],
		x     = 'x',
		o     = 'o',
		turnNumber = 1,
		whosTurn,
		$whosTurn = $('#whos-turn'),
		$clickPosition = $('#click-position'),
		empty = null;

	var whosTurnIsIt = function () {
		if (turnNumber % 2) {
			console.log('turnNumber' + '' , turnNumber , 'ODD');
			turnNumber ++;
			whosTurn = x;
		} else {
			console.log('turnNumber' + '' , turnNumber , 'EVEN');
			turnNumber ++;
			whosTurn = o;
		}
		$whosTurn.html(whosTurn);
	};

	var $square = $(".square");

	$square.on("click" , function () {
		var clickPosition = (this.getAttribute("data-board-position"));
		$clickPosition.text(clickPosition);
		if (grid[clickPosition] !== null) {
			alert('taken!');
			return;
		} else {
			grid[clickPosition] = whosTurn;
		}
		console.log(grid);
		checkForWinner();
		whosTurnIsIt();
	});

	var checkForWinner = function () {

	};

	var initGame = function () {
		whosTurnIsIt(turnNumber);
		// alert(whosTurn);
	};

	initGame();
}());