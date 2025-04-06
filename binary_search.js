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

// const citations = [0,1,3,5,6];
// console.log(hIndex(citations));
// https://leetcode.com/problems/h-index-ii/





function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array for efficiency
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    const totalLeft = Math.floor((m + n + 1) / 2);
    
    // Binary search on the smaller array
    let left = 0;
    let right = m;
    
    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = totalLeft - partition1;
        
        // Handle edge cases with Infinity
        const left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const right1 = partition1 === m ? Infinity : nums1[partition1];
        const left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const right2 = partition2 === n ? Infinity : nums2[partition2];
        
        // Check if we found the correct partition
        if (left1 <= right2 && left2 <= right1) {
            // If total length is odd, return the max of left side
            if ((m + n) % 2 === 1) {
                return Math.max(left1, left2);
            }
            // If total length is even, return average of middle two numbers
            return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
        }
        // Adjust binary search bounds
        else if (left1 > right2) {
            right = partition1 - 1;
        }
        else {
            left = partition1 + 1;
        }
    }
}

// console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5

// const nums1 = [1, 3, 5, 7, 9], nums2 = [2, 4, 6, 8, 10, 12];
// console.log(findMedianSortedArrays(nums1, nums2));
// https://leetcode.com/problems/median-of-two-sorted-arrays/






var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right -= 1;
        }
    }
    return nums[left];
};

// const nums = [3,1,3];
// console.log(findMin(nums));
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/




var findDuplicate = function(nums) {
    let slow = nums[0], fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};

const nums = [1,3,4,2,2];
console.log(findDuplicate(nums));
// https://leetcode.com/problems/find-the-duplicate-number/




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

// const instructions = [1,3,3,3,2,4,2,1,2];
// console.log(createSortedArray(instructions));
// https://leetcode.com/problems/create-sorted-array-through-instructions/description/




var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closest = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
            if (sum > target) right--;
            else left++;
        }
    }
    return closest;
};

// let nums =  [4,0,5,-5,3,3,0,-4,-5], target = -2;
// console.log(threeSumClosest(nums, target));
// https://leetcode.com/problems/3sum-closest/