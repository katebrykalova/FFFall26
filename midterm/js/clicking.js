"use strict";

let aboutBox = document.getElementById("about");

aboutBox.addEventListener("mouseover", function() {
    aboutBox.style.backgroundColor = "#dddddd";
});

aboutBox.addEventListener("mouseout", function() {
    aboutBox.style.backgroundColor = "#f4f4f4";
});