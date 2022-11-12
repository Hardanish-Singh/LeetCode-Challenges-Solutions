# Leetcode: https://leetcode.com/problems/meeting-rooms-iii/

class Solution:
        def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
                meetingCount = [0] * n
                endTime = [0] * n
                meetings.sort(key = lambda x: x[0]) # Sort Meeting by start time
                for startTime, end in meetings:
                        for j in range(n):
                                if(startTime >= endTime[j] or endTime[j] == -1):
                                        meetingCount[j] += 1
                                        endTime[j] = end
                                        break
                        else:
                                minEndTimeIndex = endTime.index(min(endTime))
                                duration = end - startTime
                                endTime[minEndTimeIndex] += duration
                                meetingCount[minEndTimeIndex] += 1
                return meetingCount.index(max(meetingCount))