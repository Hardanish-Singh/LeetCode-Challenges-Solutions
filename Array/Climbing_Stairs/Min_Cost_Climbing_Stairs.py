# Leetcode: https://leetcode.com/problems/min-cost-climbing-stairs/

# Solution 1: Recursion with memoization
from typing import Dict, List

class Solution:
        def minCostClimbingStairs(self, cost: List[int]) -> int:
                def minSteps( stepIndex: int, cache: Dict[int, int] = {} ) -> int:
                        if stepIndex in cache.keys():
                                return cache[stepIndex]
                        if stepIndex >= len(cost):
                                return 0
                        minCost = cost[stepIndex] + min( minSteps( stepIndex + 1, cache ), minSteps( stepIndex + 2, cache ) )
                        cache[stepIndex] = minCost
                        return minCost

                return min( minSteps( 0 ), minSteps( 1 ) )

# Solution 2: Recursion with inbuild Python LRU cache
from functools import cache, lru_cache
from typing import List

class Solution:
        def minCostClimbingStairs(self, cost: List[int]) -> int:
                @lru_cache(None)
                def minSteps( stepIndex: int ) -> int:
                        if stepIndex >= len(cost):
                                return 0
                        return cost[stepIndex] + min( minSteps( stepIndex + 1 ), minSteps( stepIndex + 2 ) )

                return min( minSteps( 0 ), minSteps( 1 ) )

# Solution 3: SRecursion with inbuild Python caching
from typing import List

class Solution:
        def minCostClimbingStairs(self, cost: List[int]) -> int:
                @cache
                def minSteps( stepIndex: int ) -> int:
                        if stepIndex >= len(cost):
                                return 0
                        return cost[stepIndex] + min( minSteps( stepIndex + 1 ), minSteps( stepIndex + 2 ) )

                return min( minSteps( 0 ), minSteps( 1 ) )
        