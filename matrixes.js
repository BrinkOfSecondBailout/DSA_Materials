var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        const seen = new Set();
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value !== '.') {
                if (seen.has(value)) return false;
                seen.add(value);
            }
        }
    }

    for (let j = 0; j < 9; j++) {
        const seen = new Set();
        for (let i = 0; i < 9; i++) {
            const value = board[i][j];
            if (value !== '.') {
                if (seen.has(value)) return false;
                seen.add(value);
            }
        }
    }

    for (let boxRow = 0; boxRow < 9; boxRow += 3) { // 0, 3, 6
        for (let boxCol = 0; boxCol < 9; boxCol += 3) { // 0, 3, 6
            const seen = new Set();
            for (let m = 0; m < 3; m++) { // 0, 1, 2
                for (let n = 0; n < 3; n++) { // 0, 1, 2
                    const value = board[m + boxRow][n + boxCol];
                    if (value !== '.') {
                        if (seen.has(value)) return false;
                        seen.add(value);
                    }
                }
            }
        }
    }

    return true;
};
// const board = [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
// ];
// console.log(isValidSudoku(board));




var rotateMatrix = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i < j) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;

            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
    return matrix;
}
// matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(rotateMatrix(matrix));




var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];

    let result = [];
    let rows = matrix.length;
    let cols = matrix[0].length;

    if (cols == 1) {
        for (let i = 0; i < rows; i++) {
            result.push(matrix[i][0]);
        }
        return result;
    }

    let top = 0;
    let right = cols - 1;
    let bottom = rows - 1;
    let left = 0;

    while (top <= bottom && left <= right) {
        // Traverse top row, left to right
        for (let i = top; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse right column, top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse bottom row, right to left, if there's a bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse left column, bottom to top, if there's still a left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
};
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(spiralOrder(matrix));




var setZeroes = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    if (rows === 0) return matrix;

    let rowTracker = new Set();
    let colTracker = new Set();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let value = matrix[i][j];
            if (value === 0) {
                rowTracker.add(i);
                colTracker.add(j);
            }
        }
    }
    for (const row of rowTracker) {
        for (let m = 0; m < cols; m++) {
            matrix[row][m] = 0;
        }
    }
    for (const col of colTracker) {
        for (let n = 0; n < rows; n++) {
            matrix[n][col] = 0;
        }
    }

    return matrix;

};
// let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
// console.log(setZeroes(matrix));





var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    if (m === 0 || n === 0) return false;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // index
        const row = Math.floor(mid / n); // index / col = row location
        const col = mid % n; // index modular col = col location

        let value = matrix[row][col];
        if (value === target) {
            return true;
        } else if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};
// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// let target = 3;

// console.log(searchMatrix(matrix, target));




