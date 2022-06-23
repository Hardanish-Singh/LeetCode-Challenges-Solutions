# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right


"""
        SOLUTION 2: ITERATIVE
"""

class Solution( object ):
        def insertIntoBST( self, root, val ):
                """
                :type root: TreeNode
                :type val: int
                :rtype: TreeNode
                """
                if root is None:
                        return TreeNode( val )
                
                previousNode = None
                currentNode = root

                while currentNode:
                        previousNode = currentNode
                        if val > currentNode.val:
                                currentNode = currentNode.right
                        else:
                                currentNode = currentNode.left
                
                if val > previousNode.val:
                        previousNode.right = TreeNode ( val )
                else:
                        previousNode.left = TreeNode( val )

                return root