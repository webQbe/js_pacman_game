import { DIRECTIONS, OBJECT_TYPE } from "./setup";

// Primitive Random Movement of Ghost
export function randomMovement(position, direction, objectExist){

    let dir = direction;
    let nextMovePos = position + dir.movement;

    // Create an array from DIRECTIONS object keys
    const keys = Object.keys(DIRECTIONS); // To get a random key

    // As long as Ghost moves into a WALL / another GHOST,
    // calculate a new position
    while(objectExist(nextMovePos, OBJECT_TYPE.WALL) || 
          objectExist(nextMovePos, OBJECT_TYPE.GHOST)) {

            // Get A Random Key by 
            // Generating random Index number
            const key = keys[Math.floor(Math.random() * keys.length)];

            // Set direction
            dir = DIRECTIONS[key]

            // Get next position
            nextMovePos = position + dir.movement;

          }

          // Return objects
          return { nextMovePos, direction: dir } 

}