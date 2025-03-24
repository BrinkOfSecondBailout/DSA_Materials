var missingNumber = function(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    console.log(nums);
    let mid = 0, start = 0, end = n - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === mid) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    if (nums[mid] > mid) {
        return mid;
    } else {
        return mid + 1;
    }
};

// const nums = [3,0,1];
// console.log(missingNumber(nums));
// https://leetcode.com/problems/missing-number/





var hIndex = function(citations) {
    let n = citations.length;
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (citations[i] >= n - i) max = Math.max(max, n - i);
    }
    return max;
};

const citations = [0,1,3,5,6];
console.log(hIndex(citations));
// https://leetcode.com/problems/h-index-ii/