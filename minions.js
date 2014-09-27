(function () {
	var grid  = [
		null, null, null,
		null, null, null,
		null, null, null
		],
		x     = 'x',
		o     = 'o',
		turnNumber = 1,
		$turnNumber = $('#turn-number'),
		whosTurn,
		$whosTurn = $('#whos-turn'),
		$clickPosition = $('#click-position'),
		empty = null;

	var whosTurnIsIt = function () {
		$turnNumber.html(turnNumber);

		// X goes if turnNumber is ODD, else O goes
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
			console.log('taken!');
			return;
		} else {	
			grid[clickPosition] = whosTurn;
			$(this).text(whosTurn);
			if (whosTurn == x) {
				$(this).addClass('x-color');
			} else if (whosTurn == o) {
				$(this).addClass('o-color');
			}
			console.log(grid);
			checkForWinner();
			whosTurnIsIt();
		}
	});

	var checkForWinner = function () {
		var $gameOutcome = $('#game-outcome');
		if (turnNumber > 9) {
			$gameOutcome.text('Draw!');
		} else {

		}
	};

	var initGame = function () {
		whosTurnIsIt(turnNumber);
		console.log(grid);
	};

	initGame();
}());