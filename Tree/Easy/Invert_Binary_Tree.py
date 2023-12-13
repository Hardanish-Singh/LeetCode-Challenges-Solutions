# Leetcode: https://leetcode.com/problems/invert-binary-tree/

"""
        # Definition for a binary tree node.
        class TreeNode(object):
                def __init__(self, val = 0, left = None, right = None):
                        self.val = val
                        self.left = left
                        self.right = right
"""

"""
        SOLUTION 1: RECURSIVE
"""

class Solution:
        def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
                if root is None:
                        return None
                root.right, root.left = root.left, root.right
                self.invertTree(root.left)
                self.invertTree(root.right)
                return root

"""
        SOLUTION 2: ITERATIVE
"""

class Solution:
        def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
                if root is None:
                        return None
                queue = [root]
                
                while queue:
                        n = len(queue)
                        for i in range(n):
                                node = queue.pop(0)
                                node.right, node.left = node.left, node.right
                                if node.left:
                                        queue.append(node.left)
                                if node.right:
                                        queue.append(node.right)
                
                return root