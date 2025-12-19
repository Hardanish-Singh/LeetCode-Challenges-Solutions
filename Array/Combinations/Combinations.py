# Leetcode: https://leetcode.com/problems/combinations/

from typing import List

class Solution:
        def combine(self, n: int, k: int) -> List[List[int]]:
                stack, result = [], []

                [stack.append( [i] ) for i in range(1, n + 1)]
                
                while stack:
                        item = stack.pop()
                        index = item[-1] or 0      
                        if len(item) == k:
                                result.append( item )
                        else:
                                [stack.append( item + [i] ) for i in range( index+1, n+1 )]
                
                return result