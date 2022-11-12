/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */

var mostBooked = function (n: number, meetings: Array<Array<number>>): number {
        let meetingCount: Array<number> = [];
        let endTime: Array<number> = [];
        //Intialize meetingCount & endTime
        for (let i: number = 0; i < n; i++) {
                endTime[i] = -1;
                meetingCount[i] = 0;
        }
        //Sort meeting by their startTime time
        meetings.sort((a, b) => a[0] - b[0]);

        for (let i: number = 0; i < meetings.length; i++) {
                let [startTime, end] = meetings[i];
                let freeRoomFound: boolean = false;
                for (let j: number = 0; j < n; j++) {
                        /*
                                When the start is bigger than end, it means at this time one of the previous meeting ends, and it can take and reuse that room.
                                or
                                If a room is empty means (-1)
                        */
                        if (startTime >= endTime[j] || endTime[j] == -1) {
                                meetingCount[j]++; // This is the room with the smallest index which is free on or before startTime time of the current meeting
                                endTime[j] = end; // This room will be avialable at 'end' time of the current meeting.
                                freeRoomFound = true;
                                break;
                        }
                }
                // If we couldn't find any meeting room that is free
                if (!freeRoomFound) {
                        let minEndTimeIndex = endTime.indexOf(Math.min.apply(null, endTime)); // Find index of the room with minimum endTime
                        let duration = end - startTime; // calculate duration of current meeting
                        endTime[minEndTimeIndex] += duration; // Time to vacant the room will be increased by the duration of current meeting.
                        meetingCount[minEndTimeIndex]++;
                }
        }
        // Now return the room number with the maximum frequency that occured at first in order.
        return meetingCount.indexOf(Math.max.apply(null, meetingCount));
};
