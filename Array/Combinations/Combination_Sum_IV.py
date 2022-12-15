# Leetcode: https://leetcode.com/problems/combination-sum-iv

from functools import lru_cache
class Solution:
        def combinationSum4(self, candidates: List[int], target: int) -> int:
                @lru_cache(None)
                def solve(amount):
                        if amount == 0: 
                                return True
                        if amount < 0:
                                return False
                        cand = 0
                        for candidate in candidates:
                                cand = cand + solve(amount - candidate)
                        return cand

                return solve(target)