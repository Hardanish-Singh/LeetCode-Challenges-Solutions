# Leetcode: https://leetcode.com/problems/binary-tree-inorder-traversal/

from typing import List

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# SOLUTION 1: RECURSIVE
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        if root is None:
            return []
        # Inorder: left -> root -> right
        # First, recursively traverse the left subtrees, then add the current node's value to the result list, then recursively traverse the right subtrees
        return  self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right)
    
# SOLUTION 2: RECURSIVE USING LAMBDA FUNCTION
class Solution:
        def inorderTraversal(self, root: TreeNode) -> List[int]:
                inorderTraversal = lambda node: [] if not node else inorderTraversal(node.left) + [node.val] + inorderTraversal(node.right)
                return inorderTraversal(root)
        
# SOLUTION 3: RECURSIVE USING INLINE LAMBDA FUNCTION
class Solution:
        def inorderTraversal(self, root: TreeNode) -> List[int]:
                return (lambda node: self.inorderTraversal(node.left) + [node.val] + self.inorderTraversal(node.right) if node else [])(root)

# SOLUTION 4: RECURSIVE
class Solution:
        def inorderRecursiveTraversal(self, root: TreeNode, inOrderList: List[int]) -> List[int]:
                if root is None:
                        return []
                self.inorderRecursiveTraversal(root.left, inOrderList)
                inOrderList.append(root.val)
                self.inorderRecursiveTraversal(root.right, inOrderList)
                return inOrderList
        def inorderTraversal(self, root: TreeNode) -> List[int]:
                inOrderList = []
                self.inorderRecursiveTraversal(root, inOrderList)
                return inOrderList

# SOLUTION 5: RECURSIVE
def inorderRecursiveTraversal(root: TreeNode, inOrderList: List[int]) -> List[int]:
        if root is None:
                return []
        inorderRecursiveTraversal(root.left, inOrderList)
        inOrderList.append(root.val)
        inorderRecursiveTraversal(root.right, inOrderList)
        
class Solution:
        def inorderTraversal(self, root: TreeNode) -> List[int]:
                inOrderList = []
                inorderRecursiveTraversal(root, inOrderList)
                return inOrderList

# SOLUTION 6: ITERATIVE
class Solution:
        def inorderTraversal(self, root: TreeNode) -> List[int]:
                if root is None:
                        return []
                stack, inOrderList, node = [], [], root

                while stack or node:
                        # This loop traverses the left subtree by pushing nodes onto the stack until it reaches a None node. node is updated to its left child in each iteration.
                        while node:
                                stack.append(node)
                                node = node.left
                        # When the left subtree is fully traversed, the current node is popped from the stack, its value is added to the result list, and node is updated to its right child.
                        node = stack.pop()
                        inOrderList.append(node.val)
                        node = node.right

                return inOrderList