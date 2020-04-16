document.addEventListener('DOMContentLoaded', () => {
	//array of cards

	const cardArray = [
		{
			name: 'fries',
			img: 'images/fries.png',
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png',
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png',
		},
		{
			name: 'pizza',
			img: 'images/pizza.png',
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png',
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png',
		},
		{
			name: 'fries',
			img: 'images/fries.png',
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png',
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png',
		},
		{
			name: 'pizza',
			img: 'images/pizza.png',
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png',
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png',
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	//create board
	const grid = document.querySelector('.grid');

	let resultDisplay = document.querySelector('#result');
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];

	const createBoard = () => {
		for (let i = 0; i < cardArray.length; i++) {
			let card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	};

	//check for matches
	const checkForMatch = () => {
		let cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] != cardsChosenId[1]) {
			alert("It's a Match!");
			cards[optionOneId].setAttribute('src', 'images/white.png');
			cards[optionTwoId].setAttribute('src', 'images/white.png');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.png');
			cards[optionTwoId].setAttribute('src', 'images/blank.png');
			alert('Sorry Try again');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		console.log(cardsWon.length);
		console.log(cardArray.length / 2);
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = 'You found them all!';
			playAgain(resultDisplay.textContent);
		}
	};

	//flip card
	function flipCard() {
		let cardId = this.getAttribute('data-id');
		let src = this.getAttribute('src');
		if (src === 'images/white.png') {
			return alert('You cannot select that!');
		}
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}
	createBoard();
});

const playAgain = (msg) => {
	setTimeout(() => {
		alert(msg + ' \n Press Okay to play again!');
		location.reload();
	}, 10);
};
