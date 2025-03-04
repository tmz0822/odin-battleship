import './styles.css';
import Player from './Player.js';
import Ship from './Ship.js';
import { renderBoard } from './domManager.js';

/**
 * Manages game state such as:
 * Place ships
 * Attack coordinates
 */

const player1 = new Player('player1');
player1.gameboard.placeShip(
  new Ship(2, [
    [0, 0],
    [0, 1],
  ])
);
player1.gameboard.placeShip(
  new Ship(3, [
    [1, 0],
    [1, 1],
    [1, 2],
  ])
);
player1.gameboard.placeShip(
  new Ship(3, [
    [2, 0],
    [2, 1],
    [2, 2],
  ])
);
player1.gameboard.placeShip(
  new Ship(4, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
  ])
);
player1.gameboard.placeShip(
  new Ship(5, [
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
  ])
);
renderBoard(player1);
player1.gameboard.receiveAttack([0, 0]);
renderBoard(player1);

const player2 = new Player('computer');
const ship1 = new Ship(2, [
  [3, 1],
  [3, 2],
]);
const ship2 = new Ship(3, [
  [5, 3],
  [5, 4],
  [5, 5],
]);
const ship3 = new Ship(3, [
  [6, 7],
  [7, 7],
  [8, 7],
]);
const ship4 = new Ship(4, [
  [4, 5],
  [4, 6],
  [4, 7],
  [4, 8],
  [4, 9],
]);
const ship5 = new Ship(5, [
  [5, 6],
  [6, 6],
  [7, 6],
  [8, 6],
  [9, 6],
]);
player2.gameboard.placeShip(ship1);
player2.gameboard.placeShip(ship2);
player2.gameboard.placeShip(ship3);
player2.gameboard.placeShip(ship4);
player2.gameboard.placeShip(ship5);
renderBoard(player2);
