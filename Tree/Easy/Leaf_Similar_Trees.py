# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
        def leafSimilar(self, root1, root2):
                """
                :type root1: TreeNode
                :type root2: TreeNode
                :rtype: bool
                """
                treeOneLeafs = self.fetchLeafs( [ root1 ] )
                treeTwoLeafs = self.fetchLeafs( [ root2 ] )
                return True if treeOneLeafs == treeTwoLeafs else False

        def fetchLeafs( self, stack ):
                leafs = [ ]
                while len( stack ) > 0:
                        currentNode= stack.pop()
                        if currentNode.left is None and currentNode.right is None:
                                leafs.append( currentNode.val )
                        if currentNode.right:
                                stack.append( currentNode.right )
                        if currentNode.left:
                                stack.append( currentNode.left )
                return leafs