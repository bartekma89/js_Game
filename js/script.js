//deklaracje zmiennych
var newGameBtn = document.getElementById('js-newGameButton');
var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');
var newGameElement = document.getElementById('js-newGameElement');
var pickElement = document.getElementById('js-playerPickElement');
var resultElem = document.getElementById('js-resultsTableElement');
var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');
var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResult = document.getElementById('js-playerResult');
var computerResult = document.getElementById('js-computerResult');

var gameState = 'notStarted';
var player = {
	name: '',
	score: 0
};
var computer = {
	score: 0
};

setGameElements();

newGameBtn.addEventListener('click', newGame, false);

pickRock.addEventListener('click', function () {
	playerPick('rock');
}, false);
pickPaper.addEventListener('click', function () {
	playerPick('paper');
}, false);
pickScissors.addEventListener('click', function () {
	playerPick('scissors');
}, false);

function playerPick(playerPick) {

	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);

	checkResult();
}

function setGameElements() {

	switch (gameState) {
		case 'started':
			newGameElement.style.display = 'none';
			pickElement.style.display = 'block';
			resultElem.style.display = 'block';
			break;
		case 'ended':
			newGameBtn.innerHTML = 'Play again';
		case 'notStarted':
		default:
			newGameElement.style.display = 'block';
			pickElement.style.display = 'none';
			resultElem.style.display = 'none';
	}
}

function newGame() {

	player.name = prompt('Please enter your name', 'Player name');
	if (player.name) {
		player.score = 0;
		computer.score = 0;
		gameState = 'started';
		setGameElements();

		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}
}

function getComputerPick() {
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random() * 3)];
}

function checkRoundWinner(playerPick, computerPick) {

	playerResult.innerHTML = '';
	computerResult.innerHTML = '';

	var winnerIs = 'player';

	if (playerPick == computerPick) {
		winnerIs = 'none';
	} else if ((
			computerPick == 'paper' && playerPick == 'rock') || (computerPick == 'rock' && playerPick == 'scissors') || (computerPick == 'scissors' && playerPick == 'paper')) {
		winnerIs = 'computer';
	}

	if (winnerIs == 'player') {
		playerResult.innerHTML = 'Win!';
		player.score++;
	} else if (winnerIs == 'computer') {
		computerResult.innerHTML = 'Win!';
		computer.score++;
	} else if (winnerIs == 'none') {
		playerResult.innerHTML = '';
		computerResult.innerHTML = ''
	}

	setGamePoints();
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}

function checkResult() {

	if (player.score == 3) {
		gameState = 'ended';
		setGameElements();

	} else if (computer.score == 3) {
		gameState = 'ended';
		setGameElements();
	}
}

