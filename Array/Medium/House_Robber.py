class Solution(object):
        def rob(self, nums):
                """
                :type nums: List[int]
                :rtype: int
                """
                if len( nums ) == 0:
                        return 0

                if len( nums ) == 1: 
                        return nums[ 0 ]
                
                dp = nums
                dp[ 1 ] = max( nums[0], nums[1] )

                for i in range( 2, len( nums ) ):
                        dp[ i ] = max( dp[ i - 1 ], nums[ i ] + dp[ i - 2 ] )

                return dp[ -1 ]