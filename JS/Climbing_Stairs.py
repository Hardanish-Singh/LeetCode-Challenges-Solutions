# Leetcode: https://leetcode.com/problems/climbing-stairs

from math import comb

class Solution:
    def climbStairs(self, n: int) -> int:
        stairs = []
        stair = '1' * n
        count = 0
        str = stair

        while sum(list(map(int, str))) <= n:
            index = str.rfind('2') + 1
            stairs.append( str )
            str = stair[0:index] + '2' + stair[index + 2:]
            stair = str
        
        for item in stairs:
            count = count + comb(len(item), item.count('2'))

        return count