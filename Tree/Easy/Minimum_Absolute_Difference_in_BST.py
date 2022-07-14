# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def preorderRecursiveTraversal( root, answer ):
        if root is None:
                return None
        answer.append( root.val )
        preorderRecursiveTraversal( root.left, answer )
        preorderRecursiveTraversal( root.right, answer )
        
        
class Solution(object):
        def getMinimumDifference(self, root):
                """
                :type root: TreeNode
                :rtype: int
                """
                answer = []
                preorderRecursiveTraversal( root, answer )
                
                answer.sort()
                minimum = answer[0]
                i = 1
                length = len( answer )
                temp = []

                while i < length:
                        temp.append( answer[i] - answer[i-1] )
                        i = i + 1

                return min(temp)