# Leetcode: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

from typing import List, Optional

# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children

# Solution 1
class Solution:
        def maxDepth( self, root: 'Node' ) -> int:
                if root is None:
                        return 0
                queue, result = [root], []

                while queue:
                        result.append(item.val for item in queue) # POP ALL ELEMENTS FROM QUEUE
                        n = len(queue)
                        for i in range(n):
                               queue.extend(queue.pop(0).children) # POP ALL ELEMENTS FROM QUEUE AND ADD THEIR CHILDREN TO QUEUE

                return len(result)
        
# Solution 2
from collections import deque # deque is a double-ended queue

class Solution:
        def maxDepth( self, root: 'Node' ) -> int:
                if root is None:
                        return 0
                queue, result = deque([root]), []

                while queue:
                        result.append(item.val for item in queue) # POP ALL ELEMENTS FROM QUEUE
                        n = len(queue)
                        for i in range(n):
                               queue.extend(queue.popleft().children) # POP ALL ELEMENTS FROM QUEUE AND ADD THEIR CHILDREN TO QUEUE

                return len(result)