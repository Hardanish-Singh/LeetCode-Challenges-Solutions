# Leetcode: https://leetcode.com/problems/n-ary-tree-postorder-traversal/

from typing import List, Optional
# from itertools import chain

# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children

# SOLUTION 1: RECURSIVE
class Solution:
        def postorder(self, root: 'Node') -> List[int]:
                if root is None:
                        return []
                # return [val for child in root.children for val in self.postorder(child)] + [root.val]
                # return list(chain.from_iterable(self.postorder(child) for child in root.children)) + [root.val]
                return sum([self.postorder(child) for child in root.children], []) + [root.val]

# SOLUTION 2: RECURSIVE USING LAMBDA FUNCTION
class Solution:
        def postorder(self, root: 'Node') -> List[int]:
                result = []
                postorderTraversal = lambda node: [postorderTraversal(child) for child in node.children] + [result.append(node.val)] if node else []
                postorderTraversal(root)
                return result

# SOLUTION 3: RECURSIVE USING INLINE LAMBDA FUNCTION
class Solution:
        def postorder(self, root: 'Node') -> List[int]:
                return (lambda node: sum([self.postorder(child) for child in node.children], []) + [node.val] if node else [])(root)

# SOLUTION 4: RECURSIVE
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


# SOLUTION 5: ITERATIVE
class Solution:
        def postorder(self, root: 'Node') -> List[int]:
                if root is None:
                        return []
                postOrderList, stack = [], [root]
                
                while stack:
                        node = stack.pop()
                        postOrderList.append(node.val)
                        stack.extend(node.children)

                return postOrderList[::-1] # Reversing the list to get the postorder traversal in the correct order.
        