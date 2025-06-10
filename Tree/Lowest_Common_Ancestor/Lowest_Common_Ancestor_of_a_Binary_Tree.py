# Leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

class TreeNode:
        def __init__(self, x: int) -> None:
                self.val = x
                self.left = None
                self.right = None

# SOLUTION 1: RECURSIVE
class Solution:
        def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
                if root is None:
                        return None
                if root == p or root == q:
                        return root

                left = self.lowestCommonAncestor(root.left, p, q)
                right = self.lowestCommonAncestor(root.right, p, q)

                return root if left and right else left or right

"""
        SOLUTION 2: ITERATIVE
"""

class Solution:
        def lowestCommonAncestor( self, root: TreeNode, p: TreeNode, q: TreeNode ) -> TreeNode:
                parentNodeReference = { 
                        root: None 
                }
                stack = [ root ]
                # Preorder Traversal
                while len( stack ) > 0:
                        currentNode = stack.pop()
                        if currentNode.right:
                                stack.append( currentNode.right )
                                parentNodeReference[ currentNode.right ] = currentNode
                        if currentNode.left:
                                stack.append( currentNode.left )
                                parentNodeReference[ currentNode.left ] = currentNode
                
                pList = [ p.val ]
                key = p
                while( key in parentNodeReference and parentNodeReference[ key ] ):
                        pList.append( parentNodeReference[ key ].val )
                        key = parentNodeReference[ key ]
                
                qList = [ q.val ]
                key = q
                while( key in parentNodeReference and parentNodeReference[ key ] ):
                        qList.append( parentNodeReference[ key ].val )
                        key = parentNodeReference[ key ]
                
                # Intersection/Common Elements between 2 Lists
                commonElement = [i for i in pList if i in qList]
                commonElement = commonElement.pop(0) or 0

                for node in parentNodeReference:
                        if node.val == commonElement:
                                return node
                
                return None