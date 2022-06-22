# Leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, x ):
#         self.val = x
#         self.left = None
#         self.right = None

"""
        SOLUTION: RECURSIVE
"""

class Solution( object ):
        def lowestCommonAncestor( self, root, p, q ):
                """
                :type root: TreeNode
                :type p: TreeNode
                :type q: TreeNode
                :rtype: TreeNode
                """
                if root is None:
                        return None
                if root.val == p.val or root.val == q.val:
                        return root

                left = self.lowestCommonAncestor( root.left, p, q )
                right = self.lowestCommonAncestor( root.right, p, q )
                
                if left and right:
                        return root
                if left:
                        return left
                else:
                        return right