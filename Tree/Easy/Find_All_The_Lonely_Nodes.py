# Leetcode: https://leetcode.com/problems/find-all-the-lonely-nodes/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution( object ):
        def getLonelyNodes( self, root ):
                """
                :type root: TreeNode
                :rtype: List[int]
                """
                lonelyNode = []
                queue = [ root ]

                while len( queue ) > 0:
                        currentNode = queue.pop(0)
                        if currentNode.left and currentNode.right is None:
                                lonelyNode.append( currentNode.left.val )
                        elif currentNode.right and currentNode.left is None:
                                lonelyNode.append( currentNode.right.val )
                        if currentNode.left:
                                queue.append( currentNode.left )
                        if currentNode.right:
                                queue.append( currentNode.right )

                return lonelyNode