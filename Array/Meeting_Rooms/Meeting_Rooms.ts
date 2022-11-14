// Leetcode: https://leetcode.com/problems/meeting-rooms/

/**
 * @param { number[][] } meetings
 * @return { boolean }
 */

function canAttendMeetings(meetings: number[][]): boolean {
        meetings.sort((a, b) => a[0] - b[0]);
        for (let i: number = 0; i < meetings.length - 1; i++) {
                let j: number = i + 1;
                // A half-closed interval [a, b) is the interval between a and b including a and not including b
                if (meetings[j][0] >= meetings[i][0] && meetings[j][0] < meetings[i][1]) {
                        return false;
                }
        }
        return true;
}
