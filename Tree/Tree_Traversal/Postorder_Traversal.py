# Leetcode: https://leetcode.com/problems/binary-tree-postorder-traversal/ 

from typing import List

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# SOLUTION 1: RECURSIVE
class Solution:
        def postorderTraversal(self, root: TreeNode) -> List[int]:
                if root is None:
                        return []
                # Postorder: left -> right -> root
                # First, recursively traverse the left subtrees, then recursively traverse the right subtrees, then add the current node's value to the result list
                return self.postorderTraversal(root.left) + self.postorderTraversal(root.right) + [root.val]

# SOLUTION 2: RECURSIVE
class Solution:
        def postorderRecursiveTraversal(self, root: TreeNode, postOrderList: List[int]) -> List[int]:
                if root is None:
                        return None
                self.postorderRecursiveTraversal(root.left, postOrderList)
                self.postorderRecursiveTraversal(root.right, postOrderList)
                postOrderList.append(root.val)
        def postorderTraversal(self, root: TreeNode) -> List[int]:
                postOrderList = []
                self.postorderRecursiveTraversal(root, postOrderList)
                return postOrderList

# SOLUTION 3: RECURSIVE
def postorderRecursiveTraversal(root: TreeNode, postOrderList: List[int]) -> List[int]:
        if root is None:
                return None
        postorderRecursiveTraversal(root.left, postOrderList)
        postorderRecursiveTraversal(root.right, postOrderList)
        postOrderList.append(root.val)
        
class Solution:
        def postorderTraversal(self, root: TreeNode) -> List[int]:
                postOrderList = []
                postorderRecursiveTraversal(root, postOrderList)
                return postOrderList

# SOLUTION 4: ITERATIVE
class Solution:
        def postorderTraversal(self, root: TreeNode) -> List[int]:
                if root is None:
                        return []
                stack, postOrderList = [root], []

                while stack:
                        node = stack.pop()
                        postOrderList.append(node.val)
                        if node.left:
                                stack.append(node.left)
                        if node.right:
                                stack.append(node.right)

                return postOrderList[::-1] # Reverse the list to get the postorder traversal