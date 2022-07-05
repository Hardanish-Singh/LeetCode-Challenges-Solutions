# Leetcode: https://leetcode.com/problems/binary-tree-inorder-traversal/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

"""
        SOLUTION 1: RECURSIVE
"""

def inorderRecursiveTraversal( root, inOrderList ):
        if root is None:
                return None
        inorderRecursiveTraversal( root.left, inOrderList )
        inOrderList.append( root.val )
        inorderRecursiveTraversal( root.right, inOrderList )
        
class Solution( object ):
        def inorderTraversal( self, root ):
                """
                :type root: TreeNode
                :rtype: List[int]
                """
                inOrderList = []
                inorderRecursiveTraversal( root, inOrderList )
                return inOrderList


"""
        SOLUTION 2: RECURSIVE
"""

class Solution( object ):
        def inorderTraversal( self, root ):
                """
                :type root: TreeNode
                :rtype: List[int]
                """
                inOrderList = []
                self.inorderRecursiveTraversal( root, inOrderList )
                return inOrderList

        def inorderRecursiveTraversal( self, root, inOrderList ):
                if root is None:
                        return None
                self.inorderRecursiveTraversal( root.left, inOrderList )
                inOrderList.append( root.val )
                self.inorderRecursiveTraversal( root.right, inOrderList  )


"""
        SOLUTION 3: ITERATIVE
"""

class Solution( object ):
        def inorderTraversal( self, root ):
                """
                :type root: TreeNode
                :rtype: List[int]
                """

                if root is None:
                        return []

                inOrderList = []
                stack = []
                currentNode = root

                while len( stack ) > 0 or currentNode:
                        if currentNode:
                                stack.append( currentNode )
                                currentNode = currentNode.left
                        else:
                                currentNode = stack.pop()
                                inOrderList.append( currentNode.val )
                                currentNode = currentNode.right

                return inOrderList