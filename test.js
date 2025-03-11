var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let result = '';
    const cycleLength = numRows + (numRows - 2);

    for (let row = 0; row < numRows; row++) {
        for (let i = 0; i + row < s.length; i += cycleLength) {
            result += s[i + row];

            if (row > 0 && row < numRows - 1) {
                const diagonalIndex = i + cycleLength - row;
                if (diagonalIndex < s.length) result += s[diagonalIndex];
            }
        }
    }
    return result;
};

let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convert(s, numRows));

// https://leetcode.com/problems/zigzag-conversion/