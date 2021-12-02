const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;
let timerId = null;
let squareToHit = null;

function renderMole() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let squareWithMole = squares[Math.floor(Math.random() * 9)];
    squareWithMole.classList.add('mole');

    squareToHit = squareWithMole.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === squareToHit) {
            result++;
            score.textContent = result;
            squareToHit = null;
        }
    });
});

function moveMole() {
    timerId =  setInterval(renderMole, 500);
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countdownTimerId);
        alert(`GAME OVER! Your score is ${result}`);
    }
}

let countdownTimerId = setInterval(countDown, 1000);

moveMole();