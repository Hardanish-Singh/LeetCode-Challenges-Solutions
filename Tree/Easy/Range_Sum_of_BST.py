# Leetcode: https://leetcode.com/problems/range-sum-of-bst/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution( object ):
        def rangeSumBST( self, root, low, high ):
                """
                :type root: TreeNode
                :type low: int
                :type high: int
                :rtype: int
                """
                queue = [ root ]
                sum = 0
                while len( queue ) > 0:
                        currentNode = queue.pop(0)
                        if currentNode.val >= low and currentNode.val <= high:
                                sum = sum + currentNode.val
                        if currentNode.left:
                                queue.append( currentNode.left )
                        if currentNode.right:
                                queue.append( currentNode.right )
                return sum
        