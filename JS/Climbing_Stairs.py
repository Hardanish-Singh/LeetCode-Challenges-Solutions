# Leetcode: https://leetcode.com/problems/climbing-stairs

import math

class Solution:
    def climbStairs(self, n: int) -> int:
        stairs = [ '1' * n ]
        index = 0
        stair = stairs[index]
        count = 0

        while True:
            before = stair[0: stair.rfind( '2' ) + 1 ]
            for i in range(stair.rfind( '2' ) + 1, len(stair) - 1):
                stairs.append( before + '2' + stair[ i + 2: ] )
                before += stair[i]
                break
            else:
                break
            index = index + 1
            stair = stairs[index]
        
        for item in stairs:
            count = count + math.comb(len(item), item.count('2'))

        return count