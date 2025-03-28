# Leetcode: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
        def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
                queue = [cloned]
                while queue:
                        currentNode = queue.pop(0)
                        if currentNode.val == target.val:
                                return currentNode
                        if currentNode.left:
                                queue.append(currentNode.left)
                        if currentNode.right:
                                queue.append(currentNode.right)
                return None