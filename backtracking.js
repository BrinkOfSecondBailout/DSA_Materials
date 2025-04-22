const board = [
  ['.', '.', '.', '2'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.'],
  ['3', '.', '.', '.']
];

function solveSudoku(board) {
  solve(board);
  console.log("Final Board:");
  printBoard(board);
}

function solve(board) {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === '.') {
        for (let num = 1; num <= 4; num++) {
          const char = num.toString();
          if (isValid(board, row, col, char)) {
            board[row][col] = char;
            console.log(`Placed ${char} at (${row}, ${col})`);
            printBoard(board);

            if (solve(board)) return true;

            // backtrack
            board[row][col] = '.';
            console.log(`Backtracked at (${row}, ${col})`);
            printBoard(board);
          }
        }
        return false; // trigger backtracking
      }
    }
  }
  return true; // board filled
}

function isValid(board, row, col, char) {
  for (let i = 0; i < 4; i++) {
    if (board[row][i] === char || board[i][col] === char) return false;

    const boxRow = 2 * Math.floor(row / 2) + Math.floor(i / 2);
    const boxCol = 2 * Math.floor(col / 2) + i % 2;
    if (board[boxRow][boxCol] === char) return false;
  }
  return true;
}

function printBoard(board) {
  console.log(board.map(row => row.join(' ')).join('\n'), '\n');
}

solveSudoku(board);