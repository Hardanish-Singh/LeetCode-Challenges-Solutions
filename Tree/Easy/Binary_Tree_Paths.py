# Leetcode: https://leetcode.com/problems/binary-tree-paths/

from typing import List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

# SOLUTION 1: ITERATIVE
class Solution:
        def binaryTreePaths(self, root: TreeNode) -> List[str]:
                paths, stack = [], [[root, str( root.val )]]

                while stack:
                        currentNode, path = stack.pop()
                        if currentNode.left is None and currentNode.right is None:
                                paths.append( path )
                        if currentNode.right:
                                stack.append( [ currentNode.right, path + "->" + str( currentNode.right.val ) ] )
                        if currentNode.left:
                                stack.append( [ currentNode.left, path + "->" + str( currentNode.left.val ) ] )

                return paths