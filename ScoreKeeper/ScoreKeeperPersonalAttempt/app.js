const score = document.querySelector('#scoreKeeper');
const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const resetButton = document.querySelector('#reset');
const winningScoreElement = document.querySelector('#playto');
const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');

let p1Score = 0;
let p2Score = 0;
let winningScore = Number(winningScoreElement.value);

function updateScore(playerScore, playerScoreDisplay, opponentScoreDisplay) {
    if (playerScore < winningScore) {
        playerScore += 1;
        playerScoreDisplay.textContent = playerScore;
        if (playerScore === winningScore) {
            endGame(playerScoreDisplay, opponentScoreDisplay);
        }
    }
    return playerScore;
}

function endGame(winningScoreDisplay, losingScoreDisplay) {
    winningScoreDisplay.classList.add('has-text-success');
    losingScoreDisplay.classList.add('has-text-danger');
    p1Button.disabled = true;
    p2Button.disabled = true;
}

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
    p1ScoreDisplay.classList.remove('has-text-success', 'has-text-danger');
    p2ScoreDisplay.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}

p1Button.addEventListener('click', function () {
    p1Score = updateScore(p1Score, p1ScoreDisplay, p2ScoreDisplay);
});

p2Button.addEventListener('click', function () {
    p2Score = updateScore(p2Score, p2ScoreDisplay, p1ScoreDisplay);
});

winningScoreElement.addEventListener('change', function () {
    winningScore = Number(winningScoreElement.value);
});

resetButton.addEventListener('click', resetGame);
