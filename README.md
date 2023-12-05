# blackJack
Welcome to the Blackjack Game repository! This is a simple web-based implementation of the classic Blackjack game, written in JavaScript. The game allows you to play Blackjack against the computer by drawing cards and trying to get as close to 21 as possible without exceeding it.

# Getting Started
### To run the game, simply open the index.html file in a web browser. The game interface will be displayed, and you can start playing by clicking the "Start Game" button.

# How to Play
1. Click the "Start Game" button to begin a new round.
2. Two initial cards will be drawn for the player, and the sum of the card values will be displayed.
3. Decide whether to draw a new card by clicking the "New Card" button.
4. Try to get as close to 21 as possible without exceeding it.
5. If your card sum equals 21, you win! If it exceeds 21, you lose.
6. The player's name and remaining chips are displayed at the top.

# Code Overview
The code consists of JavaScript functions that handle the game logic and update the HTML elements accordingly. Here's a brief overview of the main components:

1. Variables: Track game state, player details, cards, and messages.
Functions:
- startGame(): Initializes a new game by generating two random cards.
- renderGame(): Updates the HTML elements to reflect the current game state.
- newCard(): Draws a new card and updates the game state if the player is alive and doesn't have Blackjack.

# Customize the Player

You can customize the player's name and starting chips by modifying the player object at the beginning of the script.


<code>let player = {
    name: "YourName",
    chips: 100
}</code>
Feel free to explore the code and make any enhancements or modifications to suit your preferences.

Enjoy playing Blackjack! 🃏