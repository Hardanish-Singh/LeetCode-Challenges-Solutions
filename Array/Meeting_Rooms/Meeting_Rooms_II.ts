// Leetcode: https://leetcode.com/problems/meeting-rooms-ii/

/**
 * @param { number[][]} intervals
 * @return { number }
 */

function minMeetingRooms(intervals: Array<Array<number>>): number {
        let startTime: Array<number> = intervals.map((interval) => interval[0]);
        let endTime: Array<number> = intervals.map((interval) => interval[1]);
        let rooms = 0;

        startTime.sort((a, b) => a - b);
        endTime.sort((a, b) => a - b);

        let endTimeIndex: number = 0;
        for (let startTimeIndex: number = 0; startTimeIndex < startTime.length; startTimeIndex++) {
                rooms++;
                // When the start is bigger than end, it means at this time one of the previous meeting ends, and it can take and reuse that room.
                if (startTime[startTimeIndex] >= endTime[endTimeIndex]) {
                        rooms--;
                        endTimeIndex++;
                }
        }

        return rooms;
}
