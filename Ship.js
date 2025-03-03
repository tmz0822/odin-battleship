export default class Ship {
  constructor(length, coordinates) {
    this.length = length;
    this.coordinates = coordinates;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    this.sunk = this.length === this.hits;
    return this.sunk;
  }
}
