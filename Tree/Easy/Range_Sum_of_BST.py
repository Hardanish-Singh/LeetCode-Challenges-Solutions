# Leetcode: https://leetcode.com/problems/range-sum-of-bst/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

class Solution:
        def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
                queue = [root]
                sum = 0
                while queue:
                        currentNode = queue.pop(0)
                        if currentNode.val >= low and currentNode.val <= high:
                                sum = sum + currentNode.val
                        if currentNode.left:
                                queue.append(currentNode.left)
                        if currentNode.right:
                                queue.append(currentNode.right)
                return sum
        