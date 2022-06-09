# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def postorderRecursiveTraversal( root, answer ):
        if root is None:
                return
        postorderRecursiveTraversal( root.left, answer )
        postorderRecursiveTraversal( root.right, answer )
        answer.append( root.val )
        
class Solution(object):
        def postorderTraversal(self, root):
                """
                :type root: TreeNode
                :rtype: List[int]
                """
                answer = []
                postorderRecursiveTraversal( root, answer )
                return answer