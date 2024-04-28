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
      card : 'card6',
      img: 'img/cards6.jpg'
    },
    {
      card : 'card7',
      img: 'img/cards7.jpg'
    }, 
    {
      card : 'card8',
      img: 'img/cards8.jpg'
    },
    {
      card : 'card9',
      img: 'img/cards9.jpg'
    }
  ];

  cards.sort(() => 0.5 - Math.random())
  let board = document.querySelector('.game')
  let cardsChosen = [];
  let cardsId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/cardsBack.jpg')
      card.setAttribute('card-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
    }
  }

  function flipCard() {
    const selectedCards = document.querySelectorAll('img')
    let cardId = this.getAttribute('card-id')
    let cardsChosen = []
    let cardsChosenId = []
    cardsChosen.push(cards[cardId].card)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cards[cardId].img)

  }

  createBoard()
})