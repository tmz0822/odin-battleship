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
