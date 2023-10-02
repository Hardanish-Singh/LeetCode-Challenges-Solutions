# Leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

"""
        # Definition for a binary tree node.
        class TreeNode:
                def __init__( self, x ):
                        self.val = x
                        self.left = None
                        self.right = None
"""

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        currentNode = root
        while currentNode:
            if p.val > currentNode.val and q.val > currentNode.val:
                currentNode = currentNode.right
            elif p.val < currentNode.val and q.val < currentNode.val:
                currentNode = currentNode.left
            else:
                return currentNode
        