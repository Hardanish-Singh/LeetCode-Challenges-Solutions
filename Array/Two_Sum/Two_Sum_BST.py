# Leetcode: https://leetcode.com/problems/two-sum-bsts/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution( object ):
        def preorderRecursiveTraversal( self, root, preOrderList ):
                if root is None:
                        return None
                preOrderList.append( root.val )
                self.preorderRecursiveTraversal( root.left, preOrderList )
                self.preorderRecursiveTraversal( root.right, preOrderList )
                
        def twoSumBSTs( self, root1, root2, target ):
                """
                :type root1: TreeNode
                :type root2: TreeNode
                :type target: int
                :rtype: bool
                """
                if root1 is None or root2 is None:
                        return None

                preOrderList1 = []
                self.preorderRecursiveTraversal( root1, preOrderList1 )
                
                preOrderList1 = list( set( preOrderList1 ) )
                hash_table = dict.fromkeys(preOrderList1, True)
                
                preOrderList2 = []
                self.preorderRecursiveTraversal( root2, preOrderList2 )
                
                for i in range( 0, len( preOrderList2 ) ):
                        difference = target - preOrderList2[ i ]
                        if difference in hash_table:
                                return True
                        else:
                                hash_table[ preOrderList2[ i ] ] = True
                
                return False