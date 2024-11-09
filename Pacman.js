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


}