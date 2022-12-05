# Leetcode: https://leetcode.com/problems/combinations/

class Solution:
        def combine(self, n: int, k: int) -> List[List[int]]:
                stack, result = [], []
                
                for i in range(1, n + 1):
                        stack.append( [i] )
                
                while stack:
                        item = stack.pop()
                        index = item[-1] or 0      
                        if len(item) == k:
                                result.append( item )
                        else:
                                for i in range( index+1, n+1 ):
                                        stack.append( item + [i] )
                
                return result