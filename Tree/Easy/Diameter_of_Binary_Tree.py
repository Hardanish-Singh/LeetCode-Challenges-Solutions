# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution( object ):
        def diameterOfBinaryTree( self, root ):
                """
                :type root: TreeNode
                :rtype: int
                """
                self.diameter = 0
                self.findDiameterOfBinaryTree( root )
                return self.diameter
        
        def findDiameterOfBinaryTree( self, root ):
                if root is None:
                        return 0
                left = self.findDiameterOfBinaryTree( root.left )
                right = self.findDiameterOfBinaryTree(  root.right )

                