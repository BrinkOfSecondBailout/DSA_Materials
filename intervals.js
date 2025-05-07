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

const intervals = [[-1,1],[10,11],[12,14],[3,4]];
console.log(eraseOverlapIntervals(intervals));
// https://leetcode.com/problems/non-overlapping-intervals/