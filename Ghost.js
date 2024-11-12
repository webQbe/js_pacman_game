// Import Arrays
import { DIRECTIONS, OBJECT_TYPE } from './setup';

class Ghost{
    constructor(speed = 5, startPos, movement, name){
        this.name = name;
        this.movement = movement;
        this.startPos = startPos;
        this.pos = startPos; // When Pacman eats a Ghost Move them back to startPos
        this.dir = DIRECTIONS.ArrowRight;
        this.speed = speed;
        this.timer = 0;
        this.isScared = false; // True means Pacman has eaten Powerpill
        this.rotation = false; // Do not rotate Ghost when it moves
    }

    shouldMove(){
        // speed = 5
        if(this.timer === this.speed){

            // Reset timer
            this.timer = 0;
            return true; 

        }

        // Add +1 to timer
        this.timer++

        return false;
    }

    getNextMove(objectExist){

        // Calling randomMovement() in ghostMoves.js
        // To Get nextMovePos & direction
        const { nextMovePos, direction } = this.movement(

            this.pos,
            this.dir,
            objectExist

        );

        // Return Objects
        return { nextMovePos, direction };

    }

    // Moving the Ghost
    makeMove(){

        // Remove these classes from div
        const classesToRemove = [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, this.name];

        // Add these classes to div
        let classesToAdd = [OBJECT_TYPE.GHOST, this.name]

        // Check if Ghost is Scared
        if(this.isScared) classesToAdd = [...classesToAdd, OBJECT_TYPE.SCARED]; 

        // Return Objects
        return { classesToRemove, classesToAdd };

    }

    

}