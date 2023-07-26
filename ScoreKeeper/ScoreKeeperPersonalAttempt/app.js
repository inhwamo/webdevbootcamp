const score = document.querySelector('#scoreKeeper');
const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const resetButton = document.querySelector('#reset');
const winningScoreElement = document.querySelector('#playto');
let winningScore  = Number(winningScoreElement.value);
const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');


let p1Score = 0;
let p2Score = 0;
//let isGameOver = false; 

p1Button.addEventListener('click', function () {
    if (p1Score < winningScore) { //if (!isGameOver)
        p1Score += 1;
        p1ScoreDisplay.textContent = p1Score;
        if (p1Score === winningScore) {
            p1ScoreDisplay.classList.add('has-text-success');
            p2ScoreDisplay.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

p2Button.addEventListener('click', function () {
    if (p2Score < winningScore) {
        p2Score += 1;
        p2ScoreDisplay.textContent = p2Score;
        if (p2Score === winningScore) {
            p1ScoreDisplay.classList.add('has-text-danger');
            p2ScoreDisplay.classList.add('has-text-success');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})
winningScoreElement.addEventListener('change', function () {
    winningScore = Number(winningScoreElement.value); //Number() stricter than ParseInt()

})
resetButton.addEventListener('click', function () {
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
    p1ScoreDisplay.classList.remove('has-text-success', 'has-text-danger');
    p2ScoreDisplay.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
})

// function reset(){

// }