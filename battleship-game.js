/*  
     * Battleship Game - Web-based version
     * 
     * Author: Angela Iredia
     * Description: This is a web-based implementation of the classic Battleship game.
     * Features:
     * - Random ship placement for the computer.
     * - User input to attack specific coordinates.
     * - Displays hits, misses, and victory messages.
     * 
     * How to Play:
     * - User clicks the tab in the grid to attack the enemy.
     * 
     * Property of: Angela Iredia
     * Created: 25/01/2025
*/

// Create the game grid
const createGrid = (size) => {
    //2D Array
    return Array(size).fill(null).map(() => Array(size).fill(''));
};

const gridSize = 10;
const playerGrid = createGrid(gridSize);
const computerGrid = createGrid(gridSize);

// Define ships with sizes
const ships = [
    { name: 'Carrier', size: 5, hits: 0 },
    { name: 'Battleship', size: 4, hits: 0 },
    { name: 'Destroyer', size: 3, hits: 0 },
    { name: 'Submarine', size: 3, hits: 0 },
    { name: 'Patrol Boat', size: 2, hits: 0 },
];

// Place ships on the grid (random placement for simplicity)
const placeShip = (grid, ship) => {
    let placed = false;

    while (!placed) {
        const isHorizontal = Math.random() > 0.5;
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        
        // Check if ship can be placed
        const canPlace = (isHorizontal
            ? col + ship.size <= gridSize
            : row + ship.size <= gridSize) &&
            Array.from({ length: ship.size }).every((_, i) =>
                isHorizontal ? grid[row][col + i] === '' : grid[row + i][col] === ''
            );

        if (canPlace) {
            Array.from({ length: ship.size }).forEach((_, i) => {
                if (isHorizontal) {
                    grid[row][col + i] = ship.name[0];
                } else {
                    grid[row + i][col] = ship.name[0];
                }
            });
            placed = true;
        }
    }
};

ships.forEach(ship => placeShip(computerGrid, ship));

// Player's attack logic
const attack = (grid, row, col, ships) => {
    if (grid[row][col] === '') {
        grid[row][col] = 'M'; // Miss
        return 'Miss';
    } else if (grid[row][col] !== 'H' && grid[row][col] !== 'M') {
        const shipSymbol = grid[row][col]; // Get the ship symbol
        grid[row][col] = 'H'; // Mark as hit

        // Find the corresponding ship and update its hits
        const ship = ships.find(s => s.name[0] === shipSymbol);
        if (ship) {
            ship.hits++;
            if (ship.hits === ship.size) {
                console.log(`${ship.name} is sunk!`);
            }
        }

        return 'Hit';
    } else {
        return 'Already attacked';
    }
};

// Check victory
const checkVictory = (ships) => {
    return ships.every(ship => ship.hits === ship.size);
};

// Print grid (for testing purposes)
const printGrid = (grid) => {
    console.log(grid.map(row => row.join(' ')).join('\n'));
};

// DOM Interaction
const createHtmlGrid = (id, size) => {
    const container = document.getElementById(id);
    for (let row = 0; row < size; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let col = 0; col < size; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            rowDiv.appendChild(cell);
        }
        container.appendChild(rowDiv);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    createHtmlGrid('player-grid', gridSize);
    createHtmlGrid('computer-grid', gridSize);

    document.getElementById('computer-grid').addEventListener('click', (e) => {
        if (e.target.classList.contains('cell')) {
            const row = parseInt(e.target.dataset.row, 10);
            const col = parseInt(e.target.dataset.col, 10);
            const result = attack(computerGrid, row, col, ships);

            e.target.textContent = result === 'Hit' ? '🔥' : '💧';

            if (checkVictory(ships)) {
                alert('You win! All enemy ships are sunk!');
            }
        }
    });
});

