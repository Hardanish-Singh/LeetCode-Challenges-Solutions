# Leetcode: https://leetcode.com/problems/binary-tree-postorder-traversal/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

"""
        SOLUTION 1: RECURSIVE
"""

def postorderRecursiveTraversal( root, postOrderList ):
        if root is None:
                return None
        postorderRecursiveTraversal( root.left, postOrderList )
        postorderRecursiveTraversal( root.right, postOrderList )
        postOrderList.append( root.val )
        
class Solution( object ):
        def postorderTraversal( self, root ):
                """
                :type root: TreeNode
                :rtype: List[int]
                """
                postOrderList = []
                postorderRecursiveTraversal( root, postOrderList )
                return postOrderList

"""
        SOLUTION 2: RECURSIVE
"""

class Solution( object ):
        def postorderTraversal( self, root ):
                """
                :type root: TreeNode
                :rtype: List[int]
                """
                return self.postorderRecursiveTraversal( root, [] )
        
        def postorderRecursiveTraversal( self, root, postOrderList  ):
                if root is None:
                        return None
                self.postorderRecursiveTraversal( root.left, postOrderList )
                self.postorderRecursiveTraversal( root.right, postOrderList )
                postOrderList.append( root.val )
                return postOrderList


"""
        SOLUTION 3: ITERATIVE
"""

class Solution( object ):
        def postorderTraversal( self, root ):
                postOrderList = []
                stack = [ root ]
                while len( stack ) > 0:
                        currentNode = stack.pop()
                        if currentNode:
                                postOrderList.append(currentNode.val)
                                stack.append(currentNode.left)
                                stack.append(currentNode.right)
                return postOrderList[::-1]