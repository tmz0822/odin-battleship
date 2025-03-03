import Ship from './Ship.js';

test('able to create Ship objects', () => {
  const ship = new Ship(2);
  expect(ship).toEqual({
    length: 2,
    hits: 0,
    sunk: false,
  });
});

test('the number of hits of the ship increases when it is hit', () => {
  const ship = new Ship(2);
  expect(ship.hits).toBe(0);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('the ship sunks when the number of hits equal to its length', () => {
  const ship = new Ship(2);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
