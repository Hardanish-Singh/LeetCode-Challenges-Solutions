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

        let end: number = 0;
        for (let start: number = 0; start < meetingStartTime.length; start++) {
                rooms++;
                if (meetingStartTime[start] >= meetingEndTime[end]) {
                        rooms--;
                        end++;
                }
        }

        return rooms;
}
