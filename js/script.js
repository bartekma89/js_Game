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
var computerPointsElem = document.getElementById('js-copmuterPoints');
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
		playerNameElem.innerHTML = player.name;
		
		setGameElements();
	}
}

function getComputerPick() {
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random() * 3)];
}

