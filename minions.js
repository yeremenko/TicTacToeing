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

	var checkForWinner = function () {

	};

	var initGame = function () {
		whosTurnIsIt(turnNumber);
		alert(whosTurn);
	};

	initGame();
}());