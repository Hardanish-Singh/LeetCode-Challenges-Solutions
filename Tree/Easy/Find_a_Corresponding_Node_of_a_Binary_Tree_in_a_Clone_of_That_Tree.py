# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution( object ):
        def getTargetCopy(self, original, cloned, target):
                """
                :type original: TreeNode
                :type cloned: TreeNode
                :type target: TreeNode
                :rtype: TreeNode
                """
                queue = [ cloned ]
                while len( queue ) > 0:
                        currentNode = queue.pop(0)
                        if currentNode.val == target.val:
                                return currentNode
                        if currentNode.left:
                                queue.append( currentNode.left )
                        if currentNode.right:
                                queue.append( currentNode.right )