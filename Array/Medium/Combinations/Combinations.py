# Leetcode: https://leetcode.com/problems/combinations/

class Solution:
        def combine(self, n: int, k: int) -> List[List[int]]:
                stack, result = [], []
                
                for i in range(1, n + 1):
                        stack.append( [i] )
                
                while stack:
                        item = stack.pop()
                        
                        index = 0
                        if item:
                                index = item[-1]      
                        
                        if len(item) == k:
                                result.append( item )
                        
                        for i in range( index+1, n+1 ):
                                stack.append( item + [i] )
                
                return result