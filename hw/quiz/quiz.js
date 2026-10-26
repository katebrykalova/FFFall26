"use strict";
const qa =  [
        {
            question: "Who wrote the very first computer program?",
            answer: "Ada Lovelace"
        },
        {
            question: "Which Navy officer's team found a real bug inside a computer?",
            answer: "Grace Hopper"
        },
        {
            question: "Which NASA mathematician helped send astronauts to space?",
            answer: "Katherine Johnson"
        },
        {
            question: "Which movie star helped invent the idea behind Wi-Fi?",
            answer: "Hedy Lamarr"
        },
        {
            question: "Who wrote the code that helped land astronauts on the Moon?",
            answer: "Margaret Hamilton"
        }
    ];//array of objects

/*
An Object is a variable that can hold many variables.

Objects are collections of key-value pairs, where each key (known as property names) has a value.

Objects can describe anything like houses, cars, people, animals, or any other subjects.

*/

let currentQuestion = 0;
let selectedAnswer;


console.log(qa[0].question);
document.getElementById("question").innerHTML = qa[currentQuestion].question;

document.getElementById("submit").addEventListener("click", function() {
     const selected = document.querySelector('input[name="option"]:checked');
     console.log(selected.value);
     if(selected.value == qa[currentQuestion].answer){
        document.getElementById("result").innerHTML = "Correct!";
     } else {
        document.getElementById("result").innerHTML = "Incorrect. The correct answer is " + qa[currentQuestion].answer + ".";
     }
     nextQuestion();
     setTimeout(()=>{
         document.getElementById("result").innerHTML = "";
        }, 3000);

});



function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < qa.length) {
        document.getElementById("question").innerHTML = qa[currentQuestion].question;
    } else {
        document.getElementById("question").innerHTML = "Quiz Complete!";
        document.getElementById("submit").style.display = "none";
        document.getElementById("result").innerHTML = "You have completed the quiz.";
        document.getElementById("optionsForm").style.display = "none";
    }

}
