# Leetcode: https://leetcode.com/problems/path-sum/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

"""
        SOLUTION 1
"""
class Solution:
        def hasPathSum( self, root: TreeNode, targetSum: int ) -> bool:
                if root is None:
                        return False
                paths = [ ]
                stack = [ [ root, str( root.val ) ]  ]

                while len( stack ) > 0:
                        currentNode, path = stack.pop()
                        if currentNode.left is None and currentNode.right is None:
                                paths.append( path )
                        if currentNode.right:
                                stack.append( [ currentNode.right, path + "->" + str( currentNode.right.val ) ] )
                        if currentNode.left:
                                stack.append( [ currentNode.left, path + "->" + str( currentNode.left.val ) ] )

                for path in paths:
                        temp = map(int, path.split("->") )
                        if sum( temp ) == targetSum:
                                return True
                
                return False

"""
        SOLUTION 2
"""
class Solution:
        def hasPathSum( self, root: TreeNode, targetSum: int ) -> bool:
                if root is None:
                        return False
                
                stack = [ [ root, targetSum - root.val ]  ]
                
                while len( stack ) > 0:
                        currentNode, pathSum = stack.pop()
                        if currentNode.left is None and currentNode.right is None and pathSum == 0:
                                return True
                        if currentNode.right:
                                stack.append( [ currentNode.right, pathSum - currentNode.right.val ] )
                        if currentNode.left:
                                stack.append( [ currentNode.left, pathSum - currentNode.left.val ] )
                
                return False