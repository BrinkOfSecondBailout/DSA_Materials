var twoSum = function(nums, target) {
    let map = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (difference in map) {
            result.push(i, map[difference]);
            return result;
        } else {
            map[nums[i]] = i;
        }
    }
    return false;
};

// const nums = [2,7,11,15], target = 9;
// console.log(twoSum(nums, target));
// https://leetcode.com/problems/two-sum/description/


