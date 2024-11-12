// Import Arrays from setup.js
import { LEVEL, OBJECT_TYPE } from './setup';

// Import randomMovement() from ghostMoves.js
import { randomMovement } from './ghostMoves';

// Import JS Classes
import GameBoard from './GameBoard';
import Pacman from './Pacman';
import Ghost from './Ghost';

// Define DOM Elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton =  document.querySelector('#start-button');

// Define Constants
const POWER_PILL_TIME = 10000; // 10 milli-seconds
const GLOBAL_SPEED = 80; // milli-seconds
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL); // Call GameBoard


// Initial Setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false; // Important when Pacman eats a PowerPill
let powerPillTimer = null; // Timer for PowerPill


function gameOver(pacman, grid){



}


function checkCollision(pacman, ghosts){



}


function gameLoop(pacman, ghosts){

    console.log(" Calling gameLoop()...");

    // Call moveCharacter() with pacman
    gameBoard.moveCharacter(pacman);

}


function startGame(){

    // Starting A New Game
    gameWin = false;
    powerPillActive = false;
    score = 0;

    // Set Class to startButton
    startButton.classList.add('hide');

    // Create A New gameGrid
    gameBoard.createGrid(LEVEL); 

    // Create Pacman
    // Set Speed to 2 & Position 287
    const pacman = new Pacman(2, 287);

    // Put PACMAN Object At Position 287
    gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);

    // Add Event Listener To Control Pacman
    document.addEventListener('keydown', (e) => 
        // Call Function from pacman{}
            // Using => function in gameBoard.objectExist
            // Instead of .bind(gameBoard)
        pacman.handleKeyInput(e, gameBoard.objectExist)
    );

    // Create Ghosts
    const ghosts = [
        // Placing ghosts diagonally
        // Pass speed, startPos, movement, ghostName
        new Ghost(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
        new Ghost(4, 209, randomMovement, OBJECT_TYPE.PINKY),
        new Ghost(3, 230, randomMovement, OBJECT_TYPE.INKY),
        new Ghost(2, 251, randomMovement, OBJECT_TYPE.CLYDE)
    ]

    // Set Interval to call gameLoop() 
    // Call gameLoop() every 80 ms
    timer = setInterval(() => gameLoop(pacman), GLOBAL_SPEED);

}

// Initialize Game
startButton.addEventListener('click', startGame);


