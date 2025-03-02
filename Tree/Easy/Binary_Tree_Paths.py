# Leetcode: https://leetcode.com/problems/binary-tree-paths/

from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

# SOLUTION 1: RECURSIVE
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        return [f"{root.val}->{node}" for node in (self.binaryTreePaths(root.left) if root.left else []) + (self.binaryTreePaths(root.right) if root.right else [])] or [f"{root.val}"]

# SOLUTION 2: ITERATIVE
class Solution:
        def binaryTreePaths(self, root: TreeNode) -> List[str]:
                paths, stack = [], [[root, str(root.val)]]

                while stack:
                        node, path = stack.pop()
                        if node.left is None and node.right is None:
                                paths.append( path )
                        if node.right:
                                stack.append( [ node.right, f"{path}->{node.right.val}" ] )
                        if node.left:
                                stack.append( [ node.left, f"{path}->{node.left.val}" ] )

                return paths