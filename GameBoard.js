
// Importing From setup.js
import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from "./setup";

class GameBoard {
    constructor(DOMGrid){
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid = DOMGrid;
    }

    /* DOMGrid represents a DOM element that acts as the main container or 
      “grid” for displaying the game’s visual elements. */

    // gameWin tells whether we won the game or not
    showGameStatus(gameWin){

        // Create Element
        const div = document.createElement('div');

        // Assign Class
        div.classList.add('game-status');

        // Add Content using Turnary Operator
        div.innerHTML = `${gameWin ? 'WIN!' : 'GAME OVER!'}`;

        // Append div to DOMGrid
        this.DOMGrid.appendChild(div);

    }

    /* showGameStatus() appends this new div to this.DOMGrid, 
       so it displays on the webpage within the DOMGrid container. */


    // Method for Creating Grid
    // Pass LEVEL array from setup.js
    createGrid(level){

        this.dotCount = 0; // Clear dotCount when starting a new game
        this.grid = []; // Clear Array with All Positions
        this.DOMGrid.innerHTML = ''; // Clear DOMGrid divs

        // Set DOMGrid Style
        this.DOMGrid.style.cssText = `
            grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px)`;
            // Set Value in Pixels 
            // (GRID_SIZE = Number of Cells / CELL_SIZE = in Pixels )

        // Loop through LEVEL array which represents each cell
        level.forEach(square => {

            // Create div for Current Element
            const div = document.createElement('div');

            // Set class as square &
            // Take current element's value to
            // Assign another class based on CLASS_LIST Index (0-9)
            div.classList.add('square', CLASS_LIST[square]);

            // Set div Size
            div.style.cssText = `width: ${CELL_SIZE}px; 
                                 height: ${CELL_SIZE}px;`;

            // Append Created div to DOMGrid
            this.DOMGrid.appendChild(div);

            // Insert this div to grid array
            this.grid.push(div);

            // If Selected Class is DOT, Add to dotCount
            if(CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;

        })

    }


    // Define Object Methods

    addObject(pos, classes){
        // Select Element with pos &
        // Add class
        this.grid[pos].classList.add(...classes);
    }

    removeObject(pos, classes){
        // Select Element with pos &
        // Remove class
        this.grid[pos].classList.remove(...classes);
    }

    // Used in Keydown EL To Control Pacman 
    objectExist = (pos, object) => {
        // Returns True or False
        return this.grid[pos].classList.contains(object);
    }
    
    // Rotating Pacman
    // Pass degrees
    rotateDiv(pos, deg){

        // Rotate Selected Element with CSS Transform
        this.grid[pos].style.transform = `rotate(${deg}deg)`;

    }

    // Create static method
    // This can be called without instantiating the class
    static createGameBoard(DOMGrid, level){

        // Instantiate GameBoard Class
        const board = new this(DOMGrid);

        // Call createGrid() with Level Array
        board.createGrid(level);

        // Return Class
        return board;

    }

}

// Export Class
export default GameBoard;