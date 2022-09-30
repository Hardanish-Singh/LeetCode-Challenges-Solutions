// Leetcode: https://leetcode.com/problems/meeting-rooms/

/**
 * @param { number[][] } intervals
 * @return { boolean }
 */

function canAttendMeetings(intervals: number[][]): boolean {
        intervals.sort((a, b) => a[0] - b[0]);
        for (let i: number = 0; i < intervals.length - 1; i++) {
                let j: number = i + 1;
                if (
                        (intervals[j][0] === intervals[i][0] && intervals[j][1] === intervals[i][1]) ||
                        (intervals[j][0] > intervals[i][0] && intervals[j][0] < intervals[i][1])
                ) {
                        return false;
                }
        }
        return true;
}
