// Leetcode: https://leetcode.com/problems/meeting-rooms-ii/

/**
 * @param { number[][] } intervals
 * @return { number }
 */

function minMeetingRooms(intervals: Array<Array<number>>): number {
        let startTime: Array<number> = [];
        let endTime: Array<number> = [];
        let rooms = 0;

        for (let i: number = 0; i < intervals.length; i++) {
                const [start, end] = intervals[i];
                startTime.push(start);
                endTime.push(end);
        }

        startTime.sort((a, b) => a - b);
        endTime.sort((a, b) => a - b);

        let start2: number = 0;
        for (let start1: number = 0; start1 < startTime.length; start1++) {
                rooms++;
                // When the start is bigger than end, it means at this time one of the previous meeting ends, and it can take and reuse that room.
                if (startTime[start1] >= endTime[start2]) {
                        rooms--;
                        start2++;
                }
        }

        return rooms;
}
