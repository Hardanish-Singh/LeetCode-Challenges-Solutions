# Leetcode: https://leetcode.com/problems/combination-sum/

class Solution(object):
        def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
                candidates.sort()
                queue, result = [], []
                
                for candidate in candidates:
                        queue.append( [candidate] )

                while queue: 
                        item = queue.pop(0)
                        remainder = target - sum(item)
                        if remainder == 0 and item not in result:
                                result.append(item)
                        else:
                                for candidate in candidates:
                                        if remainder >= candidate:
                                                queue.append(sorted(item + [candidate]))

                return result