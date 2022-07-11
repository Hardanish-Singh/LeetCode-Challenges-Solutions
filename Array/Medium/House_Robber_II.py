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
                        return max( nums[1:], nums[:-1] )
        
        def robHouses( self, nums ):
                if len( nums ) == 0:
                        return 0
                elif len( nums ) == 1:
                        return 1:
                else:
                        dp = [0] * len( nums )
                        dp[0] = nums[0]
                        dp[1] = max( nums[0], nums[1] )
                        for i in range( 2, len( nums ) ):
                                dp[ i ] = max( dp[ i - 1 ], nums[ i ] + dp[ i - 2 ] )
                        return dp[-1] 