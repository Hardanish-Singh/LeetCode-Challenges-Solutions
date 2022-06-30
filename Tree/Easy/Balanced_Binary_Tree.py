# Leetcode: https://leetcode.com/problems/balanced-binary-tree/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

"""
        SOLUTION 1: RECURSIVE
"""

class Solution( object ):
        def isBalanced( self, root ):
                """
                :type root: TreeNode
                :rtype: bool
                """
                if root is None:
                        return True

                self.result = True
                self.isTreeBalanced( root )
                return self.result

        def isTreeBalanced( self, root ):
                if root is None:
                        return 0
                
                left = self.isTreeBalanced( root.left )
                right = self.isTreeBalanced( root.right )

                if abs( left - right ) > 1:
                        self.result = False
                        return self.result
                
                return 1 + max( left, right )

"""
        SOLUTION 2: ITERATIVE
"""


class Solution(object):
        def isBalanced(self, root):
                """
                :type root: TreeNode
                :rtype: bool
                """
                def postorderTraversal( root ):
                        postOrderList = []
                        stack = [ root ]

                        while len( stack ) > 0:
                                currentNode = stack.pop()
                                if currentNode:
                                        postOrderList.append( currentNode )
                                        stack.append( currentNode.left )
                                        stack.append( currentNode.right )

                        return postOrderList[::-1]

                postOrderList = postorderTraversal(root)

                height = {
                        
                }
                
                for currentNode in postOrderList:
                        left = None
                        right = None
                        if currentNode.left is None:
                                left = 0
                        else:
                                left = height[ currentNode.left ]
                        if currentNode.right is None:
                                right = 0
                        else:
                                right = height[ currentNode.right ]
                        
                        if abs( left - right ) > 1:
                                return False
                        
                        height[ currentNode ] = 1 + max( left, right )

                return True