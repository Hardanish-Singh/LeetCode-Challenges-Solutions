# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
        def isSymmetric(self, root):
                """
                :type root: TreeNode
                :rtype: bool
                """
                return self.test( root.left, root.right )
        
        def test( self, left, right ):
                if left is None and right is None:
                        return True
                if left is None or right is None:
                        return False
                if left.val != right.val:
                        return False
                outterPair = self.test( left.left, right.right )
                innerPair = self.test( left.right, right.left )
                if outterPair and innerPair:
                        return True