# Leetcode: https://leetcode.com/problems/search-in-a-binary-search-tree/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

class Solution:
        def searchBST(self, root: TreeNode, val: int) -> TreeNode:
                while root:
                        if root.val == val:
                                return root
                        root = root.left if root.val > val else root.right
                return None