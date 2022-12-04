# Leetcode: https://leetcode.com/problems/permutations-ii/

class Solution:
        def permuteUnique(self, nums: List[int]) -> List[List[int]]:
                nums = sorted(nums)
                stack, result = [], []
                
                for i in range(len(nums)):
                        stack.append([ [nums[i]], [i] ])

                while stack: 
                        item, indexes = stack.pop(0)
                        if len(item) == len(nums) and item not in result:
                                result.append(item)
                        else:
                                for i in range(0, len(nums)):
                                        if i not in indexes:
                                                stack.append([ item + [nums[i]], indexes + [i] ])
                return result