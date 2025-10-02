let score = 0
let multiplier = 1
let cost = 10
let upgradeAmount = 1
let clicker = document.getElementById("clicker");
let clicks = document.getElementById("clicks");
let reset = document.getElementById("reset");
let multi = document.getElementById("multi");
let multiAmount = document.getElementById("multiAmount");
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
    multiAmount.textContent = multiplier
    costText.textContent = cost
    multiAmount.textContent = upgradeAmount


})

//Multiplier button
multi.addEventListener("click", function(){
    if (score >= cost){
        multiplier = multiplier * 2
        score = score - cost
        clicks.textContent = score
        multiAmount.textContent = multiplier
        cost = cost * 2.5
        costText.textContent = cost
        upgradeAmount = upgradeAmount * 2
        multiAmount.textContent = upgradeAmount
    } else {
        multiAmount.textContent = "Not enough clicks!"
        setTimeout(() => {
            multiAmount.textContent = upgradeAmount;
        }, 1000);
    }
})

