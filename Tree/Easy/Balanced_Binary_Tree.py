# Leetcode: https://leetcode.com/problems/balanced-binary-tree/

"""
A height-balanced binary tree is defined as a binary tree where the difference in height between the left and right subtrees of any node is at most 1. The height of a tree is the number of edges on the longest path from the root to any leaf node.

To determine if a binary tree is height-balanced, we need to check two conditions for every node:

        1) The left subtree and right subtree must be balanced.
        2) The height difference between the left and right subtrees should not exceed 1.
If both conditions hold true for all nodes, then the tree is height-balanced.
"""

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# SOLUTION 1: RECURSIVE
class Solution:
        def isBalanced(self, root: TreeNode) -> bool:
                isBalanced = True
                def dfs(node: TreeNode) -> int:
                        nonlocal isBalanced # Declares that the isBalanced variable from the outer scope will be used within this function.
                        if node is None:
                                return 0
                        left = dfs(node.left) # Recursively calculates the height of the left subtree.
                        right = dfs(node.right) # Recursively calculates the height of the right subtree.
                        # If the absolute difference between the heights of the left and right subtrees is more than 1, then the tree is not balanced.
                        if abs(left - right) > 1:
                                isBalanced = False
                        # Returns the height of the subtree rooted at the current node, which is 1 plus the maximum of the heights of the left and right subtrees.
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