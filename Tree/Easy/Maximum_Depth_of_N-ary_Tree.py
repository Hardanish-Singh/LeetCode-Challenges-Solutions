# Leetcode: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

from typing import List, Optional

# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children

# SOLUTION 1: ITERATIVE BFS / LEVEL ORDER TRAVERSAL
class Solution:
        def maxDepth( self, root: Node ) -> int:
                if root is None:
                        return 0
                queue, result = [root], []

                while queue:
                        result.append(item.val for item in queue) # POP ALL ELEMENTS FROM QUEUE
                        n = len(queue)
                        for _ in range(n):
                               queue.extend(queue.pop(0).children) # POP ALL ELEMENTS FROM QUEUE AND ADD THEIR CHILDREN TO QUEUE

                return len(result)
        
# SOLUTION 2: ITERATIVE BFS / LEVEL ORDER TRAVERSAL (Using deque)
from collections import deque # deque is a double-ended queue

class Solution:
        def maxDepth( self, root: Node ) -> int:
                if root is None:
                        return 0
                queue, depth = deque([root]), 0

                while queue:
                        depth += 1
                        n = len(queue)
                        for _ in range(n):
                               queue.extend(queue.popleft().children) # POP ALL ELEMENTS FROM QUEUE AND ADD THEIR CHILDREN TO QUEUE

                return depth