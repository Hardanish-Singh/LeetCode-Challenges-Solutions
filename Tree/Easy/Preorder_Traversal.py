# Leetcode: https://leetcode.com/problems/binary-tree-preorder-traversal/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

"""
        SOLUTION 1: RECURSIVE
"""

def preorderRecursiveTraversal( root, preOrderList ):
                if root is None:
                        return None
                preOrderList.append( root.val )
                preorderRecursiveTraversal( root.left, preOrderList )
                preorderRecursiveTraversal( root.right, preOrderList )
                
class Solution(object):
        def preorderTraversal(self, root):
                """
                :type root: TreeNode
                :rtype: List[int]
                """
                preOrderList = []
                preorderRecursiveTraversal( root, preOrderList )
                return preOrderList

"""
        SOLUTION 2: RECURSIVE
"""

class Solution(object):
        def preorderTraversal(self, root):
                return self.preorderRecursiveTraversal( root, [] )
        
        def preorderRecursiveTraversal( self, root, preOrderList ):
                if root is None:
                        return None
                preOrderList.append( root.val )
                self.preorderRecursiveTraversal( root.left, preOrderList )
                self.preorderRecursiveTraversal( root.right, preOrderList )
                return preOrderList

"""
        SOLUTION 3: ITERATIVE
"""

class Solution(object):
        def preorderTraversal(self, root):
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
                        
                        if currentNode.right:
                                stack.append( currentNode.right )
                        if currentNode.left:
                                stack.append( currentNode.left )
                
                return preOrderList