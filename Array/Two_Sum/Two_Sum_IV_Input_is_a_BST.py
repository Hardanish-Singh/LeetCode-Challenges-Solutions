# Leetcode: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

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
        
        def findTarget( self, root, k ):
                """
                :type root: TreeNode
                :type k: int
                :rtype: bool
                """
                if root is None:
                        return None

                preOrderList = []
                self.preorderRecursiveTraversal( root, preOrderList )
                
                hash_table = { }
                
                for i in range( 0, len( preOrderList ) ):
                        difference = k - preOrderList[ i ]
                        if difference in hash_table:
                                return True
                        else:
                                hash_table[ preOrderList[ i ] ] = i
                
                return False
        