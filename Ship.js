export default class Ship {
  constructor(length) {
    this.length = length;
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
