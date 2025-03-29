var createSortedArray = function(instructions) {
    const MOD = 1000000007;
    let nums = [];
    let totalCost = 0;

    function findPosition(arr, val) {
        let n = arr.length;
        let left = 0, right = n - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (val > arr[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    function calculateCost(arr, val) {
        let less = 0;
        let greater = 0;
        for (let num of arr) {
            if (num < val) less++;
            if (num > val) greater++;
        }
        return [less, greater];
    }

    for (let val of instructions) {
        const [less, greater] = calculateCost(nums, val);
        let cost = Math.min(less, greater);
        totalCost = (totalCost + cost) % MOD;
        let pos = findPosition(nums, val);
        nums.splice(pos, 0, val);
    }
    return totalCost;
};

const instructions = [1,3,3,3,2,4,2,1,2];
console.log(createSortedArray(instructions));
// https://leetcode.com/problems/create-sorted-array-through-instructions/description/