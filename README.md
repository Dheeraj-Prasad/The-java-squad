# The-java-squad
What Number Am I thinking
EECS 1012 Term Project

Members:

Name: Hamid Hidari
York email: hamid12@my.yorku.ca
Lecture and lab section: Section B & Lab 01

Name: Sagarpreet Hooda
York email: sagarh@my.yorku.ca
Lecture and lab section: Section B & Lab 01

Name: Dheeraj Prasad Saji Prasad Reeja
York email: dheerajp@my.yorku.ca
Lecture and lab section: Section B & Lab01

Name: Olamifuyi Ebofin
York email: fuyi456@my.yorku.ca
Lecture and lab section:  Section B & Lab02


Team name: The Java Squad

What number am I thinking of? (W.N.T).

W.N.T, is a web based game that generates a random number between 1 and X, then the user tries to guess the correct number. If the user guesses correctly, an alert is displayed, and the program generates a new number. It comes with a leadership board counting each correct guess in a row by each user. The game displays different messages to the user; for their personal best record and when they lose. A turn based player vs player mode is available. A random number from 1 and X is generated and each player takes turns to guess. The player who guessed right or closest to the number wins, if it's a tie the game resets.
Player vs player mode will be a network based game instead of a turn based game. For the client side, the web application will be programmed in HTML and CSS. For the backend it will be programmed in node.js using WebSockets to provide real time communication between client and server.

Functional requirements:

User will be greeted by two button functions written in javascript, the two buttons will be options of single player or multiplayer
Single player option will display 4 options of difficulty; they will be easy, medium, hard, and custom
The user gets the chance to input his guesses, depending on the number of tries per level of difficulty.
Under easy there will be 3 chances to guess the correct number from the range of 1-20
Under medium there will be 5 chances to guess the correct number from the range of 1-50
Under hard there will be 10 chances to guess the correct number from the range of 1-100
Under the custom option, the program will display to the user an html textbox, where the user has to input a range between (1,X).
Once a range has been set, javascript will generate a random secret number within that range.
A function is created to check if user input matches the generated number,
If the user guesses correctly the game continues, and if he guess incorrectly the program ends
Multiplayer option will be turn based from the same device
Multiplayer will have the same difficulty modes as single player 
Player one has the first chance to input a number, the system will store his input, player 2 will have a chance to input his number and the system will .







