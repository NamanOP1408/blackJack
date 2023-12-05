


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Naman",
    chips: 100
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function startGame(){
    isAlive = true;
    let firstCard = Math.floor(Math.random() * 13) + 1;
    let secondCard = Math.floor(Math.random() * 13) + 1;
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
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

function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let newCardNumber = Math.floor(Math.random() * 13) + 1;
    sum = sum + newCardNumber;
    cards.push(newCardNumber);
    renderGame();
}
}









