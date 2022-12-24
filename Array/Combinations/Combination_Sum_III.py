# Leetcode: https://leetcode.com/problems/combination-sum-iii

class Solution:
        def combinationSum3(self, k: int, n: int) -> List[List[int]]:
                combinations = []
                stack = [ [[], 1] ]

                while stack:
                        currentCombination, integer = stack.pop()
                        combinationSum = sum(currentCombination)
                        if combinationSum == n and len(currentCombination) == k: 
                                combinations.append(currentCombination)
                        else:
                                for i in range(integer, 10):
                                        if combinationSum + i > n: 
                                                break
                                        stack.append( [currentCombination + [i], i + 1] )
                
                return combinations