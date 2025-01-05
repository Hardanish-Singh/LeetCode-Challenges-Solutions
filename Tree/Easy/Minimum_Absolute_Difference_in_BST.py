# Leetcode: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

from typing import List

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# Solution 1
class Solution:
        def getMinimumDifference(self, root: TreeNode) -> int:
                preOrderList = []
                inorderTraversal = lambda node: node and (inorderTraversal(node.left), preOrderList.append(node.val), inorderTraversal(node.right))
                inorderTraversal(root)
                return min(preOrderList[i + 1] - preOrderList[i] for i in range(len(preOrderList) - 1))

# Solution 2
def preorderRecursiveTraversal(root: TreeNode, preOrderList: List[int]) -> None:
        if root is None:
                return None
        preOrderList.append(root.val)
        preorderRecursiveTraversal(root.left, preOrderList)
        preorderRecursiveTraversal(root.right, preOrderList)
        
        
class Solution:
        def getMinimumDifference(self, root: TreeNode) -> int:
                preOrderList = []
                preorderRecursiveTraversal(root, preOrderList)
                preOrderList.sort()
                return min(preOrderList[i + 1] - preOrderList[i] for i in range(len(preOrderList) - 1))