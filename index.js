// Import Arrays from setup.js
import { LEVEL, OBJECT_TYPE } from './setup';

// Define DOM Elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton =  document.querySelector('#start-button');

// Define Constants
const POWER_PILL_TIME = 10000; // 10 milli-seconds
const GLOBAL_SPEED = 80; // milli-seconds
