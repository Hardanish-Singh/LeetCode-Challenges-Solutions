# Leetcode: https://leetcode.com/problems/combination-sum-ii

class Solution:
        def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
                candidates.sort()
                stack, result, combinations_tried = [], [], []
                
                for i in range(len(candidates)):
                        stack.append( [ [candidates[i]], [i] ] )

                while stack:
                        item, indexes = stack.pop()
                        combinationSum = sum(item)
                        if combinationSum == target and item not in result:
                                result.append(item)
                        else:
                                for i in range(len(candidates)):
                                        if i not in indexes and combinationSum + candidates[i] <= target:
                                                temp = sorted(item + [candidates[i]])
                                                if temp not in combinations_tried:
                                                        combinations_tried.append(temp)
                                                        stack.append( [ temp , indexes + [i] ] )
                return result