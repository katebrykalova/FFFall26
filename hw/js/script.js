"use strict";

let title = document.getElementById("title");
let banner = document.getElementById("banner");
let features = document.getElementById("features");

features.classList.add("highlight");


title.addEventListener("click", function() {
    title.innerHTML = "Never Forget a Gift";
    title.style.color = "orange";
});

banner.addEventListener("mouseover", function() {
    banner.style.opacity = "0.6";
});

banner.addEventListener("mouseout", function() {
    banner.style.opacity = "1";
});

features.addEventListener("click", function() {
    features.style.backgroundColor = "oldlace";
    features.style.borderWidth = "5px";
});