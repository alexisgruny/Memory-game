document.addEventListener('DOMContentLoaded', () => {

  const cards = [
    {
      card : 'card0',
      img: 'img/cards0.jpg'
    },
    {
      card : 'card1',
      img: 'img/cards1.jpg'
    },
    {
      card : 'card2',
      img: 'img/cards2.jpg'
    },
    {
      card : 'card3',
      img: 'img/cards3.jpg'
    }, 
    {
      card : 'card4',
      img: 'img/cards4.jpg'
    },
    {
      card : 'card5',
      img: 'img/cards5.jpg'
    },
    {
      card : 'card0',
      img: 'img/cards0.jpg'
    },
    {
      card : 'card1',
      img: 'img/cards1.jpg'
    },
    {
      card : 'card2',
      img: 'img/cards2.jpg'
    },
    {
      card : 'card3',
      img: 'img/cards3.jpg'
    }, 
    {
      card : 'card4',
      img: 'img/cards4.jpg'
    },
    {
      card : 'card5',
      img: 'img/cards5.jpg'
    }
  ];
  cards.sort(() => 0.5 - Math.random());
  const board = document.querySelector('.game');
  let score = 0;
  let cardsChosen = [];
  let cardsChosenId = [];
  let time = 0;
  const timerElement = document.getElementById("timer");

  function timerUp() {
    timerElement.innerText = time;
    time++;
  }
  setInterval(timerUp,1000);


  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'img/cardsBack.jpg');
      card.setAttribute('card-id', i);
      card.addEventListener('click', flipCard);
      board.appendChild(card);
    }
  }

  function MatchCard(){
    const card = document.querySelectorAll('img');
    const firstCard = cardsChosenId[0];
    const secondCard = cardsChosenId[1];
    if (firstCard  === secondCard){
      card[firstCard].setAttribute('src', 'img/cardsBack.jpg');
      card[secondCard].setAttribute('src', 'img/cardsBack.jpg');
      alert('same cards');
    } else if (cardsChosen[0] === cardsChosen[1]){
      card[firstCard].removeEventListener('click', flipCard);
      card[secondCard].removeEventListener('click', flipCard);
      score++ 
    } else
    {
      card[firstCard].setAttribute('src', 'img/cardsBack.jpg');
      card[secondCard].setAttribute('src', 'img/cardsBack.jpg');
    }
    cardsChosen = [];
    cardsChosenId = [];
    if ( score == cards.length/2){
    alert('GG your time is '+time);
    }

  }
  function flipCard() {
    let cardId = this.getAttribute('card-id');
    cardsChosen.push(cards[cardId].card);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cards[cardId].img);
    if (cardsChosen.length == 2){
       setTimeout(MatchCard, 500);
    }

  }

  createBoard()
})