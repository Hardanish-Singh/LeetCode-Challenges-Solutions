# Leetcode: https://leetcode.com/problems/n-ary-tree-postorder-traversal/

from typing import List, Optional
# from itertools import chain

class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children

# Solution 1: RECURSIVE
class Solution:
        def postorder(self, root: 'Node') -> List[int]:
                if root is None:
                        return []
                # return [val for child in root.children for val in self.postorder(child)] + [root.val]
                # return list(chain.from_iterable(self.postorder(child) for child in root.children)) + [root.val]
                return sum([self.postorder(child) for child in root.children], []) + [root.val]

# SOLUTION 2: RECURSIVE
class Solution:
        def postorderRecursiveTraversal(self, root: Node, postOrderList: List[int]) -> List[int]:
                if root is None:
                        return []
                for child in root.children:
                        self.postorderRecursiveTraversal(child, postOrderList)
                postOrderList.append(root.val)
        def postorder(self, root: 'Node') -> List[int]:
                postOrderList = []
                self.postorderRecursiveTraversal(root, postOrderList)
                return postOrderList


# SOLUTION 3: ITERATIVE
class Solution:
        def postorder(self, root: 'Node') -> List[int]:
                if root is None:
                        return []
                postOrderList = []
                stack = [root]
                
                while stack:
                        currentNode = stack.pop()
                        postOrderList.append(currentNode.val)
                        stack.extend(child for child in currentNode.children)

                return postOrderList[::-1]
        