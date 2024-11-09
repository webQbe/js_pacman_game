
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

}