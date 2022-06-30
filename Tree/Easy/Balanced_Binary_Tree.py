# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
        def isBalanced(self, root):
                """
                :type root: TreeNode
                :rtype: bool
                """
                if root is None:
                        return True

                self.result = True
                self.isTreeBalanced( root )
                return self.result

        def isTreeBalanced( self, root ):
                if root is None:
                        return 0
                
                left = self.isTreeBalanced( root.left )
                right = self.isTreeBalanced( root.right )

                if abs( left - right ) > 1:
                        self.result = False
                        return self.result
                
                return 1 + max( left, right )