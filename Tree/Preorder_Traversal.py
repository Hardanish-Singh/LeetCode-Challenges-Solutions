# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def preorderRecursiveTraversal( root, answer ):
                if root is None:
                        return
                answer.append( root.val )
                preorderRecursiveTraversal( root.left, answer)
                preorderRecursiveTraversal( root.right, answer )
                
class Solution(object):
        def preorderTraversal(self, root):
                """
                :type root: TreeNode
                :rtype: List[int]
                """
                answer = []
                preorderRecursiveTraversal( root, answer )
                return answer