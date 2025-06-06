# Leetcode: https://leetcode.com/problems/sum-of-left-leaves/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

class Solution:
        def sumOfLeftLeaves(self, root: TreeNode) -> int:
                if root is None:
                        return 0
                total, stack = 0, [root]

                while stack:
                        node = stack.pop()
                        if node.left:
                                if node.left.left is None and node.left.right is None:
                                        total += node.left.val
                                else:
                                        stack.append(node.left)
                        if node.right:
                                stack.append(node.right)

                return total