let score = 0
let multiplier = 1
let costMulti = 10
let autoCost = 100
let upgradeAmount = 1
let autoClick = 0
let clicker = document.getElementById("clicker");
let clicks = document.getElementById("clicks");
let reset = document.getElementById("reset");
let multi = document.getElementById("multi");
let multiAmount = document.getElementById("multiAmount");
let multiText = document.getElementById("multiText");
let costText = document.getElementById("costText");
let autoclickBtn = document.getElementById("autoClickBtn");
let autoText = document.getElementById("autoText");
let autoAmount = document.getElementById("autoAmount");
let autocostText = document.getElementById("autocostText");



// creating function to LISTEN for click
clicker.addEventListener("click", function(){
    score = score +1 * multiplier;
    clicks.textContent = score
})

//Reset button
reset.addEventListener("click", function(){
    score = 0;
    multiplier = 1
    costMulti = 10
    autoClick = 0
    costAuto = 100
    clicks.textContent = score
    multiAmount.textContent = multiplier
    costText.textContent = costMulti
    autoText.textContent = autoClick


})

//Multiplier button
multi.addEventListener("click", function(){
    if (score >= costMulti){
        multiplier = multiplier * 2
        score = score - costMulti
        clicks.textContent = score
        multiAmount.textContent = multiplier
        costMulti = costMulti * 2.5
        costText.textContent = costMulti
        console.log("Multiplier is now:", multiplier);
    } else {
        multi.disabled = true
        let originalHTML = multi.innerHTML;
        multi.innerHTML = "Not enough clicks!";
        setTimeout(() => {
            multi.innerHTML = originalHTML;
            multiAmount = document.getElementById("multiAmount");
            multiAmount.textContent = multiplier;
            multi.disabled = false
        }, 1000);
    }
})

//Autoclicker function
function autoClickFunction(){
    score += autoClick;
    clicks.textContent = score;
}

setInterval(autoClickFunction, 1000);

//Autoclicker button
autoclickBtn.addEventListener("click", function(){
    if (score >= autoCost){
        autoClick *= 2
        score = score - autoCost
        clicks.textContent = score
        autoAmount.textContent = autoClick
        autoCost = autoCost * 5
        autocostText.textContent = autoCost
        autoAmount.textContent = autoClick
        console.log("Autoclicker is now:", autoClick);
    }
    else {
        let originalHTML = autoclickBtn.innerHTML;
        autoclickBtn.innerHTML = "Not enough clicks!";
        autoclickBtn.disabled = true;
        setTimeout(() => {
            autoclickBtn.innerHTML = originalHTML;
            autoAmount.textContent = autoClick;
            autoclickBtn.disabled = false;
        }, 1000);
    }
})
