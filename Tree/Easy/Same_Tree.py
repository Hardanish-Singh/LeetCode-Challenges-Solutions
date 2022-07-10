# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution( object ):
        def isSameTree( self, p, q ):
                """
                :type p: TreeNode
                :type q: TreeNode
                :rtype: bool
                """
                if p is None and q is None:
                        return True
                if p is None and q is not None:
                        return False
                if q is None and p is not None:
                        return False
                
                queue1 = [ p ]
                queue2 = [ q ]
                while queue1 and queue2:
                        node1 = queue1.pop( 0 )
                        node2 = queue2.pop( 0 )
                        if node1.val != node2.val:
                                return False
                        if node1.left is None and node1.right is None and ( node2.left is not None or node2.right is not None ):
                                return False
                        if node2.left is None and node2.right is None and ( node1.left is not None or node1.right is not None ):
                                return False
                        if node1.left and node2.left is None:
                                return False
                        if node2.left and node1.left is None:
                                return False
                        if node1.right and node2.right is None:
                                return False
                        if node2.right and node2.right is None:
                                return False
                        if node1.left:
                                queue1.append( node1.left )
                        if node2.left:
                                queue2.append( node2.left )
                        if node1.right:
                                queue1.append( node1.right )
                        if node2.right:
                                queue2.append( node2.right )
                
                return True