# Leetcode: https://leetcode.com/problems/diameter-of-binary-tree/

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
        def diameterOfBinaryTree( self, root ):
                """
                :type root: TreeNode
                :rtype: int
                """
                self.diameter = 0
                self.findDiameterOfBinaryTree( root )
                return self.diameter
        
        def findDiameterOfBinaryTree( self, root ):
                if root is None:
                        return 0

                left = self.findDiameterOfBinaryTree( root.left )
                right = self.findDiameterOfBinaryTree(  root.right )

                """
                        AT EACH NODE LEVEL, WE FIND THE DIAMETER & HEIGHT OF THAT NODE IN THE TREE
                """
                self.diameter = max( self.diameter, left + right )
                return 1 + max( left, right )

"""
        SOLUTION 2: ITERATIVE
"""

class Solution( object ):
        def diameterOfBinaryTree( self, root ):
                """
                :type root: TreeNode
                :rtype: int
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
                
                diameter = 0
                height = {

                }
                left = None
                right = None
                """
                        TRAVERSE/POP/GET THE ITEMS FROM POSTORDER LIST, WHY DO WE USE POSTORDER TRAVERSAL, SO THAT WE PROCESS LEAF FIRST ( BOTTOM UP APPROACH )
                """
                for currentNode in postOrderList:
                        if currentNode.left is None:
                                left = 0
                        else:
                                left = height[ currentNode.left ]
                        if currentNode.right is None:
                                right = 0
                        else:
                                right = height[ currentNode.right ]
                        
                        """
                                AT EACH NODE LEVEL, WE FIND THE DIAMETER & HEIGHT/DEPTH OF THAT NODE IN THE TREE
                        """
                        diameter = max( diameter, left + right )
                        height[ currentNode ] = 1 + max( left, right )

                return diameter