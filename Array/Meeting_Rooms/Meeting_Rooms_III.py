# Leetcode: https://leetcode.com/problems/meeting-rooms-iii/

class Solution:
        def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
                meetingCount: List[int] = [0] * n
                endTime: List[int] = [0] * n
                meetings.sort(key = lambda x: x[0]) # Sort Meeting by start time
                for startTime, end in meetings:
                        for j in range(n):
                                if(startTime >= endTime[j]):
                                        meetingCount[j] += 1
                                        endTime[j] = end
                                        break
                        else:
                                minEndTimeIndex: int = endTime.index(min(endTime))
                                duration: int = end - startTime
                                endTime[minEndTimeIndex] += duration
                                meetingCount[minEndTimeIndex] += 1
                return meetingCount.index(max(meetingCount))