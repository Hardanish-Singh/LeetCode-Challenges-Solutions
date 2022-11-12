/**
 * @param {number} n
 * @param {number[][] } meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
        let meetingCount = [];
        let endTime = [];
        //Intialize meetingCount & endTime
        for (let i = 0; i < n; i++) {
                endTime[i] = -1;
                meetingCount[i] = 0;
        }
        //Sort meeting by their startTime time
        meetings.sort((a, b) => a[0] - b[0]);

        for (let i = 0; i < meetings.length; i++) {
                let startTime = meetings[i][0];
                let end = meetings[i][1];
                let earliestRoom = -1;
                let earliestTime = Number.MAX_VALUE;
                let freeRoomFound = false;
                for (let j = 0; j < n; j++) {
                        // When the start is bigger than end, it means at this time one of the previous meeting ends, and it can take and reuse that room.
                        if (startTime >= endTime[j]) {
                                //This is the room with the smallest index which is free on or before startTime time of the current meeting
                                meetingCount[j]++;
                                endTime[j] = end; //This room will be avialable at 'end' time of the current meeting.
                                freeRoomFound = true;
                                break;
                        } else if (earliestTime > endTime[j]) {
                                //Let's keep track of the "room with smallest index and being available at the earliest"
                                earliestTime = endTime[j];
                                earliestRoom = j;
                        }
                }
                if (freeRoomFound === false) {
                        //If we couldn't find any meeting room then we will wait for the "room with smallest index and being available at the earliest"
                        meetingCount[earliestRoom]++;
                        endTime[earliestRoom] += end - startTime; //Time to vacant for the room will be increased by the duration of current meeting.
                }
        }
        return meetingCount.indexOf(Math.max.apply(null, meetingCount));
};
