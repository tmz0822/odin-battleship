export default class Gameboard {
  constructor() {
    this.grid = new Array(10).fill().map(() => new Array(10).fill(null));
    this.ships = [];
  }

  placeShip(ship) {
    ship.coordinates.forEach((coordinate) => {
      const [x, y] = coordinate;
      this.grid[x][y] = ship.length;
    });
    this.ships.push(ship);
  }
  /**
   * Symbols on the grid:
   * O: ship attacked
   * X: missed attacks
   * 2,3,3,4,5: occupied by ships based on its length
   * null: squares that have not attacked or placed by ships
   */
  receiveAttack(coordinate) {
    const [x, y] = coordinate;

    // If the
    if (this.grid[x][y] === 'O' || this.grid[x][y] === 'X') {
      throw new Error('same coordinate cannot be attacked twice');
    }

    if (this.grid[x][y] >= 2 && this.grid[x][y] !== 'O') {
      // ship attacked
      // find the ship and update hits
      const ship = this.ships.find((ship) =>
        ship.coordinates.find(
          (coordinate) =>
            coordinate[0] === Number(x) && coordinate[1] === Number(y)
        )
      );
      ship.hit();
      this.grid[x][y] = 'O';
      return ship;
    } else {
      // missed attacks
      this.grid[x][y] = 'X';
    }

    return true;
  }

  resetBoard() {
    this.grid = new Array(10).fill().map(() => new Array(10).fill(null));
    this.ships = [];
  }

  isAllShipSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
