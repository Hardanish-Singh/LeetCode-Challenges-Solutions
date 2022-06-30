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
                def helper(root):
                        if root is None:
                                return 0

                        leftSubtreeHeight = helper(root.left)
                        rightSubtreeHeight = helper(root.right)

                        if abs(leftSubtreeHeight - rightSubtreeHeight) > 1:
                                self.res = False
                                return False

                        return 1 + max(leftSubtreeHeight, rightSubtreeHeight)

                if root is None:
                        return True
                else:
                        self.res = True
                        helper(root)
                        return self.res