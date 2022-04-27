const startPageEl = document.querySelector('#start-page');
const highScoresEl = document.querySelector('#highscores');
const quizEl = document.querySelector('#quiz');
const buttonEl = document.querySelector('#btn');
let timer
var timeLeft = 60;

buttonEl.addEventListener('click', startQuiz);

function startQuiz(){
    displaySection(1);
    timer = setInterval(function(){
        timeLeft--;
        if(timeLeft <= 0){
            clearInterval(timer);
            displaySection(2);
        }
        console.log(timeLeft);
    }, 1000);
}

function displaySection(num){
    quizEl.classList.add('hidden');
    startPageEl.classList.add('hidden');
    highScoresEl.classList.add('hidden');

    switch(num){
        case 1:
            quizEl.classList.remove('hidden');
            break;
        case 2:
            highScoresEl.classList.remove('hidden');
            break;
        default:
            startPageEl.classList.remove('hidden');
    }
}

displaySection();

