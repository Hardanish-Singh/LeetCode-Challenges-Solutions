# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
        SOLUTION 1:
                RECURSIVE
"""
class Solution(object):
        def isSymmetric(self, root):
                """
                :type root: TreeNode
                :rtype: bool
                """
                if root is None:
                        return False
                return self.isTreeSymmetric( root.left, root.right )
        
        def isTreeSymmetric( self, left, right ):
                if left is None and right is None:
                        return True
                if left is None or right is None:
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
        SOLUTION 2:
                ITERATIVE
"""
        class Solution(object):
                def isSymmetric(self, root):
                        """
                        :type root: TreeNode
                        :rtype: bool
                        """
                        if root is None:
                                return False
                        stack = [ [ root.left, root.right ] ]

                        while len( stack ) > 0:
                                leftNode, rightNode = stack.pop()
                                if leftNode is None and rightNode is None:
                                        continue
                                if leftNode is None or rightNode is None:
                                        return False
                                if leftNode.val != rightNode.val:
                                        return False
                                # values of left & right node is equal
                                else:
                                        stack.append( [ leftNode.right, rightNode.left ]  )
                                        stack.append( [ leftNode.left, rightNode.right ] )
                        return True