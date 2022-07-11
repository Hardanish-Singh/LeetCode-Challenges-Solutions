class Solution( object ):
        def rob( self, nums ):
                """
                :type nums: List[int]
                :rtype: int
                """
                if len( nums ) == 0:
                        return 0
                
                if len( nums ) == 1:
                        return nums[ 0 ]