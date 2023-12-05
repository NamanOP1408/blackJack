


let firstCard = Math.floor(Math.random() * 15) + 1;
let secondCard = Math.floor(Math.random() * 15) + 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
function startGame(){

    sumEl.textContent = "Score: " + sum;
if (sum <= 20) {
    message = "Do you want to draw a new card? 😒"

} else if (sum === 21){
    message = "OMG, PAPI, MONEY MONEY MONEY 😘"
    hasBlackJack = true;
}
else if(sum > 21) {
  message = "Better Luck next Time 😂"
  isAlive = false;
}

messageEL.textContent = message;
}


