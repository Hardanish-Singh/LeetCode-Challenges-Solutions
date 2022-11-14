// Leetcode: https://leetcode.com/problems/meeting-rooms-ii/

/**
 * @param { number[][] } meetings
 * @return { number }
 */

function minMeetingRooms(meetings: Array<Array<number>>): number {
        let startTime: Array<number> = meetings.map((interval) => interval[0]).sort((a, b) => a - b);
        let endTime: Array<number> = meetings.map((interval) => interval[1]).sort((a, b) => a - b);
        let rooms = 0;

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
