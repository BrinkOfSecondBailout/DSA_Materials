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



