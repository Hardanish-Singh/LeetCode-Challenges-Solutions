# Leetcode: https://leetcode.com/problems/range-sum-of-bst/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# SOLUTION 1
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

# SOLUTION 2 USING DEQUE
from collections import deque
class Solution:
        def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
                queue = deque([root])
                sum = 0
                while queue:
                        currentNode = queue.popleft()
                        if currentNode.val >= low and currentNode.val <= high:
                                sum = sum + currentNode.val
                        if currentNode.left:
                                queue.append(currentNode.left)
                        if currentNode.right:
                                queue.append(currentNode.right)
                return sum

# SOLUTION 3 USING DFS
class Solution:
        def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
                if not root:
                        return 0
                if root.val < low:
                        return self.rangeSumBST(root.right, low, high)
                elif root.val > high:
                        return self.rangeSumBST(root.left, low, high)
                else:
                        return root.val + self.rangeSumBST(root.left, low, high) + self.rangeSumBST(root.right, low, high)

# SOLUTION 4 USING DFS
class Solution:
        def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
                if not root:
                        return 0
                sum = 0
                if root.val >= low and root.val <= high:
                        sum = sum + root.val
                if root.left:
                        sum = sum + self.rangeSumBST(root.left, low, high)
                if root.right:
                        sum = sum + self.rangeSumBST(root.right, low, high)
                return sum

        