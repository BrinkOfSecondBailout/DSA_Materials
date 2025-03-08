var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let midRow = Math.floor(rows / 2);
    let midCol = Math.floor(cols / 2);
    let value = matrix[midRow][midCol];

    if (value > target) {

    } else if (value < target) {

    } else {
        return true;
    }
    return false

};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 3;

searchMatrix(matrix, target);