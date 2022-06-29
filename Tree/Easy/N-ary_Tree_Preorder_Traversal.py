"""
        # Definition for a Node.
        class Node(object):
                def __init__( self, val = None, children = None ):
                        self.val = val
                        self.children = children
"""

class Solution( object ):
        def preorder( self, root ):
                """
                :type root: TreeNode
                :rtype: List[int]
                """

                if root is None:
                        return []

                preOrderList = []
                stack = [ root ]
                
                while len( stack ) > 0:
                        currentNode = stack.pop()
                        preOrderList.append( currentNode.val )
                        
                        for child in currentNode.children[::-1]:
                                stack.append( child )
                
                return preOrderList
        