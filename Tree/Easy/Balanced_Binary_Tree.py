# Leetcode: https://leetcode.com/problems/balanced-binary-tree/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

"""
        SOLUTION 1: RECURSIVE
"""

class Solution:
        def isBalanced(self, root: TreeNode) -> bool:
                isBalanced = True
                def dfs(node: TreeNode) -> int:
                        nonlocal isBalanced
                        if not node:
                                return 0
                        left = dfs(node.left)
                        right = dfs(node.right)
                        if abs(left - right) > 1:
                                isBalanced = False
                        return 1 + max(left, right)
                dfs(root)
                return isBalanced

"""
        SOLUTION 2: ITERATIVE
"""

class Solution( object ):
        def isBalanced( self, root ):
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
                left = None
                right = None
                for currentNode in postOrderList:
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