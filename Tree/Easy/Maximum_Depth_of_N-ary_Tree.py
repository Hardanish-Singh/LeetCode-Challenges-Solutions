# Leetcode: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

# Definition for a Node.
# class Node:
#         def __init__( self, val = None, children = None):
#                 self.val = val
#                 self.children = children

class Solution:
        def maxDepth( self, root: 'Node' ) -> int:
                if root is None:
                        return 0
                queue = [root]
                result = []

                while queue:
                        result.append( item.val for item in queue ) # POP ALL ELEMENTS FROM QUEUE
                        n = len(queue)
                        for i in range(n):
                                item = queue.pop(0)
                                queue += [ child for child in item.children ]

                return len(result)