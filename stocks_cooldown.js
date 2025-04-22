var maxProfit = function(prices) {
    let n = prices.length;
    if (n < 2) return 0;
    
    let dp = {};

    function dfs(i, canBuy) {
        if (i >= n) {
            return 0;
        }
        let key = `${i}, ${canBuy}`;
        if (dp[key]) return dp[key];

        if (canBuy) {
            let buy = dfs(i + 1, false) - prices[i]; // Buy today, subtract balance from today's price and move to next day where you can't buy again and in selling mode
            let cool = dfs(i + 1, true);  // Do nothing, go to next day (allowed to buy)
            dp[key] = Math.max(buy, cool); // Choose option with max profit
        } else {
            let sell = dfs(i + 2, true) + prices[i]; // Sell today, add price to profit, forced to cool down the next day so jump 2 places and continue
            let cool = dfs(i + 1, false); // Do nothing, go to next day (not allowed to buy since we are still holding the stock)
            dp[key] = Math.max(sell, cool); // Choose option with max profit
        }
        return dp[key];
    }
    return dfs(0, true);
};


// var maxProfitBottomUp = function(prices) {
//     const n = prices.length;
//     if (n < 2) return 0;

//     let hold = Array(n).fill(0);
//     let sold = Array(n).fill(0);
//     let rest = Array(n).fill(0);

//     hold[0] = -prices[0];     // Bought stock on day 0
//     sold[0] = 0;              // Can't sell on day 0
//     rest[0] = 0;              // Did nothing on day 0

//     for (let i = 1; i < n; i++) {
//         hold[i] = Math.max(hold[i - 1], rest[i - 1] - prices[i]);
//         sold[i] = hold[i - 1] + prices[i];
//         rest[i] = Math.max(rest[i - 1], sold[i - 1]);
//     }

//     // On the last day, max profit must be either in rest or sold state (not hold)
//     return Math.max(sold[n - 1], rest[n - 1]);
// };



const prices = [1,2,3,0,2]; // 3
console.log(maxProfit(prices));