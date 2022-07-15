# Leetcode: https://leetcode.com/problems/binary-tree-vertical-order-traversal/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution( object ):
        def verticalOrder( self, root ):
                """
                :type root: TreeNode
                :rtype: List[List[int]]
                """
                dictionary = {
                        
                }
                queue = [ [ root, 0 ] ]

                while queue:
                        node, order = queue.pop( 0 )
                        if node is None:
                                continue
                        
                        if order in dictionary:
                                dictionary[ order ].append( node.val )
                        else:
                                dictionary[ order ] = [ node.val ]
                        
                        queue.append( [ node.left, order - 1 ] )
                        queue.append( [ node.right, order + 1 ] )
                
                
                verticalOrderTraversal = [ ]
                for key in sorted( dictionary ):
                        verticalOrderTraversal.append( dictionary [ key ] )
                return verticalOrderTraversal