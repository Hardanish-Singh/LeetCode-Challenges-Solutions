/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
        let meetingCount = [];
        let rooms = [];
        //Intialize meetingCount & rooms
        for (let i = 0; i < n; i++) {
                rooms[i] = -1;
                meetingCount[i] = 0;
        }
        //Sort meeting by their start time
        meetings.sort((a, b) => a[0] - b[0]);

        for (let i = 0; i < meetings.length; i++) {
                let start = meetings[i][0];
                let end = meetings[i][1];
                let earliestRoom = -1;
                let earliestTime = Number.MAX_VALUE;
                let freeRoomFound = false;
                for (let i = 0; i < n; i++) {
                        if (start >= rooms[i]) {
                                //This is the room with the smallest index which is free on or before start time of the current meeting
                                meetingCount[i]++;
                                rooms[i] = end; //This room will be avialable at 'end' time of the current meeting.
                                freeRoomFound = true;
                                break;
                        }
                        if (earliestTime > rooms[i]) {
                                //Let's keep track of the "room with smallest index and being available at the earliest"
                                earliestTime = rooms[i];
                                earliestRoom = i;
                        }
                }
                if (freeRoomFound === false) {
                        //If we couldn't find any meeting room then we will wait for the "room with smallest index and being available at the earliest"
                        meetingCount[earliestRoom]++;
                        rooms[earliestRoom] += end - start; //Time to vacant for the room will be increased by the duration of current meeting.
                }
        }
        return meetingCount.indexOf(Math.max.apply(null, meetingCount));
};
