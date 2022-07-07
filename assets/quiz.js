// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// when you open the page we will have the button to start the quiz and Time
// questions with multiple choice is poping Up
// 1.q  what data type is not supported by js: undefined, sting, boolean,letters answ letters
//  2.q What are the advantages of JavaScript? Less server interaction, Immediate feedback to the visitors ,ncreased interactivity , all the Above; answe all the above
// 3q Is Java Script case sensitive language? No, yes, only on the begging, in most cases no, answ yes
// 4.q What are the different data types present in JavaScript? Primitive data types, Non- Primitive data types, all  the above, none the above? all of the above
// 5q. What statement is a stirng? "6",6,six, none asbwer "6"
// 6q. What is list of strings or objects in JavaScript is called? variable, index, array, function? ans array 
// 7q. '+=' operator can operate on following data values? Float, String", Integer, All the above/ answ integer
// 8.q ery useful tool for used during development and debugging for printing content to the debugger is? terminal, console log, for loops, all the above/ ans console log
// 9q. What is the output of "10"+20+30 in JavaScript? 102030 ,60 ,"10"50 , none the above. answ 102030
// 10q.Are Java and JavaScript same? yes, no, in some way, none the above, answ yes

var containerQuestionEl = document.getElementById("question-container")
var containerStart = document.getElementById("start")
var containerEnd = document.getElementById("timeisup")
var containerScoreEl = document.getElementById("score-banner")
var formplayer = document.getElementById("player")
var containerTopScores = document.getElementById("topscore-area")
var viewTopScore = document.getElementById("view-top-scores")
var listTopScore = document.getElementById("users-scores")
var correctEl = document.getElementById("correct")
var incorrectEl = document.getElementById("incorrect")

// element answers and questions
var questionEl = document.getElementById("questions")
var answerButtons = document.getElementById("answers-buttons")
var timerEl = document.querySelector("#timer")
var score = 0;
var timeleft
var timeisup
timerEl.innerText = 0;

// Buttons
var buttonStart = document.querySelector("#start-button")
var buttonStartOver = document.querySelector("#start-over")
var buttonClearScores = document.querySelector("#clear-top-scores")


// qestions and answers
var questions = [
    {
    question:   "What data type is not supported by JavaScript?",
    optionAnswers: ["undefined", "sting" , "boolean" ,"letters"],
    answer: 3
 },
 {
    question:   "What are the advantages of JavaScript?",
    optionAnswers: ["Less server interaction", "Immediate feedback to the visitors" ,"Increased interactivity" , "All the Above"],
    answer: 3
 },
 {
    question:   "Is Java Script case sensitive language?",
    optionAnswers: ["No", "Yes", "Only in the beginning", "In most cases no"],
    answer: 1
 },
 {
    question:   "What are the different data types present in JavaScript?",
    optionAnswers: ["Primitive data types","Non- Primitive data types", "All  the above", "None of the above"],
    answer: 2
 },
 {
    question:   "What statement is a string?",
    optionAnswers: [" ''6'' " ,"6","six", "none"],
    answer: 0
 },
 {
    question:   "What is the list of strings or objects in JavaScript called??",
    optionAnswers: ["Variable", "Index", "Array", "Function"],
    answer: 2
 },
 {
    question:   "'+=' operator can operate on following data values?",
    optionAnswers: ["Float", "String", "Integer", "All the above"],
    answer: 2
 },
 {
    question:   "Very useful tool for use during development and debugging for printing content to the debugger is?",
    optionAnswers: ["Terminal", "Console-log", "For loops", "All the above"],
    answer: 1
 },{
    question:   "What is the output of ''10''+20+30 in JavaScript?",
    optionAnswers: ["102030" , "60" ,"''10''50" , "None of the above"],
    answer: 0
 },{
    question:   "Are Java and JavaScript same?",
    optionAnswers: ["Yes", "No", "In some way", "None of the above"],
    answer: 1
 },
]
// assign details for questions
var questionIndex = 0
var arrayShuffledQuestions

// topscore array
var TopScores=[]

// timer, check if the time is up. Start time 150
var setTime = function(){
   timeleft = 150;


var timercheck = setInterval(function () {
    timerEl.innerText = timeleft;
    timeleft--

    if(timeisup){
        clearInterval(timercheck)
    }
    if(timeleft < 0){
        showScore()
        timerEl.innerText = 0
        clearInterval(timercheck)
    }
  },1000)
  } 

//   make the question selection random and use added classes to show or hide
var startGame = function(){
    containerStart.classList.add('hide');
    containerStart.classList.remove('show');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
        setTime()
        setQuestion()
}
// set up next question for quiz
var setQuestion = function(){
   resetAnswers()
   displayQuestion(arrayShuffledQuestions[questionIndex])
}

// to remove question buttons
var resetAnswers = function(){
   while (answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild)
   };
}

// to display question and answer otions
var displayQuestion = function(index){
   questionEl.innerText = index.question
   for(var i = 0; i < index.optionAnswers.length; i++){
      var answerbutton = document.createElement('button')
      answerbutton.innerText = index.optionAnswers[i].optionAnswers
      answerbutton.classList.add('btn')
      answerbutton.classList.add('answerbtn')
      answerbutton.addEventListener("click", answerCheck)
      answerButtons.appendChild(answerbutton)
   }
}

//  display correct if the question is answered right
var answerCorrect = function(){
   if(correctEl.className = "hide"){
      correctEl.classList.remove("hide")
      correctEl.classList.add("banner")
      incorrectEl.classList.remove("banner")
      incorrectEl.classList.add("hide")
   }
}

// display incorrect if the question is not answered right
var answerIncorrect = function(){
   if(incorrectEl.className ="hide"){
      incorrectEl.classList.remove("hide")
      incorrectEl.classList.add("banner")
      correctEl.classList.remove("banner")
      correctEl.classList.add("banner")
   }

}

// checking if the answer is correct
var answerCheck = function(event){
   var selectedAnswer = event.target
   if(arrayShuffledQuestions[questionIndex].answer === selectedAnswer.innerText){
      answerCorrect()
      score = score ++
   }
   else {
      answerIncorrect()
      score = score --;
      timeleft = timeleft - 10;

   }

   // checking if there is more questions, if it is, go next one
   questionIndex++
   if(arrayShuffledQuestions.lenght> questionIndex+1){
      setQuestion()
   }
   else{
      timeisup = "true"
      showScore();
   }
}