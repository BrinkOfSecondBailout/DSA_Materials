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



var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};

// const nums = [0,0,0,0];
// console.log(threeSum(nums));
// https://leetcode.com/problems/3sum/description/




var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let currentArea = Math.min(height[left], height[right]) * width;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}


// const height = [1,1];
// console.log(maxArea(height));
// https://leetcode.com/problems/container-with-most-water/




var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) { // Left part is sorted
            if (nums[left] <= target && target < nums[mid]) { // Target must be in the left half
                right = mid - 1;
            } else { // Target in the right half
                left = mid + 1;
            }
        } else { // Right part is sorted
            if (nums[right] >= target && target > nums[mid]) { // Target must be in right half
                left = mid + 1;
            } else { // Target in the left half
                right = mid - 1;
            }
        }
    }
    return -1;
};

// const nums = [4,5,6,7,0,1,2], target = 0;
// console.log(search(nums, target));
// https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/1339701128/



var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1];

    let left = 0;
    let right = nums.length - 1;
    let result = [];
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let value = nums[mid];
        if (value === target) {
            if (nums.length === 1) {
                result.push(mid, mid);
                return result;
            }

            let start = mid;
            if (start === 0) result.push(start);
            if (start > 0 && nums[start - 1] < target) {
                result.push(start);
            } else if (start > 0 && nums[start - 1] === target) {
                while (nums[start] === target) start--;
                start = start + 1;
                result.push(start);
            }
            while (nums[start] === target) start++;
            result.push(start - 1);
            return result;
        } else if (target > value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    result.push(-1, -1);
    return result;
};

// const nums = [2,2], target = 2;
// console.log(searchRange(nums, target));
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/




var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }
    return waterTrapped;
};

// const height = [0,1,0,2,1,0,1,3,2,1,2,1];
// console.log(trap(height));
// https://leetcode.com/problems/trapping-rain-water/






var search = function(nums, target) {
    if (nums.length === 0) return -1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            // Left part is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right part is sorted
            if (nums[right] >= target && target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};

// const nums = [3,5,1], target = 3;
// console.log(search(nums, target));
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/





var sortColors = function(nums) {
    let n = nums.length;
    if (n === 0) return null;
    let red = white = 0;
    let blue = n - 1;
    while (white <= blue) {
        if (nums[white] === 0) {
            [nums[white], nums[red]] = [nums[red], nums[white]];
            red++;
            white++;
        } else if (nums[white] === 1) {
            white++;
        } else {
            [nums[white], nums[blue]] = [nums[blue], nums[white]];
            blue--;
        }
    }
};

// const nums = [2,0,2,1,1,0];
// console.log(sortColors(nums));
// https://leetcode.com/problems/sort-colors/description/




function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

var rotate = function(nums, k) {
    if (nums.length === 0) return null;
    if (k === 0) return nums;
    k = k % nums.length;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

// const nums = [-1,-100,3,99], k = 2;
// rotate(nums, k);
// console.log(nums);
// https://leetcode.com/problems/rotate-array/description/




var maxArea = function(height) {
    if (height.length === 0 || height.length === 1) return null;
    let max = 0, currArea = 0;
    let left = 0, right = height.length - 1;
    while (left < right) {
        currArea = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, currArea);
        height[left] < height[right] ? left++ : right--;
    }
    return max;
};

// const height = [1,8,6,2,5,4,8,3,7];
// console.log(maxArea(height));
// https://leetcode.com/problems/container-with-most-water/description/




