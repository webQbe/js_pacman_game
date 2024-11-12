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

}