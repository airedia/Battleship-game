
# Battleship 

A "Battleship" game is a two-player strategy game where each player secretly positions a fleet of ships on a grid, and then takes turns calling out coordinates to try and "sink" the opponent's ships by guessing their locations, aiming to be the first to destroy all of their opponent's vessels; essentially a guessing game based on naval warfare where players try to locate and destroy the other's hidden fleet by calling out grid coordinates. 

## Instructions

In this implementation, the user is playing on the Computer's grid, while the Computer's ships are randomly placed on its grid. Here’s how it works:

1. **User Role (Player)**:

    - The user interacts with the Computer's grid by clicking cells to attack.
    - The _attack_ function determines whether the user hits or misses the Computer's ships.
    - Hits are marked with 🔥 (fire) and misses with 💧 (water).

2. **Computer's Role**:

    - The Computer doesn’t yet attack the user's grid in the current implementation.
    - The user's grid is currently there for visual purposes, but it's not used interactively.

Once all the battleships have been hit, an alert will let the user know that he has won the game.

## Latest Updates

1. **UX/UI Design**
    - For now the page has only a basic UX/UI design. Future implementations will be made.
