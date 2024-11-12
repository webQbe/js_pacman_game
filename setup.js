export const GRID_SIZE = 20; // NO OF COLUMNS
export const CELL_SIZE = 20; // CELL SIZE IN PIXELS
export const DIRECTIONS = {
  ArrowLeft: {
    code: 37, // KEYCODE
    movement: -1, // DIRECTION
    rotation: 180 // DEGREES
  },
  ArrowUp: {
    code: 38,
    movement: -GRID_SIZE,
    rotation: 270
  },
  ArrowRight: {
    code: 39,
    movement: 1,
    rotation: 0
  },
  ArrowDown: {
    code: 40,
    movement: GRID_SIZE,
    rotation: 90
  }
};

export const OBJECT_TYPE = {
  BLANK: 'blank',
  WALL: 'wall',
  DOT: 'dot',
  BLINKY: 'blinky', // GHOST
  PINKY: 'pinky', // GHOST
  INKY: 'inky', // GHOST
  CLYDE: 'clyde', // GHOST
  PILL: 'pill', // PACMAN EATS
  PACMAN: 'pacman',
  GHOST: 'ghost',
  SCARED: 'scared',
  GHOSTLAIR: 'lair'
};

// Lookup array for classes
export const CLASS_LIST = [
  OBJECT_TYPE.BLANK, // 0
  OBJECT_TYPE.WALL,  // 1
  OBJECT_TYPE.DOT,   // 2
  OBJECT_TYPE.BLINKY, // 3
  OBJECT_TYPE.PINKY, // 4
  OBJECT_TYPE.INKY, // 5
  OBJECT_TYPE.CLYDE, // 6
  OBJECT_TYPE.PILL, // 7
  OBJECT_TYPE.PACMAN, // 8
  OBJECT_TYPE.GHOSTLAIR // 9
];

// REPRESENT THE GRID
export const LEVEL = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
  1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
  9, 9, 9, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 9, 9, 9,
  9, 9, 9, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 9, 9, 9,
  1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 
  1, 9, 9, 9, 2, 2, 2, 1, 9, 9, 9, 9, 1, 2, 2, 2, 9, 9, 9, 1, 
  1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 
  9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9,
  9, 9, 9, 1, 2, 1, 2, 9, 9, 9, 9, 9, 9, 2, 1, 2, 1, 9, 9, 9,
  1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,
  1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];