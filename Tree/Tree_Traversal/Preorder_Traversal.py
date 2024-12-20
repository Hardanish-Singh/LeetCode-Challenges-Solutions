# Leetcode: https://leetcode.com/problems/binary-tree-preorder-traversal/

from typing import List

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

"""
        SOLUTION 1: RECURSIVE
"""
class Solution:
        def preorderRecursiveTraversal(self, root: 'TreeNode', preOrderList: List[int]) -> List[int]:
                if root is None:
                        return None
                preOrderList.append(root.val)
                self.preorderRecursiveTraversal(root.left, preOrderList)
                self.preorderRecursiveTraversal(root.right, preOrderList)
        def preorderTraversal(self, root: 'TreeNode') -> List[int]:
                preOrderList = []
                self.preorderRecursiveTraversal(root, preOrderList)
                return preOrderList


"""
        SOLUTION 2: RECURSIVE
"""
def preorderRecursiveTraversal(root: 'TreeNode', preOrderList: List[int]) -> List[int]:
                if root is None:
                        return None
                preOrderList.append(root.val)
                preorderRecursiveTraversal(root.left, preOrderList)
                preorderRecursiveTraversal(root.right, preOrderList)
class Solution:
        def preorderTraversal(self, root: 'TreeNode') -> List[int]:
                preOrderList = []
                preorderRecursiveTraversal(root, preOrderList)
                return preOrderList

"""
        SOLUTION 3: ITERATIVE
"""
class Solution:
        def preorderTraversal(self, root: 'TreeNode') -> List[int]:
                if root is None:
                        return []
                stack, preOrderList = [root], []
                
                while stack:
                        node = stack.pop()
                        if node:
                                preOrderList.append(node.val)
                                if node.right:
                                        stack.append(node.right)
                                if node.left:
                                        stack.append(node.left)
                
                return preOrderList