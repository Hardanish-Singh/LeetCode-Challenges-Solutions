"""
        You are a professional robber planning to rob houses along a street. 
        Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. 
        That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, 
        and it will automatically contact the police if two adjacent houses were broken into on the same night.

        Given an integer array nums representing the amount of money of each house, 
        return the maximum amount of money you can rob tonight without alerting the police.

        Example 1:
                Input: nums = [2,3,2]
                Output: 3
                Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
        
        Example 2:
                Input: nums = [1,2,3,1]
                Output: 4
                Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
                Total amount you can rob = 1 + 3 = 4.
        
        Example 3:
                Input: nums = [1,2,3]
                Output: 3
        
        Constraints:
                1) 1 <= nums.length <= 100
                2) 0 <= nums[i] <= 1000
"""

class Solution( object ):
        def rob( self, nums ):
                """
                :type nums: List[int]
                :rtype: int
                """
                if len( nums ) == 0:
                        return 0
                
                elif len( nums ) == 1:
                        return nums[ 0 ]
                
                else:
                        # This problem is exactly the House Robber part I problem with a variation that here there can be two possibilites-
                        # 1) Rob last house and skip the first house  
                        # 2) Rob first house and skip last house
                        return max( self.robHouses( nums[1:] ), self.robHouses( nums[:-1] ) )
        
        def robHouses( self, nums ):
                if len( nums ) == 0:
                        return 0
                elif len( nums ) == 1:
                        return nums[0]
                else:
                        dp = [0] * len( nums )
                        dp[0] = nums[0]
                        dp[1] = max( nums[0], nums[1] )
                        for i in range( 2, len( nums ) ):
                                dp[ i ] = max( dp[ i - 1 ], nums[ i ] + dp[ i - 2 ] )
                        return dp[-1] 