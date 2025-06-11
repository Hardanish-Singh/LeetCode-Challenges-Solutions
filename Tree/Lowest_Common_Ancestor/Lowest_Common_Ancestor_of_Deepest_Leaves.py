# Leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

"""
    Step 1) First do a Level Order Traversal and stores all the nodes in result array
    Step 2) Deepest Nodes is the last level of Level Order Traversal
    Step 3) Grab the first node of last level as p, and last node of last level as q
    Step 4) Perform Lowest Common Ancestor on p & q and return the answer
"""

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if root is None:
            return None
        if root == p or root == q:
            return root

        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        return root if left and right else left or right

    def lcaDeepestLeaves(self, root: TreeNode) -> TreeNode:
        queue, result = [root], []

        while queue:
            level = []
            n = len( queue )
            for i in range(n):
                node = queue.pop(0)
                level.append(node)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level)
        
        deepestNodes = result[-1]
        p = deepestNodes[0]
        q = deepestNodes[-1] if p != deepestNodes[-1] else None
        return self.lowestCommonAncestor(root, p, q)