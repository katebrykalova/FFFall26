"use strict";

let button = document.getElementById("submit");
let select = document.getElementById("interest");
let result = document.getElementById("result");


button.addEventListener("click", function(){
    if (select.value == "building") {
        result.innerText = "Your match: Software Engineer";
    }
    if (select.value == "learning") {
        result.innerText = "Your match: ML Engineer";
    }
    if (select.value == "data") {
        result.innerText = "Your match: Data Scientist";
    }
    if (select.value == "security") {
        result.innerText = "Your match: Cybersecurity";
    }
    if (select.value == "design") {
        result.innerText = "Your match: Front-End Developer";
    }
});