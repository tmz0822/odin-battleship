import './styles.css';
import Player from './Player.js';
import Ship from './Ship.js';
import { createBoard, updateBoard, toggleTurn } from './domManager.js';

/**
 * Manages game state such as:
 * Place ships
 * Attack coordinates
 */

const player1 = new Player('player1');
const player2 = new Player('computer');
let computerCoordinates = generatePossibleCoordinates();

function init() {
  const gridContainer = document.querySelector('.grid-container');

  createBoard(player1);
  createBoard(player2);
  testCode(player1, player2);

  const player1Grid = gridContainer.querySelector(`.${player1.name}`);
  // Initially, its player 1 turn to attack so player 1's gameboard is disabled
  player1Grid.classList.add('disabled');
  player1Grid.addEventListener('click', (e) => {
    handleClick(e, player1);
  });

  const player2Grid = gridContainer.querySelector(`.${player2.name}`);
  player2Grid.addEventListener('click', (e) => {
    handleClick(e, player2);
  });
}

function handleClick(e, player) {
  const cell = e.target;

  // Prevent the parent element clicks
  if (!cell.classList.contains('cell')) {
    return;
  }

  const coordinate = cell.dataset.id.split('');
  // To prevent the row click event
  if (coordinate[0] != null && coordinate[1] != null) {
    player.gameboard.receiveAttack(coordinate);

    computerMove(); // computer move automatically

    updateBoard(player, coordinate);
    toggleTurn();
  }

  gameEnds();
}

function gameEnds() {
  if (player1.gameboard.isAllShipSunk()) {
    console.log('Player 2 wins');
  } else if (player2.gameboard.isAllShipSunk()) {
    console.log('Player 1 wins');
  }

  return player1.gameboard.isAllShipSunk() || player2.gameboard.isAllShipSunk();
}

function computerMove() {
  // TODO: computer are able to make move automatically without making same move for twice.
  const randomNumber = Math.floor(Math.random() * computerCoordinates.length);
  const coordinate = computerCoordinates[randomNumber];
  player1.gameboard.receiveAttack(coordinate);
  computerCoordinates.splice(randomNumber, 1);
  updateBoard(player1, coordinate);
  toggleTurn();
}

function generatePossibleCoordinates() {
  const coordinates = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      coordinates.push([i, j]);
    }
  }
  return coordinates;
}

init();

function testCode(player1, player2) {
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
  updateBoard(player1);

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
  updateBoard(player2);
}
