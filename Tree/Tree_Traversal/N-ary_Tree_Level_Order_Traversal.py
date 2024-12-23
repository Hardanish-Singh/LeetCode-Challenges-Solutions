# Leetcode: https://leetcode.com/problems/n-ary-tree-level-order-traversal/

from typing import List, Optional

class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val = val
        self.children = children

# Solution 1: RECURSIVE
class Solution:
    def levelOrder(self, root: Node) -> List[List[int]]:
        def traverse(node, level):
            if node is None:
                return []
            if len(result) == level:
                result.append([])
            result[level].append(node.val)
            for child in node.children:
                traverse(child, level + 1)
        
        result = []
        traverse(root, 0)
        return result

# Solution 2: ITERATIVE
class Solution:
        def levelOrder(self, root: Node) -> List[List[int]]:
                if root is None:
                        return []
                queue, result = [root], []

                while queue:
                        level, n = [], len(queue)
                        for i in range(n):
                                node = queue.pop(0)
                                level.append(node.val)
                                # queue.extend(child for child in node.children)
                                queue.extend(node.children)
                        result.append(level)
                
                return result