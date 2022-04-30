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
const timerEl = document.querySelector("#timer");
let timer
var timeLeft = 60;
choiceA.addEventListener('click', (e)=>{console.log(e)});


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

for(var i = 0; i <= questions.length; i++){
        console.log(questions[i]);


}

//define what quetion you're on
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

//render question:
function renderQuestion(runningQuestion){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
   // const choiceA = document.getElementById("A");
    choiceA.innerHTML = q.answers.choiceA;
    choiceB.innerHTML = q.answers.choiceB;
    choiceC.innerHTML = q.answers.choiceC;
    choiceD.innerHTML = q.answers.choiceD;

    choiceA.addEventListener('click', (e)=> {
        console.log(e.target.id);
        if(q.answers.correct = e.target.id){
            alert("you are correct!");
        }
        else {
            alert("Wrong answer!");
            //
        }
        
    });

    choiceB.addEventListener('click', (e)=> {
        console.log(e.target.id);
        if(q.answers.correct = e.target.id){
            alert("you are correct!");
        }
        else {
            alert("Wrong answer!");
        }
    });

    choiceC.addEventListener('click', (e)=> {
        console.log(e.target.id);
        if(q.answers.correct = e.target.id){
            alert("you are correct!");
        }
        else {
            alert("Wrong answer!");
        }
    });

    choiceD.addEventListener('click', (e)=> {
        console.log(e.target.id);
        if(q.answers.correct = e.target.id){
            alert("you are correct!");
        }
        else {
            alert("Wrong answer!");
        }
    });

    console.log(q);
}

buttonEl.addEventListener('click', startQuiz);



function startQuiz(){
    displaySection(1);
    renderQuestion(1);
    timer = setInterval(function(){
        timeLeft--;
        if(timeLeft <= 0){
            clearInterval(timer);
            displaySection(2);
        }
        timerEl.textContent = timeLeft;
       // console.log(choiceA);
    }, 1000);
}

//use index to iterate through questions
//timer in for loop

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