"use strict";

let allCareers = document.querySelectorAll(".career");

allCareers[0].addEventListener("click", function(){
    document.getElementById("tabcontent").innerText = "Software engineers design, build, and maintain the apps and systems people use every day.";
});

allCareers[1].addEventListener("click", function(){
    document.getElementById("tabcontent").innerText = "ML engineers build systems that learn from data, like recommendation engines and language models.";
});

allCareers[2].addEventListener("click", function(){
    document.getElementById("tabcontent").innerText = "Data scientists analyze data to find patterns and answer questions that guide decisions.";
});

allCareers[3].addEventListener("click", function(){
    document.getElementById("tabcontent").innerText = "Cybersecurity specialists protect systems and data from attacks and find weaknesses before attackers do.";
});

allCareers[4].addEventListener("click", function(){
    document.getElementById("tabcontent").innerText = "Front-end developers build the parts of a website users see and interact with.";
});

allCareers[5].addEventListener("click", function(){
    document.getElementById("tabcontent").innerText = "Cloud and DevOps engineers keep applications running smoothly on servers and in the cloud, even when millions of people use them.";
});