# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
        def widthOfBinaryTree(self, root):
                """
                :type root: TreeNode
                :rtype: int
                """
                if root is None:
                        return 0
                width = 1
                queue = [ [ root, 1 ] ]
                
                while len( queue ) > 0:
                        temp = []
                        for item in queue:
                                node, position = item
                                if node.left:
                                        queue.append( [ node.left, 2 * position ] )
                                if node.right:
                                        queue.append( [ node.right, ( 2 * position ) + 1 ] )
                        
                        if len( temp ) > 0:
                                width = max( width, ( ( temp[-1][1] - temp[0][1] ) + 1 ) )
                        queue = temp
                
                return width