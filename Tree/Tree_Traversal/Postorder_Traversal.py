# Leetcode: https://leetcode.com/problems/binary-tree-postorder-traversal/

from typing import List

class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

"""
        SOLUTION 1: RECURSIVE
"""

class Solution:
        def postorderRecursiveTraversal(self, root: 'TreeNode', postOrderList: List[int]) -> List[int]:
                if root is None:
                        return None
                self.postorderRecursiveTraversal(root.left, postOrderList)
                self.postorderRecursiveTraversal(root.right, postOrderList)
                postOrderList.append(root.val)
        def postorderTraversal(self, root: 'TreeNode') -> List[int]:
                postOrderList = []
                self.postorderRecursiveTraversal(root, postOrderList)
                return postOrderList

"""
        SOLUTION 2: RECURSIVE
"""

def postorderRecursiveTraversal(root: 'TreeNode', postOrderList: List[int]) -> List[int]:
        if root is None:
                return None
        postorderRecursiveTraversal(root.left, postOrderList)
        postorderRecursiveTraversal(root.right, postOrderList)
        postOrderList.append(root.val)
        
class Solution:
        def postorderTraversal(self, root: 'TreeNode') -> List[int]:
                postOrderList = []
                postorderRecursiveTraversal(root, postOrderList)
                return postOrderList


"""
        SOLUTION 3: ITERATIVE
"""

class Solution:
        def postorderTraversal(self, root: 'TreeNode') -> List[int]:
                postOrderList = []
                stack = [root]

                while stack:
                        currentNode = stack.pop()
                        if currentNode:
                                postOrderList.append(currentNode.val)
                                stack.append(currentNode.left)
                                stack.append(currentNode.right)

                return postOrderList[::-1]