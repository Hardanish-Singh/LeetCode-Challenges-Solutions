# Leetcode: https://leetcode.com/problems/binary-tree-level-order-traversal/

from typing import List

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# Solution 1
class Solution:
        def levelOrder(self, root: TreeNode) -> List[List[int]]:
                if root is None:
                        return []
                queue, result = [root], []

                while queue:
                        level, n = [], len(queue)
                        for _ in range(n):
                                node = queue.pop(0)
                                level.append(node.val)
                                if node.left:
                                        queue.append(node.left)
                                if node.right:
                                        queue.append(node.right)
                        result.append(level)
                
                return result
        
# Solution 2
from collections import deque # deque is a double-ended queue

class Solution:
        def levelOrder(self, root: TreeNode) -> List[List[int]]:
                if root is None:
                        return []
                queue, result = deque([root]), []

                while queue:
                        level, n = [], len(queue)
                        for _ in range(n):
                                node = queue.popleft()
                                level.append(node.val)
                                if node.left:
                                        queue.append(node.left)
                                if node.right:
                                        queue.append(node.right)
                        result.append(level)
                
                return result