
// Bilateral directional array
// var maxProfit = function(prices) {
//     let n = prices.length;
//     if (n <= 1) return 0;

//     let leftProfit = new Array(n).fill(0);
//     let rightProfit = new Array(n).fill(0);

//     let minPrice = Infinity;
//     let maxProfit = -Infinity;

//     for (let i = 0; i < n; i++) {
//         minPrice = Math.min(minPrice, prices[i]);
//         maxProfit = Math.max(maxProfit, prices[i] - minPrice);
//         leftProfit[i] = maxProfit;
//     }

//     let maxPrice = -Infinity;
//     let maxProfit2 = -Infinity;
//     for (let i = n - 1; i >= 0; i--) {
//         maxPrice = Math.max(maxPrice, prices[i]);
//         maxProfit2 = Math.max(maxProfit2, maxPrice - prices[i]);
//         rightProfit[i] = maxProfit2;
//     }
//     let max = 0;
//     for (let i = 0; i < n; i++) {
//         max = Math.max(max, leftProfit[i] + rightProfit[i]);
//     }
//     return max;
// };



// DP one pass array
function maxProfit(prices) {
    if (!prices || prices.length === 0) return 0;

    const n = prices.length;
    const dp = Array.from({ length: 3 }, () => Array(n).fill(0));

    for (let t = 1; t <= 2; t++) {
        let maxDiff = -prices[0];  // Max profit if we bought before today
        console.log(`\n=== Transactions allowed: ${t} ===`);
        for (let d = 1; d < n; d++) {
            // Two options:
            // 1. Don't sell today -> same as yesterday: dp[t][d-1]
            // 2. Sell today -> profit = prices[d] + maxDiff
            dp[t][d] = Math.max(dp[t][d - 1], prices[d] + maxDiff);
            // Update maxDiff for the next day
            maxDiff = Math.max(maxDiff, dp[t - 1][d] - prices[d]);
            console.log(
                `Day ${d}: price=${prices[d]}, dp[${t}][${d}]=${dp[t][d]}, maxDiff=${maxDiff}`
            );
        }
        console.log(`DP Row ${t}:`, dp[t]);
    }

    return dp[2][n - 1];
}

const prices = [3,3,5,0,0,3,1,4];
console.log(maxProfit(prices));