# Leetcode: https://leetcode.com/problems/combination-sum-iv

class Solution:    
        def combinationSum4(self, nums: List[int], target: int) -> int:
                candidates = nums
                candidates = sorted(candidates)
                stack, result = [], []
                
                for candidate in candidates:
                        stack.append( [candidate] )

                while stack: 
                        item = stack.pop()
                        remainder = target - sum(item)
                        if remainder == 0:
                                result.append(item)
                        else:
                                for candidate in candidates:
                                        if candidate > target or remainder > target or remainder - candidate > target:
                                                break
                                        if remainder >= candidate:
                                                stack.append(item + [candidate])
        
                return len(result)