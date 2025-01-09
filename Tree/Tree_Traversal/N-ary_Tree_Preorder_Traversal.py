# Leetcode: https://leetcode.com/problems/n-ary-tree-preorder-traversal/

from typing import List, Optional
# from itertools import chain

# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children


# SOLUTION 1: RECURSIVE
class Solution:
        def preorder(self, root: Node) -> List[int]:
                if root is None:
                        return []
                # return [root.val] + [val for child in root.children for val in self.preorder(child)]
                # return [root.val] + list(chain.from_iterable(self.preorder(child) for child in root.children))
                return [root.val] + sum([self.preorder(child) for child in root.children], []) #  sum(..., []) is used to concatenate lists or flattens the list of lists.

# SOLUTION 2: RECURSIVE USING LAMBDA FUNCTION
class Solution:
        def preorder(self, root: Optional[Node]) -> List[int]:
                result = []
                preorderTraversal = lambda node: [result.append(node.val)] + [preorderTraversal(child) for child in node.children] if node else []
                preorderTraversal(root)
                return result

# SOLUTION 3: RECURSIVE USING INLINE LAMBDA FUNCTION
class Solution:
        def preorder(self, root: Optional[Node]) -> List[int]:
                return (lambda node: [node.val] + sum([self.preorder(child) for child in node.children], []) if node else [])(root)

# SOLUTION 3: RECURSIVE
class Solution:
        def preorderRecursiveTraversal(self, root: Node, preOrderList: List[int]) -> List[int]:
                if root is None:
                        return []
                preOrderList.append(root.val)
                for child in root.children:
                        self.preorderRecursiveTraversal(child, preOrderList)
        def preorder(self, root: Node) -> List[int]:
                preOrderList = []
                self.preorderRecursiveTraversal(root, preOrderList)
                return preOrderList

# SOLUTION 4: ITERATIVE
class Solution:
        def preorder(self, root: Node) -> List[int]:
                if root is None:
                        return []
                preOrderList, stack = [], [root]
                
                while stack:
                        node = stack.pop()
                        preOrderList.append(node.val)
                        # stack.extend(child for child in node.children[::-1])
                        # stack.extend(node.children[::-1])
                        stack.extend(reversed(node.children)) # Reversing the list of children to get the preorder traversal in the correct order.
                
                return preOrderList
        