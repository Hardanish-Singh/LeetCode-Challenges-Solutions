from typing import Dict, List

class Solution:
        def minCostClimbingStairs(self, cost: List[int]) -> int:
        
                def minSteps( stepIndex: int, cache: Dict[int, int] = {} ) -> int:
                        if stepIndex in cache.keys():
                                return cache[stepIndex]
                        if stepIndex >= len(cost):
                                return 0
                        
                        minCost = min( 
                                        cost[stepIndex] + minSteps( stepIndex + 1, cache ),
                                        cost[stepIndex] + minSteps( stepIndex + 2, cache ),
                                     )
                        cache[stepIndex] = minCost
                        return minCost

        return min( minSteps( 0 ), minSteps( 1 ) )
