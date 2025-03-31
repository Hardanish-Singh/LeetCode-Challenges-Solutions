# Leetcode: https://leetcode.com/problems/leaf-similar-trees/

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
        def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:
                return self.getLeafValues(root1) == self.getLeafValues(root2)

        def getLeafValues(self, node: list[TreeNode]) -> list[int]:
                stack, leafs = [node], []
                while stack:
                        currentNode= stack.pop()
                        if currentNode.left is None and currentNode.right is None:
                                leafs.append(currentNode.val)
                        if currentNode.right:
                                stack.append(currentNode.right)
                        if currentNode.left:
                                stack.append(currentNode.left)
                return leafs