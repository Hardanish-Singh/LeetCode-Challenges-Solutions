# Leetcode: https://leetcode.com/problems/combination-sum/

class Solution(object):
        def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
                candidates = sorted(candidates)
                queue, result = [], []
                
                for candidate in candidates:
                        queue.append( [candidate] )

                while queue: 
                        item = queue.pop(0)
                        remainder = target - sum(item)
                        if remainder == 0:
                                result.append(item)
                        else:
                                for candidate in candidates:
                                        if remainder >= candidate:
                                                temp = sorted(item + [candidate])
                                                if temp not in queue:
                                                        queue.append(temp)

                return result