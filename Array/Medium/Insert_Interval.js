/*
        You are given an array of non-overlapping intervals intervals where intervals[i] = [start(i), end(i)] represent the start and the end of the i^th interval and intervals is sorted in ascending order by start(i). 
        You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
        
        Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

        Return intervals after the insertion.

        Example 1:
                Input: intervals = [ [1,3], [6,9] ], newInterval = [2,5]
                Output: [ [1,5], [6,9] ]
        Example 2:
                Input: intervals = [ [1,2], [3,5], [6,7], [8,10], [12,16] ], newInterval = [4,8]
                Output: [ [1,2], [3,10], [12,16] ]
                Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
        
        Constraints:
                1) 0 <= intervals.length <= 10^4
                2) intervals[i].length == 2
                3) 0 <= start(i) <= end(i) <= 10^5
                4) intervals is sorted by start(i) in ascending order.
                5) newInterval.length == 2
                6) 0 <= start <= end <= 10^5
*/

/*
 * @param { number[][] } intervals
 * @param { number[] } newInterval
 * @return { number[][] }
*/

var merge = function( intervals ) {
        intervals.sort( (a,b) => a[0] - b[0] );
        for( let i = 0; i < intervals.length - 1; i++ ) {
                let j = i + 1;
                if( 
                        intervals[j][0] >= intervals[i][0] 
                                && 
                        intervals[j][0] <= intervals[i][1] 
                ) {
                        intervals[i] = [ intervals[i][0], Math.max( intervals[i][1], intervals[j][1] ) ];
                        intervals.splice(j, 1);
                        i--;
                }
        }
        return intervals;
};

var insert = function( intervals, newInterval ) {
        intervals = [...intervals, newInterval];
        return merge(intervals);
};