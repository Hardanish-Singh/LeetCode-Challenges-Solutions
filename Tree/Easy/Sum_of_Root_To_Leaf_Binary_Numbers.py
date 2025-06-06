# Leetcode: https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

class Solution:
        def sumRootToLeaf(self, root: TreeNode) -> int:
                paths, stack = [], [[root, str(root.val)]]

                while stack:
                        currentNode, path = stack.pop()
                        if currentNode.left is None and currentNode.right is None:
                                paths.append(path)
                        if currentNode.right:
                                stack.append([currentNode.right, f"{path}->{currentNode.right.val}"])
                        if currentNode.left:
                                stack.append([currentNode.left, f"{path}->{currentNode.left.val}"])

                result = sum(int(''.join(path.split("->")), 2) for path in paths)
                return result