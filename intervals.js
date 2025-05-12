var eraseOverlapIntervals = function(intervals) {
    let prev = -Infinity;
    let overlap = 0;
    intervals.sort((a, b) => a[0] - b[0]);
    for (const interval of intervals) {
        if (interval[0] < prev) {
            overlap++;
            prev = Math.min(interval[1], prev);
        } else {
            prev = interval[1];
        }
    }
    return overlap;
};

// const intervals = [[-1,1],[10,11],[12,14],[3,4]];
// console.log(eraseOverlapIntervals(intervals));
// https://leetcode.com/problems/non-overlapping-intervals/

// Neetcode solution
// var removeCoveredIntervals = function(intervals) {
//     intervals.sort((a, b) => {
//         if (a[0] !== b[0]) {
//             return a[0] - b[0]; // Ascending order by first index
//         } else {
//             return b[1] - a[1]; // Descending order by second index
//         }
//     });
//     let result = [intervals[0]];
//     for (let i = 1; i < intervals.length; i++) {
//         let previous = result[result.length - 1];
//         if (previous[0] <= intervals[i][0] 
//         && previous[1] >= intervals[i][1]) {
//             continue;
//         } else {
//             result.push(intervals[i]);
//         }
//     }
//     return result.length;
// };

// My solution, faster, less space
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]; // Ascending order by first index
        } else {
            return b[1] - a[1]; // Descending order by second index
        }
    })
    let result = intervals.length;
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        if (prev[1] >= curr[1]) {
            result--;
            continue;
        } else {
            prev = curr;
        }
    }
    return result;
};


// intervals = [[1,4],[3,6],[2,8]];
// console.log(removeCoveredIntervals(intervals));
// https://leetcode.com/problems/remove-covered-intervals/description/


var merge = function(intervals) {
    if (intervals.length === 0) return null;
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        let prev = result[result.length - 1];
        if (curr[0] <= prev[1]) {
            result[result.length - 1] = [
                Math.min(prev[0], curr[0]), 
                Math.max(prev[1], curr[1])];
        } else {
            result.push(curr);
        }
    }
    return result;
};

// const intervals = [[1,3],[2,6],[8,10],[15,18]];
// console.log(merge(intervals));
// https://leetcode.com/problems/merge-intervals/