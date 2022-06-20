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
                currentNode = root
                while currentNode:
                        if p.val > currentNode.val and q.val > currentNode.val:
                                currentNode = currentNode.right
                        elif p.val < currentNode.val and q.val < currentNode.val:
                                currentNode = currentNode.left
                        else:
                                return currentNode