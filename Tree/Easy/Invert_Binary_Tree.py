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
        def invertTree(self, root):
                """
                :type root: TreeNode
                :rtype: TreeNode
                """
                if root is None:
                        return None
                
                temp = root.left
                root.left = root.right
                root.right = temp
                
                self.invertTree( root.left )
                self.invertTree( root.right )
                
                return root

"""
        SOLUTION 2:
                ITERATIVE
"""