# Leetcode: https://leetcode.com/problems/symmetric-tree/

"""
        # Definition for a binary tree node.
        class TreeNode:
                def __init__( self, val = 0, left = None, right = None ):
                        self.val = val
                        self.left = left
                        self.right = right
"""

"""
        NOTE: left is mirror of right, and right is mirror of left,then left and right is mirror
"""

"""
        SOLUTION 1: RECURSIVE
"""
class Solution:
        def isSymmetric( self, root: TreeNode ) -> bool:
                if root is None:
                        return False
                return self.isTreeSymmetric( root.left, root.right )
        
        def isTreeSymmetric( self, left, right ):
                if left is None and right is None:
                        return True
                if left is None and right is not None or right is None and left is not None:
                        return False
                if left.val != right.val:
                        return False
                
                outterPair = self.isTreeSymmetric( left.left, right.right )
                innerPair = self.isTreeSymmetric( left.right, right.left )
                
                if outterPair and innerPair:
                        return True
                else:
                        return False

"""
        SOLUTION 2: ITERATIVE
"""
class Solution:
        def isSymmetric( self, root: TreeNode ) -> bool:
                if root is None:
                        return False
                stack = [ [ root.left, root.right ] ]

                while len( stack ) > 0:
                        leftNode, rightNode = stack.pop()
                        if leftNode is None and rightNode is None:
                                continue
                        if leftNode is None and rightNode is not None or rightNode is None and leftNode is not None:
                                return False
                        if leftNode.val != rightNode.val:
                                return False
                        else:
                                stack.append( [ leftNode.right, rightNode.left ]  )
                                stack.append( [ leftNode.left, rightNode.right ] )

                return True