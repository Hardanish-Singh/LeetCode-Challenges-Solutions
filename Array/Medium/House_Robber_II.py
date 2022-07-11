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
                pass