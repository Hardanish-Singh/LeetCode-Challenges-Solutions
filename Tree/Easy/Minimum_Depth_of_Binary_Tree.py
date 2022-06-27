# Leetcode: https://leetcode.com/problems/minimum-depth-of-binary-tree/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right


"""
        SOLUTION 1: RECURSIVE SOLUTION
"""

class Solution( object ):
        def minDepth( self, root ):
                """
                :type root: TreeNode
                :rtype: int
                """
                # BASE CASE
                if root is None:
                        return 0
                # IF THERE IS ONLY LEFT CHILD, THEN WE GET ITS DEPTH
                if root.left and root.right is None:
                        return 1 + self.minDepth( root.left )
                # IF THERE IS ONLY RIGHT CHILD, THEN WE GET ITS DEPTH
                elif root.right and root.left is None:
                        return 1 + self.minDepth( root.right )
                # WHEN BOTH LEFT AND RIGHT CHILD EXISTS
                else:
                        return 1 + min( self.minDepth( root.right ), self.minDepth( root.left ) )


"""
        SOLUTION 2: ITERATIVE BFS / LEVEL ORDER TRAVERSAL
"""

class Solution( object ):
        def minDepth( self, root ):
                """
                :type root: TreeNode
                :rtype: int
                """
                if root is None:
                        return 0

                queue = [ root ]
                result = [ ]
                count = 1

                while len( queue ) > 0:
                        temp = []
                        # POP ALL ELEMENTS FROM QUEUE
                        for item in queue:
                                temp.append( item.val )
                        result.append( temp )

                        n = len( queue )
                        for i in range( n ):
                                item = queue.pop(0)
                                if item.left is None and item.right is None:
                                        return count
                                if item.left:
                                        queue.append( item.left )
                                if item.right:
                                        queue.append( item.right )

                        count = count + 1

        