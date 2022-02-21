const gameWindow = document.querySelector('.game-window'),
      gameOverModal = document.querySelector('.game-over'),
      gameOverTitle = document.querySelector('.game-over__title span');

export default function gameOver(moves) {
    gameWindow.style.display = 'none';
    gameOverModal.style.display = 'block';
    gameOverTitle.innerHTML = moves;
}