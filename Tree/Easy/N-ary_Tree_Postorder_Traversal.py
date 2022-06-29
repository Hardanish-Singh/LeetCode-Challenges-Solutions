"""
        # Definition for a Node.
        class Node(object):
                def __init__( self, val = None, children = None ):
                        self.val = val
                        self.children = children
"""

class Solution(object):
        def postorder(self, root):
                """
                :type root: Node
                :rtype: List[int]
                """
                if root is None:
                        return []
        
                postOrderList = []
                stack = [ root ]
                
                while len( stack ) > 0:
                        currentNode = stack.pop()
                        postOrderList.append( currentNode.val )

                        for child in currentNode.children:
                                stack.append( child )

                return postOrderList[::-1]
        