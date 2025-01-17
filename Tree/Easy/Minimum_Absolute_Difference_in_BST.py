# Leetcode: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

from typing import List

# Definition for a binary tree node. 
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# SOLUTION 1: USING InderOrder TRAVERSAL
class Solution:
        def getMinimumDifference(self, root: TreeNode) -> int:
                inorderTraversalList = []
                inorderTraversal = lambda node: node and (inorderTraversal(node.left), inorderTraversalList.append(node.val), inorderTraversal(node.right))
                inorderTraversal(root)
                return min(inorderTraversalList[i + 1] - inorderTraversalList[i] for i in range(len(inorderTraversalList) - 1))

def preorderRecursiveTraversal(root: TreeNode, preOrderList: List[int]) -> None:
        if root is None:
                return None
        preOrderList.append(root.val)
        preorderRecursiveTraversal(root.left, preOrderList)
        preorderRecursiveTraversal(root.right, preOrderList)
       
# SOLUTION 2: USING PreOrder TRAVERSAL
class Solution:
        def getMinimumDifference(self, root: TreeNode) -> int:
                preOrderList = []
                preorderRecursiveTraversal(root, preOrderList)
                preOrderList.sort()
                return min(preOrderList[i + 1] - preOrderList[i] for i in range(len(preOrderList) - 1))