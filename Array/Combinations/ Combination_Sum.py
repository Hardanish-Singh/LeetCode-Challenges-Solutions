# Leetcode: https://leetcode.com/problems/combination-sum/

class Solution(object):
        def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
                candidates = sorted(candidates)
                stack = []
                result = []
                
                for candidate in candidates:
                        stack.append([candidate])

                while stack: 
                        item = stack.pop(0)
                        remainder = target - sum(item)
                        if remainder == 0:
                                result.append(item)
                        else:
                                for candidate in candidates:
                                        if remainder >= candidate:
                                                temp = sorted(item + [candidate])
                                                if temp not in stack:
                                                        stack.append(temp)

                return result