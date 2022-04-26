const startPageEl = document.querySelector('#start-page');
const highScoresEl = document.querySelector('#highscores');
const quizEl = document.querySelector('#quiz');
const buttonEl = document.querySelector('#btn');
let timer

buttonEl.addEventListener('click', startQuiz);

function startQuiz(){
    displaySection(1);
    timer = setInterval(function(){
        
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

