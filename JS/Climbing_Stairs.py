# Leetcode: https://leetcode.com/problems/climbing-stairs

from math import comb

class Solution:
    def climbStairs(self, n: int) -> int:
        stairs = []
        stair = '1' * n
        count = 0

        while sum(list(map(int, stair))) <= n:
            index = stair.rfind('2') + 1
            stairs.append( stair )
            stair = stair[0:index] + '2' + stair[index + 2:]
        
        for item in stairs:
            count = count + comb(len(item), item.count('2'))

        return count