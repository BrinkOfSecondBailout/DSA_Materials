var maxProfit = function(k, prices) {
    let n = prices.length;
    if (n <= 1) return 0;

    if (k >= n / 2) {
        let profit = 0;
        for (let d = 1; d < n; d++) {
            if (prices[d] > prices[d - 1]) profit += prices[d] - prices[d - 1];
        }
        return profit;
    }

    let dp = Array.from({length: k + 1}, () => Array(n).fill(0));
    for (let t = 1; t <= k; t++) {
        let maxDiff = -prices[0];

        for (let d = 1; d < n; d++) {
            dp[t][d] = Math.max(dp[t][d - 1], maxDiff + prices[d]);
            maxDiff = Math.max(maxDiff, dp[t - 1][d] - prices[d]);
        }
    }
    return dp[k][n - 1];
};

const k = 2, prices = [3,2,6,5,0,3];

console.log(maxProfit(k, prices));