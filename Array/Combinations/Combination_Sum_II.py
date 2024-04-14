# Leetcode: https://leetcode.com/problems/combination-sum-ii

class Solution:
        def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
                candidates.sort()
                stack, result, combinationsTried = [], [], []
                
                [stack.append( [ [candidates[i]], [i] ] ) for i in range(len(candidates))]

                while stack:
                        item, indexes = stack.pop()
                        combinationSum = sum(item)
                        if combinationSum == target and item not in result:
                                result.append(item)
                        else:
                                for i in range(len(candidates)):
                                        if i not in indexes and combinationSum + candidates[i] <= target:
                                                sortedItem = sorted(item + [candidates[i]])
                                                if sortedItem not in combinationsTried:
                                                        combinationsTried.append(sortedItem)
                                                        stack.append( [ sortedItem , indexes + [i] ] )

                return result