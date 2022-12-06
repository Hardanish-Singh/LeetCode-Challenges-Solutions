# Leetcode: https://leetcode.com/problems/combination-sum-ii

class Solution:
        def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
                candidates.sort()
                stack = [ [0, []] ]
                result = []

                while stack:
                        index, item = stack.pop()
                        combinationSum = sum(item)
                        if combinationSum == target and item not in result:
                                result.append(item)
                        else:
                                for i in range(index, len(candidates)):
                                        if i != index and candidates[i] == candidates[i-1]:
                                                continue
                                        elif combinationSum + candidates[i] > target:
                                                break
                                        elif combinationSum + candidates[i] <= target:
                                                stack.append( [i+1, item + [candidates[i]]] )
                return result