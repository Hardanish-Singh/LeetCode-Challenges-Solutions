# Leetcode: https://leetcode.com/problems/permutations-ii/

# Solution 1
class Solution:
        def permuteUnique(self, nums: List[int]) -> List[List[int]]:
                nums.sort()
                stack, result = [], []
                
                [stack.append( [ [nums[i]], [i] ] ) for i in range(len(nums))]

                while stack:
                        item, indexes = stack.pop()
                        if len(item) == len(nums) and item not in result:
                                result.append(item)
                        else:
                                [ stack.append( [ item + [nums[i]], indexes + [i] ] ) for i in range(len(nums)) if i not in indexes]

                return result

# Solution 2
from itertools import permutations
class Solution:
        def permuteUnique(self, nums: List[int]) -> List[List[int]]:
            return list(set(permutations(nums)))