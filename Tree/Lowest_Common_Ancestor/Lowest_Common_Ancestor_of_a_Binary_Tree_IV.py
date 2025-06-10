# Leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/

from typing import List

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, x: int) -> None:
                self.val = x
                self.left = None
                self.right = None

class Solution:
        def findLowestCommonAncestor(self, root: TreeNode, s: List[TreeNode]) -> TreeNode:
                if root is None:
                        return None
                if root.val in s:
                        return root

                left = self.findLowestCommonAncestor(root.left, s)
                right = self.findLowestCommonAncestor(root.right, s)

                return root if left and right else left or right

        def lowestCommonAncestor(self, root: TreeNode, nodes: List[TreeNode]) -> TreeNode:
                s = [node.val for node in nodes]
                return self.findLowestCommonAncestor(root, s)
