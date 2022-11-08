// Leetcode: https://leetcode.com/problems/meeting-rooms-ii/

/**
 * @param { number[][] } intervals
 * @return { number }
 */

function minMeetingRooms(intervals: Array<Array<number>>): number {
        let meetingStartTime: Array<number> = [];
        let meetingEndTime: Array<number> = [];
        let rooms = 0;

        for (let i: number = 0; i < intervals.length; i++) {
                meetingStartTime.push(intervals[i][0]);
                meetingEndTime.push(intervals[i][1]);
        }

        meetingStartTime.sort((a, b) => a - b);
        meetingEndTime.sort((a, b) => a - b);

        let start2: number = 0;
        for (let start1: number = 0; start1 < meetingStartTime.length; start1++) {
                rooms++;
                // When the start is bigger than end, it means at this time one of the previous meeting ends, and it can take and reuse that room.
                if (meetingStartTime[start1] >= meetingEndTime[start2]) {
                        rooms--;
                        start2++;
                }
        }

        return rooms;
}
