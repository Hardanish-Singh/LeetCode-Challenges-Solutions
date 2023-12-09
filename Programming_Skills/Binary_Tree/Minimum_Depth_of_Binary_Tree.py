# Leetcode: https://leetcode.com/problems/minimum-depth-of-binary-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right


"""
        SOLUTION 1: RECURSIVE SOLUTION
"""

class Solution:
        def minDepth(self, root: TreeNode) -> int:
                # BASE CASE
                if root is None:
                        return 0
                # IF THERE IS ONLY LEFT CHILD, THEN WE GET ITS DEPTH
                if root.left and root.right is None:
                        return 1 + self.minDepth(root.left)
                # IF THERE IS ONLY RIGHT CHILD, THEN WE GET ITS DEPTH
                elif root.right and root.left is None:
                        return 1 + self.minDepth(root.right)
                # WHEN BOTH LEFT AND RIGHT CHILD EXISTS
                else:
                        left = self.minDepth(root.left)
                        right = self.minDepth(root.right)
                        return 1 + min(left, right)


"""
        SOLUTION 2: ITERATIVE BFS / LEVEL ORDER TRAVERSAL
"""

class Solution:
        def minDepth(self, root: TreeNode) -> int:
                if root is None:
                        return 0

                queue = [root]
                result = []
                count = 1

                while queue:
                        result.append( item.val for item in queue ) # POP ALL ELEMENTS FROM QUEUE
                        n = len(queue)
                        for i in range(n):
                                item = queue.pop(0)
                                if item.left is None and item.right is None:
                                        return count
                                if item.left:
                                        queue.append(item.left)
                                if item.right:
                                        queue.append(item.right)
                        count = count + 1