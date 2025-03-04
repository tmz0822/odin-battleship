/**
 * Manages DOM such as:
 * Update boards
 * Display messages..
 */

function createBoard(player) {
  const gridContainer = document.querySelector('.grid-container');

  // Create the board
  const grid = document.createElement('div');
  grid.classList.add(player.name);
  grid.classList.add('game-grid');

  const board = player.gameboard.grid;
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement('div');
    row.dataset.id = i;
    row.classList.add('row');

    for (let j = 0; j < board[0].length; j++) {
      const cell = document.createElement('div');
      cell.dataset.id = `${i}${j}`;
      cell.classList.add('cell');

      row.appendChild(cell);
    }

    grid.appendChild(row);
    gridContainer.appendChild(grid);
  }
}

function updateBoard(player, coordinate = null) {
  const playerGrid = document.querySelector(`.${player.name}`);
  const board = player.gameboard.grid;

  // First time update(when user placing boats)
  if (coordinate === null) {
    playerGrid.replaceChildren();
    for (let i = 0; i < board.length; i++) {
      const row = document.createElement('div');
      row.dataset.id = i;
      row.classList.add('row');

      for (let j = 0; j < board[0].length; j++) {
        const cell = document.createElement('div');
        cell.dataset.id = `${i}${j}`;
        cell.classList.add('cell');

        if (board[i][j] !== null) {
          cell.textContent = board[i][j];
        }

        row.appendChild(cell);
      }
      playerGrid.appendChild(row);
    }
  } else {
    // Else we just update the cell based on user action on specific coordinates
    const [x, y] = coordinate;

    const cell = playerGrid
      .querySelector(`[data-id="${x}"]`)
      .querySelector(`[data-id="${x}${y}"]`);
    cell.textContent = board[x][y];

    // user cannot click on the same coordinate twice
    cell.classList.add('disabled');
  }
}

function toggleTurn() {
  const playerGrids = document.querySelectorAll('.game-grid');
  playerGrids.forEach((grid) => grid.classList.toggle('disabled'));
}

export { createBoard, updateBoard, toggleTurn };
