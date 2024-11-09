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


}