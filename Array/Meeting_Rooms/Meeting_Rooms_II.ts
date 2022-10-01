// Leetcode:

/*
        Here is the thought process, whenever there is a start meeting, we need to add one room. 
        But before adding rooms, we check to see if any previous meeting ends, which is why we check start with the end. 
        When the start is bigger than end, it means at this time one of the previous meeting ends, and it can take and reuse that room. 
        Then the next meeting need to compare with the second end because the first end's room is already taken. 

        for example, we have meetings that span along time as follows:

        |_____|
              |______|
        |_________|
                |_______|
        
        Then, the start time array and end time array after sorting appear like follows:
        ||    ||
             |   |   |  |
*/

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
