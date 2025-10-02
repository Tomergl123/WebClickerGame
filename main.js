let score = 0
let multiplier = 1
let clicker = document.getElementById("clicker");
let clicks = document.getElementById("clicks");
let reset = document.getElementById("reset");
let multi = document.getElementById("multi");
let multiText = document.getElementById("multiText");



// creating function to LISTEN for click
clicker.addEventListener("click", function(){
    score = score +1 * multiplier;
    clicks.textContent = score
})

//Reset button
reset.addEventListener("click", function(){
    score = 0;
    multiplier = 1
    clicks.textContent = score
    multiText.textContent = multiplier
})

//Multiplier button
multi.addEventListener("click", function(){
    multiplier = multiplier * 2
    multiText.textContent = multiplier
})

