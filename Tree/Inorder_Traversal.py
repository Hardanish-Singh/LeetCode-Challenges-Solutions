# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def inorderRecursiveTraversal( root, answer ):
        if root is None:
                return
        inorderRecursiveTraversal( root.left, answer )
        answer.append( root.val )
        inorderRecursiveTraversal( root.right, answer )
        
class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        answer = []
        inorderRecursiveTraversal( root, answer )
        return answer