import Gameboard from './Gameboard';
import Ship from './Ship';

test('able to place ships at specific coordinates on the gameboard', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, [
    [1, 1],
    [1, 2],
  ]);
  gameboard.placeShip(ship);
  expect(gameboard.grid[1][1]).toBe(2);
  expect(gameboard.grid[1][2]).toBe(2);
});

test('receiveAttack determines if the attack hits a ship and update the ship hits', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, [
    [1, 1],
    [1, 2],
  ]);
  gameboard.placeShip(ship);
  const attackedShip = gameboard.receiveAttack([1, 1]);
  // O means attacked
  expect(gameboard.grid[1][1]).toBe('O');
  expect(attackedShip.hits === 1);
});

test('able to keep track of missed attacks', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, [
    [1, 1],
    [1, 2],
  ]);
  gameboard.placeShip(ship);
  gameboard.receiveAttack([3, 3]);
  // X means missed attacks
  expect(gameboard.grid[3][3]).toBe('X');
});

test('gameboard able to report if all ships are sunk or not', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, [
    [1, 1],
    [1, 2],
  ]);
  gameboard.placeShip(ship);
  expect(gameboard.isAllShipSunk()).toBe(false);
  gameboard.receiveAttack([1, 1]);
  gameboard.receiveAttack([1, 2]);
  expect(gameboard.isAllShipSunk()).toBe(true);
});
