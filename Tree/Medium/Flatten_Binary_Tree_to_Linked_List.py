# Leetcode: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# SOLUTION 1: RECURSIVE
class Solution:
        def flatten(self, root: TreeNode) -> None:
                self.prev = None
                return self.flattenBinaryTreeToLinkedList(root)
        
        def flattenBinaryTreeToLinkedList(self, root):
                if root is None:
                        return None

                self.flattenBinaryTreeToLinkedList(root.right)
                self.flattenBinaryTreeToLinkedList(root.left)

                root.right = self.prev
                root.left = None
                self.prev = root

# SOLUTION 2: USING AN EXTRA TREE
class Solution:
        def flatten(self, root: TreeNode) -> None:
                if root is None:
                        return []
                linkedListRoot = TreeNode()
                stack = [root]
                while stack:
                        currentNode = stack.pop()
                        linkedListRoot.right = currentNode
                        linkedListRoot.left = None
                        if currentNode.right:
                                stack.append(currentNode.right)
                        if currentNode.left:
                                stack.append(currentNode.left)
                        linkedListRoot = currentNode

# SOLUTION 3: ITERATIVE
class Solution:
        def flatten(self, root: TreeNode) -> None:
                while root:
                        if root.left:
                                node = self.findLastRight(root.left)
                                node.right = root.right
                                root.right = root.left
                                root.left = None
                        root = root.right
                
        def findLastRight(self, root: TreeNode) -> TreeNode:
                while root:
                        if root.right is None:
                                return root
                        else:
                                root = root.right

