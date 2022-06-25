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
                stack = [ root ]
                preOrderList = [ ]

                while len( stack ) > 0:
                        currentNode = stack.pop()
                        preOrderList.append( current )

                        if currentNode.right:
                                stack.append( currentNode.right )
                        if currentNode.left:
                                stack.append( currentNode.left )
                
                diameter = 0
                height = {

                }

                """
                        TRAVERSE/POP THE ITEMS FROM PREORDERLIST IN REVERSE WAY( SO THAT IT TURNS INTO POSTORDER TRAVERSAL )
                """
                while len( preOrderList ) > 0:
                        currentNode = preOrderList.pop()
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
                        
                        """
                                AT EACH NODE LEVEL, WE FIND THE DIAMETER & HEIGHT OF THAT NODE IN THE TREE
                        """
                        diameter = max( diameter, left + right )
                        height[ currentNode ] = 1 + max( left, right )

                return diameter