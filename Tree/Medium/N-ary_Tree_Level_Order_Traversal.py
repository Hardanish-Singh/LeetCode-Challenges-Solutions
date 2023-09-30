# Leetcode: https://leetcode.com/problems/n-ary-tree-level-order-traversal/

"""
        # Definition for a Node.
        class Node(object):
                def __init__( self, val = None, children = None ):
                        self.val = val
                        self.children = children
"""

class Solution:
        def levelOrder(self, root: 'Node') -> List[List[int]]:
                if root is None:
                        return []

                queue = [root]
                result = []

                while len( queue ) > 0:
                        level = []
                        n = len( queue )
                        for i in range(n):
                                node = queue.pop(0)
                                level.append(node.val)
                                for child in node.children:
                                        queue.append( child )
                                
                        result.append(level)
                
                return result