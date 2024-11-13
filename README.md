# JavaScript Pac-Man Game

This game is a JavaScript-based version of the classic Pac-Man, where player navigates a Pac-Man character through a maze to eat dots, earn points, and avoid ghosts. Here’s how the main mechanics of the game work based on the `gameLoop` function:

1. **Character Movement**:
   - The `gameLoop` function moves both Pac-Man and the ghosts through the maze. Each character’s position is updated using `gameBoard.moveCharacter()` for smooth gameplay.
   - After each movement, collisions between Pac-Man and ghosts are checked to determine if the game should end or continue.

2. **Eating Dots and Power Pills**:
   - Pac-Man’s primary goal is to eat dots placed around the maze, each dot adding 10 points to the score.
   - Occasionally, Pac-Man encounters power pills, which not only give bonus points (+50 points) but also activate a “scare mode” that temporarily makes all ghosts vulnerable.

3. **Scare Mode for Ghosts**:
   - When Pac-Man eats a power pill, ghosts switch to “scare mode”. This mode is time-limited, and after it expires, ghosts return to their regular behavior.
   - This creates an opportunity for Pac-Man to chase and potentially "defeat" ghosts for additional points, making the power pill a strategic element of the game.

4. **Game Completion**:
   - The game checks if all dots in the maze have been eaten. If so, the player wins the game, and the game ends.
   
5. **Score Display and Sound Effects**:
   - The score is continuously updated and displayed as Pac-Man eats dots and power pills.
   - Sound effects play each time Pac-Man eats a dot or power pill, enhancing the gaming experience.

This classic game combines quick reflexes with strategy, as players must time their power pill usage to maximize points and avoid ghosts. The dynamic between regular dot-eating, power pill activation, and avoiding or chasing ghosts makes the game exciting and challenging.