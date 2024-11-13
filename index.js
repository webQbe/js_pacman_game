// Import Arrays from setup.js
import { LEVEL, OBJECT_TYPE } from './setup';

// Import randomMovement() from ghostMoves.js
import { randomMovement } from './ghostMoves';

// Import JS Classes
import GameBoard from './GameBoard';
import Pacman from './Pacman';
import Ghost from './Ghost';

// Import Sounds
import soundDot from './sounds/munch.wav';
import soundPill from './sounds/pill.wav';
import soundGameStart from './sounds/game_start.wav';
import soundGameOver from './sounds/death.wav';
import soundGhost from './sounds/eat_ghost.wav';


// Define DOM Elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton =  document.querySelector('#start-button');

// Define Constants
const POWER_PILL_TIME = 10000; // 10 seconds
const GLOBAL_SPEED = 80; // milli-seconds
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL); // Call GameBoard


// Initial Setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false; // Important when Pacman eats a PowerPill
let powerPillTimer = null; // Timer for PowerPill

// Handle Audio
function playAudio(audio){

     // Create a new instance of Audio class, 
     // taking audio parameter as its source.
     const soundEffect = new Audio(audio);

     // Call .play() method on soundEffect object
     soundEffect.play();

}


function gameOver(pacman, grid){

    // Play Sound
    playAudio(soundGameOver)

    // Remove Keydown Event Listener
    document.removeEventListener('keydown', e => 
        pacman.handleKeyInput(e, gameBoard.objectExist));

    // Display Game Status
    gameBoard.showGameStatus(gameWin);

    // Stop Calling gameLoop()
    clearInterval(timer);

    // Show Start Button
    startButton.classList.remove('hide');

}


function checkCollision(pacman, ghosts){

    // Get Collided Ghost
    const collidedGhost = ghosts.find(ghost => pacman.pos === ghost.pos);

    if(collidedGhost){
        // If collided 
        if(pacman.powerPill){

            // Play Audio
            playAudio(soundGhost);

            // If pacman got PowerPill
            gameBoard.removeObject(
                 // Pass Collided Ghost's position
                collidedGhost.pos,
                [
                    // Pass Classes To Be Removed
                    OBJECT_TYPE.GHOST,
                    OBJECT_TYPE.SCARED,
                    collidedGhost.name
                ]);
                // Move Ghost To Start Position W hen It Dies
                collidedGhost.pos = collidedGhost.startPos;

                // Add 100 Points
                score += 100;
        } else {
            // If Pacman Got No PowerPill, He Dies

            // Remove Pacman 
            gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PACMAN]);

            // Reset Rotated Div in Pacman's Position
            gameBoard.rotateDiv(pacman.pos, 0);

            // Call gameOver()
            gameOver(pacman, gameGrid);

        }
    }

}


function gameLoop(pacman, ghosts){

    console.log(" Calling gameLoop()...");

    // Call moveCharacter() with pacman
    gameBoard.moveCharacter(pacman);

    // Collision Check 1
    checkCollision(pacman, ghosts);

    // Call moveCharacter() with Each Ghost
    ghosts.forEach(ghost => gameBoard.moveCharacter(ghost));

    // Collision Check 2
    checkCollision(pacman, ghosts);

    // Check if Pacman Eats A Dot
    if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.DOT)){

        // Play Sound
        playAudio(soundDot);

        // Remove the Dot
        gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.DOT]);

        // Decrease Dot Count by -1
        gameBoard.dotCount--;

        // Add +10 to Score
        score += 10;

    }

    // Check if Pacman Eats A Powerpill
    if(gameBoard.objectExist(pacman.pos, OBJECT_TYPE.PILL)){

        // Play Sound
        playAudio(soundPill);

        // Remove Eaten Pill
        gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PILL]);

        // Set powerPill To True
        pacman.powerPill = true;
        score += 50; // Add 50 Points

        clearTimeout(powerPillTimer); // Clear if A Powerpill stll Exists

        powerPillTimer = setTimeout(() => 
            pacman.powerPill = false, // Set powerPill To False
            POWER_PILL_TIME // In 10 seconds
        ); 

        /* After POWER_PILL_TIME, powerPillActive and pacman.powerPill 
          will no longer be in sync. */
    }


    // Change Ghost's Scare Mode According To Powerpill Status 

    // Check if pacman.powerPill & powerPillActive are out of sync.
    if(pacman.powerPill !== powerPillActive){

        // If out of sync, 

        // Sync global powerPillActive with pacman.powerPill
        powerPillActive = pacman.powerPill; 

        // Set each ghost’s isScared to match pacman.powerPill
        ghosts.forEach(ghost => ghost.isScared = pacman.powerPill);

        /* If powerPillActive is true, all ghosts become "scared".

           If powerPillActive is false (after the power pill's effect wears 
           off), ghosts return to their normal behavior.
           
           A timer is set with setTimeout() to reset pacman.powerPill back to
           false after POWER_PILL_TIME, after which powerPillActive and pacman.powerPill 
           will no longer be in sync, allowing this conditional block to re-run and
           disable "scare mode" for the ghosts.
           
           */

    } 

    // Check if All Dots have been Eaten
    if(gameBoard.dotCount === 0){

        // If Dot Count is 0
        gameWin = true;
        gameOver(pacman, ghosts);

    }

    // Display Score
    scoreTable.innerHTML = score;


}


function startGame(){

    // Play Sound
    playAudio(soundGameStart);

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
    // Call gameLoop() with pacman & ghosts, every 80 ms
    timer = setInterval(() => gameLoop(pacman, ghosts), GLOBAL_SPEED);

}

// Initialize Game
startButton.addEventListener('click', startGame);


