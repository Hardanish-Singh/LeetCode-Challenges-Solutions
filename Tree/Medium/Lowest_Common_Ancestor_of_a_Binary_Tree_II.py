# Leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, x ):
#         self.val = x
#         self.left = None
#         self.right = None

"""
        SOLUTION 1: RECURSIVE
"""

class Solution( object ):
        def lowestCommonAncestor( self, root, p, q ):
                """
                :type root: TreeNode
                :type p: TreeNode
                :type q: TreeNode
                :rtype: TreeNode
                """
                self.pFound = False
                self.qFound = False

                result = self.findLowestCommonAncestor( root, p, q )

                if self.pFound and self.qFound:
                        return result
                else:
                        return None
        
        def findLowestCommonAncestor( self, root, p, q ):
                if root is None:
                        return None
                
                left = self.findLowestCommonAncestor( root.left, p, q )
                right = self.findLowestCommonAncestor( root.right, p, q )
                
                if root.val == p.val:
                        self.pFound = True
                        return root
                if root.val == q.val:
                        self.qFound = True
                        return root
                
                if left and right:
                        return root
                if left:
                        return left
                else:
                        return right