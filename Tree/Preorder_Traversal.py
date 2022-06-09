# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
        Solution 1: Recursive
"""

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

"""
        Solution 2: Iterative
"""

class Solution(object):
        def preorderTraversal(self, root):
                """
                :type root: TreeNode
                :rtype: List[int]
                """

                if root is None:
                        return []

                preOrderList = []
                stack = []
                stack.append( root )
                
                while len( stack ) > 0:
                        currentNode = stack.pop()
                        preOrderList.append( currentNode.val )
                        
                        if currentNode.right:
                                stack.append( currentNode.right )
                        if currentNode.left:
                                stack.append( currentNode.left )
                
                return preOrderList