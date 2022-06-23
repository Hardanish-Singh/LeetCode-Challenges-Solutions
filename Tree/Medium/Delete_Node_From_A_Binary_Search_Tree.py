# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution(object):
        def deleteNode(self, root, key):
                """
                :type root: TreeNode
                :type key: int
                :rtype: TreeNode
                """
                if root is None:
                        return None
                