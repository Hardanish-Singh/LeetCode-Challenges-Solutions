# Leetcode: https://leetcode.com/problems/maximum-width-of-binary-tree/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

class Solution:
        def widthOfBinaryTree(self, root: TreeNode) -> int:
                if root is None:
                        return 0

                width, queue = 0, [[root, 1]]
                
                while len( queue ) > 0:
                        temp = []
                        for item in queue:
                                node, position = item
                                if node.left:
                                        temp.append( [ node.left, 2 * position ] )
                                if node.right:
                                        temp.append( [ node.right, ( 2 * position ) + 1 ] )
                        
                        if len( temp ) > 0:
                                width = max( width, ( ( temp[-1][1] - temp[0][1] ) + 1 ) )
                        queue = temp
                
                return width