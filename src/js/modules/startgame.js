import drawField from "./drowfield";
import gameOver from "./gameover";
import shuffle from "./shuffle";

const restartBtn = document.querySelector('#restart'),
      gameWindow = document.querySelector('.game-window');

let cards;

let clicksCounter = 0,
    moves = 0;
      
export default function startGame(currentLevel, indexes) {
    document.querySelector('.start-game').style.display = 'none';
    document.querySelector('.game-over').style.display = 'none';

    gameWindow.style.display = 'grid';
    restartBtn.style.display = 'inline-block';

    drawField(currentLevel, shuffle(indexes));

    cards = document.querySelectorAll('.card');

    cards.forEach(card => {card.classList.add('show')});
    setTimeout(() => {
        cards.forEach(card => {card.classList.remove('show')});

        gameWindow.addEventListener('click', triggerGameCheck);
    }, 5000)
}

function triggerGameCheck(e) {
    gameCheck(e);
}

function gameCheck(e) {
    if (e.target === gameWindow || e.target.getAttribute('class') === 'card__img') return;
    
    clicksCounter++;
    moves++;
    e.target.classList.add('show');

    if (clicksCounter === 2) {
        gameWindow.removeEventListener('click', triggerGameCheck);

        setTimeout(() => { 
            const activeCards = document.querySelectorAll('.card.show');
            if (activeCards[0].getAttribute('data-id') === activeCards[1].getAttribute('data-id')) {
                activeCards.forEach(card => {card.classList.add('opened')})

                if (checkForGameOver()) {
                    gameOver(moves);
                }

            }
            
            activeCards.forEach(card => {card.classList.remove('show')})

            clicksCounter = 0;
            gameWindow.addEventListener('click', triggerGameCheck);

        }, 1000)
    }
}

function checkForGameOver() {
    let flag = true;
    cards.forEach(card => {
        if (!card.classList.contains('opened')) flag = false;
    });
    return flag;
}