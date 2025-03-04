/**
 * Manages DOM such as:
 * Update boards
 * Display messages..
 */

function renderBoard(player) {
  const gridContainer = document.querySelector('.grid-container');
  // Clear the previous board
  const playerGrid = gridContainer.querySelector(`.${player.name}`);
  if (playerGrid !== null) {
    playerGrid.remove();
  }

  // Render/update the board
  const grid = document.createElement('div');
  grid.classList.add(player.name);
  grid.classList.add('game-grid');

  const board = player.gameboard.grid;
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < board[0].length; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add(`${i}${j}`);

      if (board[i][j] !== null) {
        cell.textContent = board[i][j];
      }

      row.appendChild(cell);
    }

    grid.appendChild(row);
    gridContainer.appendChild(grid);
  }
}

export { renderBoard };
