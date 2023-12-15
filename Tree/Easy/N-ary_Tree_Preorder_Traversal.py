# Leetcode: https://leetcode.com/problems/n-ary-tree-preorder-traversal/

"""
        # Definition for a Node.
        class Node:
                def __init__(self, val = None, children = None):
                        self.val = val
                        self.children = children
"""

"""
        SOLUTION 1: RECURSIVE
"""

class Solution:
        def preorderRecursiveTraversal(self, root: 'Node', preOrderList: List[int]) -> List[int]:
                if root is None:
                        return None
                preOrderList.append(root.val)
                for child in root.children:
                        self.preorderRecursiveTraversal(child, preOrderList)
        def preorder(self, root: 'Node') -> List[int]:
                preOrderList = []
                self.preorderRecursiveTraversal(root, preOrderList)
                return preOrderList

"""
        SOLUTION 2: ITERATIVE
"""

class Solution:
        def preorder(self, root: 'Node') -> List[int]:
                if root is None:
                        return []
                preOrderList = []
                stack = [root]
                
                while stack:
                        currentNode = stack.pop()
                        preOrderList.append(currentNode.val)
                        stack.extend(child for child in currentNode.children[::-1])
                
                return preOrderList
        