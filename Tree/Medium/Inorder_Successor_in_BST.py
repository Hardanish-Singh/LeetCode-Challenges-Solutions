# Leetcode: https://leetcode.com/problems/inorder-successor-in-bst/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, x: int) -> None:
                self.val = x
                self.left = None
                self.right = None

class Solution:
        def inorderSuccessor(self, root: TreeNode, p: TreeNode) -> TreeNode:
                if root is None:
                        return []

                inOrderList, stack, currentNode = [], [], root

                while stack or currentNode:
                        if currentNode:
                                stack.append(currentNode)
                                currentNode = currentNode.left
                        else:
                                currentNode = stack.pop()
                                inOrderList.append(currentNode)
                                currentNode = currentNode.right

                isSuccessorFound = False
                for node in inOrderList:
                        if node.val == p.val:
                                isSuccessorFound = True
                                continue
                        if isSuccessorFound:
                                return node
                return None