let score = 0
let multiplier = 1
let cost = 10
let clicker = document.getElementById("clicker");
let clicks = document.getElementById("clicks");
let reset = document.getElementById("reset");
let multi = document.getElementById("multi");
let multiText = document.getElementById("multiText");
let costText = document.getElementById("costText");


// creating function to LISTEN for click
clicker.addEventListener("click", function(){
    score = score +1 * multiplier;
    clicks.textContent = score
})

//Reset button
reset.addEventListener("click", function(){
    score = 0;
    multiplier = 1
    cost = 10
    clicks.textContent = score
    multiText.textContent = multiplier
    costText.textContent = cost

})

//Multiplier button
multi.addEventListener("click", function(){
    if (score >= cost){
        multiplier = multiplier * 2
        score = score - cost
        clicks.textContent = score
        multiText.textContent = multiplier
        cost = cost * 2.5
        costText.textContent = cost


    } else {
        multiplier = multiplier * 1
        multiText.textContent = "Not enough clicks!"
    }
})

