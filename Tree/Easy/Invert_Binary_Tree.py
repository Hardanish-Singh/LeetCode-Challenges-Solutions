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
                
                root.right, root.left = root.left, root.right
                
                self.invertTree( root.left )
                self.invertTree( root.right )
                
                return root

"""
        SOLUTION 2:
                ITERATIVE
"""

class Solution(object):
        def invertTree(self, root):
                """
                :type root: TreeNode
                :rtype: TreeNode
                """
                if root is None:
                        return None
                queue = [ root ]
                
                # POP ALL ELEMENTS FROM QUEUE
                while len( queue ) > 0:
                        n = len( queue )
                        for i in range( n ):
                                node = queue.pop(0)
                                node.right, node.left = node.left, node.right
                                if node.left:
                                        queue.append( node.left )
                                if node.right:
                                        queue.append( node.right )
                
                return root