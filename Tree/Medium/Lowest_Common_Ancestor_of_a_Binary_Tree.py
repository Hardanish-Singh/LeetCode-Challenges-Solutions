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
                parentNodeReference = { 
                        root.val: float('inf') 
                }
                test = { 
                        root: None 
                }
                stack = [ root ]
                
                while len( stack ) > 0:
                        currentNode = stack.pop()
                        if currentNode.left:
                                stack.append( currentNode.left )
                                parentNodeReference[ currentNode.left.val ] = currentNode.val
                                test[ currentNode.left ] = currentNode
                        if currentNode.right:
                                stack.append( currentNode.right )
                                parentNodeReference[ currentNode.right.val ] = currentNode.val
                                test[ currentNode.right ] = currentNode
                
                pList = [ p.val ]
                qList = [ q.val ]
                
                key = p.val
                while( key in parentNodeReference ):
                        pList.append( parentNodeReference[ key ] )
                        key = parentNodeReference[ key ]
                
                key = q.val
                while( key in parentNodeReference ):
                        qList.append( parentNodeReference[ key ] )
                        key = parentNodeReference[ key ]
                
                commonElement = None
                for i in pList:
                        if i in qList:
                                commonElement = i;
                                break
                
                for node in test:
                        if node.val == commonElement:
                                return node
                
                return None