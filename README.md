
# Battleship 

A "Battleship" game is a two-player strategy game where each player secretly positions a fleet of ships on a grid, and then takes turns calling out coordinates to try and "sink" the opponent's ships by guessing their locations, aiming to be the first to destroy all of their opponent's vessels; essentially a guessing game based on naval warfare where players try to locate and destroy the other's hidden fleet by calling out grid coordinates. 

## Instructions

In this implementation, the user is playing on the Computer's grid, while the Computer's ships are randomly placed on its grid. Here’s how it works:


### Rules in the web-based game

1. **User Role (Player)**:

    - The user interacts with the Computer's grid by clicking cells to attack.
    - The _attack_ function determines whether the user hits or misses the Computer's ships.
    - Hits are marked with 🔥 (fire) and misses with 💧 (water).

2. **Computer's Role**:

    - The Computer doesn’t yet attack the user's grid in the current implementation.
    - The user's grid is currently there for visual purposes, but it's not used interactively.

Once all the battleships have been hit, an alert will let the user know that he has won the game.


### Rules in the terminal-based game

1. **_Your Grid_ (Player)**:

    - The user interacts with the _Your Grid_ grid by inserting the row and column numbers.
    - The _attack_ function determines whether the user hits or misses the _Enemy Grid_'s ships.
    - Hits are marked with 🔥 (fire) and misses with 💧 (water).

2. **_Enemy Grid_'s Role**:

    - The _Enemy Grid_ (_enemy_) doesn’t yet attack the user's grid in the current implementation.

Once all the battleships have been hit, the console will let the user know that he has won the game.


#### Before playing the game on your terminal

1. Install **_prompt-sync_**:
    - On windows, in your project directory, type _npm install prompt-sync_ in your terminal.

2. Start the game with **node** command:
    - After _prompt-sync_ has been installed successfully, type _battleship-game-terminal.js_ in your terminal and make sure the current directory is correct.

3. If you want to exit the game:
    - After the game has been started, type _exit_ to quit the game.


## Latest Updates

### Web-based game

1. **UX/UI Design**
    - For now the page has only a basic UX/UI design. Future implementations will be made.

### Terminal-based game

1. **Files**
    - Now the terminaal-based game for Battleship is available
