# Leetcode: https://leetcode.com/problems/maximum-depth-of-binary-tree/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right


"""
        SOLUTION 1: RECURSIVE DFS
"""

class Solution:
        def maxDepth(self, root: TreeNode) -> int:                
                if root is None:
                        return 0
                left = self.maxDepth(root.left)
                right = self.maxDepth(root.right)
                return 1 + max(left, right)

"""
        SOLUTION 2: RECURSIVE DFS
"""

class Solution:
        def maxDepth(self, root: TreeNode) -> int:
                if root is None:
                        return 0
                left = 1 + self.maxDepth(root.left)
                right = 1 + self.maxDepth(root.right)
                return max(left, right)

"""
        SOLUTION 3: ITERATIVE BFS / LEVEL ORDER TRAVERSAL
"""

class Solution:
        def maxDepth(self, root: TreeNode) -> int:
                if root is None:
                        return 0
                queue = [root]
                result = []

                while queue:
                        temp = []
                        # POP ALL ELEMENTS FROM QUEUE
                        result.append( item.val for item in queue )

                        n = len(queue)
                        for i in range(n):
                                item = queue.pop(0)
                                if item.left:
                                        queue.append(item.left)
                                if item.right:
                                        queue.append(item.right)

                return len(result)