const startPageEl = document.querySelector('#start-page');
const highScoresEl = document.querySelector('#highscores');
const quizEl = document.querySelector('#quiz');
const question = document.querySelector("#question");
const buttonEl = document.querySelector('#btn');
const answers = document.querySelector('#answer');
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
let timer
var timeLeft = 60;

let questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            choiceA: "strings",
            choiceB: "boonleans",
            choiceC: "alerts",
            choiceD: "numbers",
            correct: "C"
        }
    },
    {
        question: "The condition of an if/else if statement is enclosed in:",
        answers: {
            choiceA: "quotes",
            choiceB: "parenthases",
            choiceC: "curly brackets",
            choiceD: "square brackets",
            correct: "B"
        }
    },
    {
        question: "Arrays in JavaScript can be used to store______.",
        answers: {
            choiceA: "numbers and strings",
            choiceB: "boonleans",
            choiceC: "other arrays",
            choiceD: "all of the above",
            correct: "D"
        }
    },
    {
        question: "String values must be enclosed in ____ when assigned to variables.",
        answers: {
            choiceA: "curly brackets",
            choiceB: "commas",
            choiceC: "quotes",
            choiceD: "parenthesis",
            correct: "C"
        }
    },
    {
        question: "A very useful tool in web development and for debugging for printing content to the debugger in:",
        answers: {
            choiceA: "JavaScript",
            choiceB: "terminal/ bash",
            choiceC: "for loops",
            choiceD: "console.log",
            correct: "D"
        }
    }
];
//define what quetion you're on
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

//render question:
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

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
renderQuestion()
