# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
        def lowestCommonAncestor(self, root, p, q):
                """
                :type root: TreeNode
                :type p: TreeNode
                :type q: TreeNode
                :rtype: TreeNode
                """
                if root.val == p.val or root.val == q.val:
                        return root
                if root.left is None and root.right is None:
                        return None
                
                left = None
                right = None

                if root.left:
                        left = self.lowestCommonAncestor( root.left, p, q )
                if root.right:
                        right = self.lowestCommonAncestor( root.right, p, q )
                
                if left and right:
                        return root
                
                if left:
                        return left
                else:
                        return right