// Import Arrays from setup.js
import { LEVEL, OBJECT_TYPE } from './setup';

// Import JS Classes
import GameBoard from '/GameBoard';

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
let gameWin = flase;
let powerPillActive = false; // Important when Pacman eats a PowerPill
let powerPillTimer = null; // Timer for PowerPill


function gameOver(pacman, grid){



}


function checkCollision(pacman, ghosts){



}


function gameLoop(pacman, ghosts){



}


function startGame(){


}



