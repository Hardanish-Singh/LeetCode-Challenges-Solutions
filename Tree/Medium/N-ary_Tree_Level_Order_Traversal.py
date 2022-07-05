# Leetcode: https://leetcode.com/problems/n-ary-tree-level-order-traversal/

"""
        # Definition for a Node.
        class Node(object):
                def __init__( self, val = None, children = None ):
                        self.val = val
                        self.children = children
"""

class Solution(object):
        def levelOrder(self, root):
                """
                :type root: Node
                :rtype: List[List[int]]
                """
                if root is None:
                        return []

                queue = [ root ]
                result = [ ]

                while len( queue ) > 0:
                        temp = []
                        # GET ALL ELEMENTS FROM QUEUE
                        for node in queue:
                                temp.append( node.val )
                        result.append( temp )
                        
                        # POP ALL ELEMENTS FROM QUEUE
                        n = len( queue )
                        for i in range( n ):
                                node = queue.pop(0)
                                for child in node.children:
                                        queue.append( child )
                return result
        