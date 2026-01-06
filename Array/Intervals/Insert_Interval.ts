// Leetcode: https://leetcode.com/problems/insert-interval/

/**
 * @param { number[][] } intervals
 * @return { number[][] }
 */

var merge = function (intervals: number[][]): Array<Array<number>> {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i: number = 0; i < intervals.length - 1; i++) {
        let j: number = i + 1;
        if (intervals[j][0] >= intervals[i][0] && intervals[j][0] <= intervals[i][1]) {
            intervals[i] = [intervals[i][0], Math.max(intervals[i][1], intervals[j][1])];
            intervals.splice(j, 1);
            i--;
        }
    }
    return intervals;
};

/**
 * @param { number[][] } intervals
 * @param { number[] } newInterval
 * @return { number[][] }
 */
var insert = function (intervals: Array<Array<number>>, newInterval: Array<number>): Array<Array<number>> {
    intervals = [...intervals, newInterval];
    return merge(intervals);
};
