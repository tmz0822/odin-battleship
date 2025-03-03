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
    if (this.grid[x][y] >= 2 && this.grid[x][y] !== 'O') {
      // ship attacked
      // find the ship and update hits
      const ship = this.ships.find(
        (ship) => ship.coordinates.includes()
        // TODO: get the attacked ship
      );

      ship.hit();
      this.grid[x][y] = 'O';
    } else {
      // missed attacks
      this.grid[x][y] = 'X';
    }
  }
}
new Gameboard();
