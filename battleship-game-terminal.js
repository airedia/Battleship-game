/*  
     * Battleship Game - Terminal Version
     * 
     * Author: Angela Iredia
     * Description: This is a terminal-based implementation of the classic Battleship game.
     * Features:
     * - Random ship placement for the computer.
     * - User input to attack specific coordinates.
     * - Displays hits, misses, and victory messages.
     * 
     * How to Play:
     * - Enter the row and column coordinates (e.g., "2 3") to attack a position.
     * - Type "exit" to quit the game at any time.
     * 
     * Property of: Angela Iredia
     * Created: 27/01/2025
*/




const prompt = require('prompt-sync')();

// Function to create a grid
const createGrid = (size) => Array(size).fill(null).map(() => Array(size).fill(''));

// Display the grid into the terminal
const displayGrid = (grid, showShips = false) => {
    console.log('   ' + Array.from({ length: grid.length }, (_, i) => i).join(' '));
    grid.forEach((row, i) => {
        const rowDisplay = row.map(cell => {
            if (cell === 'H') return '🔥'; // Hit
            if (cell === 'M') return '💧'; // Miss
            return showShips ? (cell || '.') : (cell === '' ? '.' : '.');
        }).join(' ');
        console.log(`${i}  ${rowDisplay}`);
    });
};

// Randomly place ships on the grid
const placeShip = (grid, shipSize) => {
    let placed = false;
    while (!placed) {
        const isHorizontal = Math.random() > 0.5;
        const row = Math.floor(Math.random() * grid.length);
        const col = Math.floor(Math.random() * grid[0].length);

        const canPlace = isHorizontal
            ? col + shipSize <= grid[0].length && Array.from({ length: shipSize }).every((_, i) => grid[row][col + i] === '')
            : row + shipSize <= grid.length && Array.from({ length: shipSize }).every((_, i) => grid[row + i][col] === '');

        if (canPlace) {
            Array.from({ length: shipSize }).forEach((_, i) => {
                if (isHorizontal) grid[row][col + i] = 'S';
                else grid[row + i][col] = 'S';
            });
            placed = true;
        }
    }
};

// Attack logic
const attack = (grid, row, col) => {
    if (grid[row][col] === 'S') {
        grid[row][col] = 'H';
        return 'Hit!';
    } else if (grid[row][col] === '') {
        grid[row][col] = 'M';
        return 'Miss!';
    } else {
        return 'Already attacked!';
    }
};

// Check for victory
const checkVictory = (grid) => grid.flat().every(cell => cell !== 'S');

// Initialize game
const gridSize = 5;
const playerGrid = createGrid(gridSize);
const computerGrid = createGrid(gridSize);
const shipSizes = [3, 2, 2]; // Example ships sizes

shipSizes.forEach(size => placeShip(computerGrid, size));

console.log('Welcome to Battleship!');
console.log('Your grid:');
displayGrid(playerGrid, true);

while (true) {
    console.log('\nEnemy grid:');
    displayGrid(computerGrid);

    const input = prompt('Enter row and column (e.g., "2 3") or type "exit" to quit: ').trim();
    
    if (input.toLowerCase() === 'exit') {
        console.log('Thanks for playing! Goodbye!');
        break; // Exit the loop and end the game
    }

    const [row, col] = input.split(' ').map(Number); // Split input into row and column

    if (isNaN(row) || isNaN(col) || row < 0 || row >= gridSize || col < 0 || col >= gridSize) {
        console.log('Invalid input. Enter two numbers separated by a space, or type "exit" to quit.');
        continue;
    }

    const result = attack(computerGrid, row, col);
    console.log(result);

    if (checkVictory(computerGrid)) {
        console.log('Congratulations! You sank all the enemy ships!');
        break; // End game when player wins
    }
}
