# Leetcode: https://leetcode.com/problems/n-ary-tree-postorder-traversal/

"""
        # Definition for a Node.
        class Node:
                def __init__(self, val = None, children = None):
                        self.val = val
                        self.children = children
"""

"""
        SOLUTION 1: RECURSIVE
"""

class Solution:
        def postorderRecursiveTraversal(self, root: 'TreeNode', postOrderList: List[int]) -> List[int]:
                if root is None:
                        return None
                for child in root.children:
                        self.postorderRecursiveTraversal(child, postOrderList)
                postOrderList.append(root.val)
        def postorder(self, root: 'Node') -> List[int]:
                postOrderList = []
                self.postorderRecursiveTraversal( root, postOrderList )
                return postOrderList

"""
        SOLUTION 2: ITERATIVE
"""

class Solution:
        def postorder(self, root: 'Node') -> List[int]:
                if root is None:
                        return []
        
                postOrderList = []
                stack = [ root ]
                
                while len( stack ) > 0:
                        currentNode = stack.pop()
                        postOrderList.append( currentNode.val )

                        for child in currentNode.children:
                                stack.append( child )

                return postOrderList[::-1]
        