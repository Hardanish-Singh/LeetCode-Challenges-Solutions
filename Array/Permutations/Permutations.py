# Leetcode: https://leetcode.com/problems/permutations/

class Solution:
        def permute(self, nums: List[int]) -> List[List[int]]:
                nums.sort()
                stack, result = [], []
                
                [stack.append([num]) for num in nums]

                while stack:
                        item = stack.pop()
                        if len(item) == len(nums):
                                result.append(item)
                        else:
                                [stack.append( item + [num] ) for num in nums if num not in item]
                return result