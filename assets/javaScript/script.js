const startPageEl = document.querySelector('#start-page');
const highScoresEl = document.querySelector('#highscores');
const quizEl = document.querySelector('#quiz');
const buttonEl = document.querySelector('#btn');
let timer
var timeLeft = 60;

var question1 = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            a: "strings",
            b: "boonleans",
            c: "alerts",
            d: "numbers"
        }
    }
];

var question2 = [
    {
        question: "The condition of an if/else if statement is enclosed in:",
        answers: {
            a: "quotes",
            b: "parenthases",
            c: "curly brackets",
            d: "square brackets"
        }
    }
];

var question3 = [
    {
        question: "Arrays in JavaScript can be used to store______.",
        answers: {
            a: "numbers and strings",
            b: "boonleans",
            c: "other arrays",
            d: "all of the above"
        }
    }
];

var question4 = [
    {
        question: "String values must be enclosed in ____ when assigned to variables.",
        answers: {
            a: "curly brackets",
            b: "commas",
            c: "quotes",
            d: "parenthesis"
        }
    }
];

var question5 = [
    {
        question: "A very useful tool in web development and for debugging for printing content to the debugger in:",
        answers: {
            a: "JavaScript",
            b: "terminal/ bash",
            c: "for loops",
            d: "console.log"
        }
    }
];




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

