// Leetcode: https://leetcode.com/problems/merge-intervals/

/**
 * @param { number[][] } intervals
 * @return { number[][] }
 */

var merge = function (intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        for (let i = 0; i < intervals.length - 1; i++) {
                let j = i + 1;
                if (intervals[j][0] >= intervals[i][0] && intervals[j][0] <= intervals[i][1]) {
                        intervals[i] = [intervals[i][0], Math.max(intervals[i][1], intervals[j][1])];
                        intervals.splice(j, 1);
                        i--;
                }
        }
        return intervals;
};
