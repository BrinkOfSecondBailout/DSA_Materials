var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let temp = prev;
        prev = curr;
        curr = temp + curr;
    }
    return curr;
};

// const n = 4; //3
// console.log(fib(4));
// https://leetcode.com/problems/fibonacci-number/




var profitableSchemes = function(n, minProfit, group, profit) {
    mod = 10**9 + 7;
    let m = profit.length;
    let dp = {};

    function dfs(i, n, p) {
        if (i >= m) {
            if (p >= minProfit) {
                return 1;
            } else {
                return 0;
            }
        }
        let key = `${i}, ${n}, ${p}`;
        if (dp[key]) return dp[key];
        dp[key] = dfs(i + 1, n, p); // don't do the heist
        if (n >= group[i]) {
            dp[key] += dfs(i + 1, n - group[i], p + profit[i]) % mod; // do the heist
        }
        return dp[key];
    }
    return dfs(0, n, 0);
};


// function profitableSchemes(n, minProfit, group, profit) {
//     const MOD = 1e9 + 7;
//     const len = group.length;

//     // dp[i][j] = number of ways to use i people to get at least j profit
//     let dp = Array.from({length: n  + 1}, () => Array(minProfit + 1).fill(0));
    
//     // Base case: 0 people and 0 profit is one valid way
//     dp[0][0] = 1;

//     for (let k = 0; k < len; k++) {
//         const membersNeeded = group[k];
//         const crimeProfit = profit[k];
//         // Copy dp for updates (so we don’t overwrite during iteration)
//         const dpNew = dp.map(row => [...row]);
//         for (let people = 0; people <= n - membersNeeded; people++) {
//             for (let p = 0; p <= minProfit; p++) {
//                 const newPeople = people + membersNeeded;
//                 const newProfit = Math.min(minProfit, p + crimeProfit) // Cap at minProfit
//                 dpNew[newPeople][newProfit] = (dpNew[newPeople][newProfit] + dp[people][p]) % MOD;
//             }
//         }
//         dp = dpNew;
//     }
//     let result = 0;
//     for (let people = 0; people <= n; people++) {
//         result = (result + dp[people][minProfit]) % MOD;
//     }
//     return result;
// }

// const n = 5, minProfit = 3, group = [2,2], profit = [2,3];
// console.log(profitableSchemes(n, minProfit, group, profit));
// https://leetcode.com/problems/profitable-schemes/description/




var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let a = 1; a <= amount; a++) {
        for (const coin of coins) {
            if (a - coin >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
            }
        }
    }
    return dp[amount] !== amount + 1 ? dp[amount] : -1;
};

// const coins = [1,2,5], amount = 11;
// console.log(coinChange(coins, amount));
// https://leetcode.com/problems/coin-change/description/



// var climbStairs = function(n) {
//     let memo = {};

//     function recurse(n) {
//         if (n === 1 || n === 0) return 1;
//         if (memo[n]) return memo[n];

//         memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
//         return memo[n];
//     }

//     return recurse(n);
// };

var climbStairs = function(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    
    let prev = 1;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let temp = prev;
        prev = curr;
        curr = temp + curr;
    }
    return curr;
}

// const n = 3;
// console.log(climbStairs(n));
// https://leetcode.com/problems/climbing-stairs/






var generate = function(numRows) {
    let result = [];
    if (numRows === 0) return result;
    let firstRow = [1];
    result.push(firstRow);
    for (let i = 1; i < numRows; i++) {
        let prevRow = result[i - 1];
        let currRow = [1];
        for (let j = 1; j < i; j++) {
            currRow.push(prevRow[j - 1] + prevRow[j]);
        }
        currRow.push(1);
        result.push(currRow);
    }
    return result;
};

// const numRows = 5;
// console.log(generate(numRows));

// https://leetcode.com/problems/pascals-triangle/description/




var getRow = function(rowIndex) {
    let result = [];
    result.push([1], [1, 1]);
    for (let i = 2; i <= rowIndex; i++) {
        let currRow = [];
        currRow.push(1);
        for (let j = 1; j < i; j++) {
            let prevRow = result[i - 1];
            currRow.push(prevRow[j - 1] + prevRow[j]);
        }
        currRow.push(1);
        result.push(currRow);
    }
    return result[rowIndex];
};

// const rowIndex = 3;
// console.log(getRow(rowIndex));

// https://leetcode.com/problems/pascals-triangle-ii/




var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    let currSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};

// const nums = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maxSubArray(nums));
// https://leetcode.com/problems/maximum-subarray/







// var minimumTotal = function(triangle) {
//     let result = triangle[0][0];
//     let currIndex = 0;

//     for (let i = 1; i < triangle.length; i++) {
//         if (triangle[i][currIndex] < triangle[i][currIndex + 1]) {
//             result += triangle[i][currIndex];
//         } else {
//             result += triangle[i][currIndex + 1];
//             currIndex++;
//         }
//     }
//     return result;
// };

var minimumTotal = function(triangle) {
    let dp = [...triangle[triangle.length - 1]]; // Start with the last row
    console.log(dp);

    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let i = 0; i <= row; i++) {
            dp[i] = triangle[row][i] + Math.min(dp[i], dp[i + 1]);
        }
    }
    console.log(dp);
    return dp[0];
};

// const triangle = [[-1],[2,3],[1,-1,-3]]; // -1
// console.log(minimumTotal(triangle));

// https://leetcode.com/problems/triangle/?envType=problem-list-v2&envId=dynamic-programming


// My solution
// var uniquePaths = function(m, n) {
//     let dp = Array.from({length: m}, () => Array(n).fill(0));
//     dp[0][0] = 1;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i - 1 >= 0) dp[i][j] += dp[i - 1][j];
//             if (j - 1 >= 0) dp[i][j] += dp[i][j - 1];
//         }
//     }
//     return dp[m - 1][n - 1];
// };


//Leetcode best solution
function uniquePaths(m, n) {
    let aboveRow = Array(n).fill(1);
    for (let row = 1; row < m; row++) {
        let currRow = Array(n).fill(1);
        for (let col = 1; col < n; col++) {
            currRow[col] = currRow[col - 1] + aboveRow[col];
        }
        aboveRow = currRow;
    }
    return aboveRow[n - 1];
}

// const m = 3, n = 7;
// console.log(uniquePaths(m, n));
// https://leetcode.com/problems/unique-paths/?envType=problem-list-v2&envId=dynamic-programming



// My solution
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     let rows = obstacleGrid.length, cols = obstacleGrid[0].length;
//     let dp = Array.from({length: rows}, () => Array(cols).fill(0));
//     if (obstacleGrid[0][0] !== 1) {
//         dp[0][0] = 1;
//     } else {
//         return 0;
//     }
//     for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//             if (obstacleGrid[row][col] !== 1) {
//                 if (row - 1 >= 0) dp[row][col] += dp[row - 1][col];
//                 if (col - 1 >= 0) dp[row][col] += dp[row][col - 1];
//             }
//         }
//     }
//     return dp[rows - 1][cols - 1];
// }



// const obstacleGrid =[[0,1,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
// console.log(uniquePathsWithObstacles(obstacleGrid));
// https://leetcode.com/problems/unique-paths-ii/?envType=problem-list-v2&envId=dynamic-programming



// My solution
// var minPathSum = function(grid) {
//     let rows = grid.length, cols = grid[0].length;
//     let dp = Array.from({length: rows}, () => Array(cols).fill(0));
//     dp[rows - 1][cols - 1] = grid[rows - 1][cols - 1];
//     for (let row = rows - 1; row >= 0; row--) {
//         for (let col = cols - 1; col >= 0; col--) {
//             if (row < rows - 1 && col < cols - 1) {
//                 dp[row][col] = grid[row][col] + Math.min(dp[row + 1][col], dp[row][col + 1]);
//             } else if (row < rows - 1) {
//                 dp[row][col] = dp[row + 1][col] + grid[row][col];
//             } else if (col < cols - 1) {
//                 dp[row][col] = dp[row][col + 1] + grid[row][col];
//             }
//         }
//     }
//     return dp[0][0];
// };

// Best solution from Leetcode
// var minPathSum = function(grid) {
//     const m = grid.length;
//     const n = grid[0].length;
//     const dp = Array.from({ length: m }, () => Array(n).fill(0));
//     dp[0][0] = grid[0][0];

//     for (let i = 1; i < m; i++) {
//         dp[i][0] = dp[i - 1][0] + grid[i][0];
//     }

//     for (let j = 1; j < n; j++) {
//         dp[0][j] = dp[0][j - 1] + grid[0][j];
//     }

//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
//         }
//     }

//     return dp[m - 1][n - 1];
// };


// If allowed to modify the grid in place, we save memory by reusing it as a dp table
function minPathSum(grid) {
    const m = grid.length;
    const n = grid[0].length;
    // Fill first row (can only come from the left)
    for (let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1];
    }
    // Fill first column (can only come from above)
    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0];
    }
    // Fill rest of grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[m - 1][n - 1];
}

// const grid = [[1,3,1],[1,5,1],[4,2,1]];
// console.log(minPathSum(grid));
// https://leetcode.com/problems/minimum-path-sum/?envType=problem-list-v2&envId=dynamic-programming



function match(s, p, i, j, memo) {
    if (i >= s.length && j >= p.length) return true;
    if (j >= p.length) return false;
    
    let key = `${i},${j}`;
    if (key in memo) return memo[key];

    if (i >= s.length) {
        if (j + 1 < p.length && p[j + 1] === '*') {
            memo[key] = match(s, p, i, j + 2, memo);
        } else {
            memo[key] = false;
        }
        return memo[key];
    }

    const currMatch = s[i] === p[j] || p[j] === '.';
    if (j + 1 < p.length && p[j + 1] === '*') {
        const skipStar = match(s, p, i, j + 2, memo);
        const useStar = currMatch && match(s, p, i + 1, j, memo);
        memo[key] = skipStar || useStar;
        return memo[key];
    }

    if (currMatch) {
        memo[key] = match(s, p, i + 1, j + 1, memo);
        return memo[key];
    }

    memo[key] = false;
    return false;
}

var isMatch = function(s, p) {
    let memo = {};
    return match(s, p, 0, 0, memo);
};

// const s = "aaaaaaaaaaaaaaaaaaa", p = "a*a*a*a*a*a*a*a*a*b"
// console.log(isMatch(s, p));


// https://leetcode.com/problems/regular-expression-matching/?envType=problem-list-v2&envId=dynamic-programming


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function arrayToBinaryTree(arr) {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const current = queue.shift();

        if (i < arr.length && arr[i] != null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] != null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

var maxPathSum = function(root) {
    if (!root) return 0;
    let result = [root.val];

    function dfs(root) {
        if (!root) return 0;
        const leftMax = Math.max(dfs(root.left), 0);
        const rightMax = Math.max(dfs(root.right), 0);
        // Compute max path sum with split
        result[0] = Math.max(result[0], root.val + leftMax + rightMax);
        // Return max path without split
        return root.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return result[0];
};

// const root = [-10,9,20,null,null,15,7];
// console.log(maxPathSum(arrayToBinaryTree(root)));
// https://leetcode.com/problems/binary-tree-maximum-path-sum/?envType=problem-list-v2&envId=dynamic-programming




// Recursive
// var maximalSquare = function(matrix) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;
//     let memo = {};

//     function dfs(row, col) {
//         if (row >= rows || col >= cols) return 0;

//         let key = `${row}, ${col}`;
//         if (key in memo) {
//             return memo[key];
//         }

//         const down = dfs(row + 1, col);
//         const right = dfs(row, col + 1);
//         const diag = dfs(row + 1, col + 1);

//         memo[key] = 0;
//         if (matrix[row][col] == "1") {
//             memo[key] = 1 + Math.min(down, right, diag);
//         }
//         return memo[key];
//     }
//     dfs(0, 0);
//     return Math.max(...Object.values(memo)) ** 2;
// };


// Iterative
var maximalSquare = function(matrix) {
    let rows = matrix.length, cols = matrix[0].length;
    let max = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === "0") continue;
            if (r > 0 && c > 0) {
                matrix[r][c] = 1 + Math.min(matrix[r - 1][c], matrix[r][c - 1], matrix[r - 1][c - 1]);
            }
            max = Math.max(max, matrix[r][c]);
        }
    }
    console.log(matrix);
    return max ** 2;
};

// const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
// console.log(maximalSquare(matrix));
// https://leetcode.com/problems/maximal-square/description/?envType=problem-list-v2&envId=dynamic-programming







// O(n) space complexity
// var firstMissingPositive = function(nums) {
//     const set = new Set(nums);
//     for (let i = 1; i <= nums.length + 1; i++) {
//         if (!set.has(i)) return i;
//     }
//     return nums.length + 1;
// };


// Space O(1) , so clever
var firstMissingPositive = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }

    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return n + 1;
}

// const nums = [3,4,-1,1];
// console.log(firstMissingPositive(nums));
// https://leetcode.com/problems/first-missing-positive/




