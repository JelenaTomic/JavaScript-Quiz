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

var containerQuestions = document.getElementById("question-container");
var containerStart = document.getElementById("start");
var correctEl =document.getElementById("correct");
var incorrectEl = document.getElementById("incorrect");
var btnStartEl = document.querySelector("#start-button");
var questionsEl = document.getElementById("questions");
var answerButtonEl = document.getElementById("answers-buttons");
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var timeisup;
timerEl.innerText = 0;
