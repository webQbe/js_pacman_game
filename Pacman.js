// Importing Arrays from setup.js
import { OBJECT_TYPE, DIRECTIONS } from './setup';

class Pacman {

    constructor(speed, startPos){

        // Initialize Pacman's 
        this.pos = startPos; // Position
        this.speed = speed; // Speed
        this.dir = null; // Direction
        this.timer = 0;
        this.powerPill = false;
        this.rotation = true;
    }

    // Decide whether Pacman should Move or Not
    shouldMove(){

        // Do not move Packman until player presses a key
        if(!this.dir) return false;

        // Check timer & speed values
        if(this.timer === this.speed){

            // Move Pacman If 
            // timer & speed values are equal
            this.timer = 0; // Reset timer to 0
            return true;
            
        }

        // Increase timer value by 1
        this.timer++

    }

    // Calculate Pacman's Next Movement
    getNextMove(objectExist){

        // Get nextMovePos by 
        // Adding Direction & Movement to Current Position
        let nextMovePos = this.pos + this.dir.movement;

        // Check if Pacman hits on A WALL or GHOSTLAIR with nextMovePos
        if(
            objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
            objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
        ){  
            // If True Keep Pacman in Current Position
            nextMovePos = this.pos;

        }

        // Return Object with nextMovePos & direction
        return { nextMovePos, direction: this.dir };

    }

    // Move Pacman
    makeMove(){

        // Remove PACMAN From Current Position
        const classesToRemove = [OBJECT_TYPE.PACMAN];

        // Add PACMAN To New Position
        const classesToAdd = [OBJECT_TYPE.PACMAN];

        // Return Object
        return { classesToRemove, classesToAdd };

    }


    // Set Pacman's New Position
    setNewPos(nextMovePos){

        this.pos = nextMovePos;

    }

    // Handle Player Inputs
    // Pass KeyCode & objectExist()
    handleKeyInput(e, objectExist){

        let dir; // Initialize dir

        // Check if Pressed Keys are Arrow Keys
        if(e.keyCode >= 37 && e.keyCode <= 40){

            // Set Pacman's Direction
            dir = DIRECTIONS[e.key];

        } else {

            // Ignore Input
            return;

        }


        const nextMovePos = this.pos + dir.movement;
        if(objectExist(nextMovePos, OBJECT_TYPE.WALL)) return;

        // Assign dir to Pacman.dir
        this.dir = dir;

    }

}

// Export Class
export default Pacman;