# Leetcode: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

def preorderRecursiveTraversal( root, preOrderList ):
        if root is None:
                return None
        preOrderList.append( root.val )
        preorderRecursiveTraversal( root.left, preOrderList )
        preorderRecursiveTraversal( root.right, preOrderList )
        
        
class Solution( object ):
        def getMinimumDifference( self, root ):
                """
                :type root: TreeNode
                :rtype: int
                """
                preOrderList = []
                preorderRecursiveTraversal( root, preOrderList )
                
                preOrderList.sort()
                return min(preOrderList[i + 1] - preOrderList[i] for i in range(len(preOrderList) - 1))