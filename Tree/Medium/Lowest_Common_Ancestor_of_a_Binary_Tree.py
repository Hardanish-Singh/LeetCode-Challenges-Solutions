# Leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, x ):
#         self.val = x
#         self.left = None
#         self.right = None

"""
        SOLUTION: RECURSIVE
"""

class Solution( object ):
        def lowestCommonAncestor( self, root, p, q ):
                """
                :type root: TreeNode
                :type p: TreeNode
                :type q: TreeNode
                :rtype: TreeNode
                """
                if root is None:
                        return None
                if root.val == p.val or root.val == q.val:
                        return root

                left = self.lowestCommonAncestor( root.left, p, q )
                right = self.lowestCommonAncestor( root.right, p, q )
                
                if left and right:
                        return root
                if left:
                        return left
                else:
                        return right

"""
        SOLUTION 2: ITERATIVE
"""

class Solution( object ):
        def lowestCommonAncestor( self, root, p, q ):
                """
                :type root: TreeNode
                :type p: TreeNode
                :type q: TreeNode
                :rtype: TreeNode
                """
                parentNodeValues = { 
                        root.val: float('inf') 
                }
                parentNodeReference = { 
                        root: None 
                }
                stack = [ root ]
                
                while len( stack ) > 0:
                        currentNode = stack.pop()
                        if currentNode.left:
                                stack.append( currentNode.left )
                                parentNodeValues[ currentNode.left.val ] = currentNode.val
                                parentNodeReference[ currentNode.left ] = currentNode
                        if currentNode.right:
                                stack.append( currentNode.right )
                                parentNodeValues[ currentNode.right.val ] = currentNode.val
                                parentNodeReference[ currentNode.right ] = currentNode
                
                pList = [ p.val ]
                qList = [ q.val ]
                
                key = p.val
                while( key in parentNodeValues ):
                        pList.append( parentNodeValues[ key ] )
                        key = parentNodeValues[ key ]
                
                key = q.val
                while( key in parentNodeValues ):
                        qList.append( parentNodeValues[ key ] )
                        key = parentNodeValues[ key ]
                
                commonElement = None
                for i in pList:
                        if i in qList:
                                commonElement = i;
                                break
                
                for node in parentNodeReference:
                        if node.val == commonElement:
                                return node
                
                return None