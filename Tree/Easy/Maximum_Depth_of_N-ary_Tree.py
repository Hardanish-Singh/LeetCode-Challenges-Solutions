# Leetcode: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

# Definition for a Node.
# class Node( object ):
#         def __init__( self, val = None, children = None):
#                 self.val = val
#                 self.children = children

class Solution( object ):
        def maxDepth( self, root ):
                """
                :type root: Node
                :rtype: int
                """
                if root is None:
                        return 0

                queue = [ root ]
                result = [ ]

                while len( queue ) > 0:
                        temp = []
                        # POP ALL ELEMENTS FROM QUEUE
                        for item in queue:
                                temp.append( item.val )
                        result.append( temp )

                        n = len( queue )
                        for i in range( n ):
                                item = queue.pop(0)
                                for child in item.children:
                                        queue.append( child )

                return len( result )
        