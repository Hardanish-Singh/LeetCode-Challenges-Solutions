# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


"""
        SOLUTION 1:
                RECURSIVE DFS
"""
class Solution(object):
        def maxDepth(self, root):
                """
                :type root: TreeNode
                :rtype: int
                """
                
                if root is None:
                        return 0
                
                return 1 + max( self.maxDepth( root.left ), self.maxDepth( root.right ) )