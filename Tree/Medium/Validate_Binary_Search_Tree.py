# Leetcode: https://leetcode.com/problems/validate-binary-search-tree/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# SOLUTION 1: RECURSIVE
class Solution:
        def isValidBST(self, root: TreeNode) -> bool:
                return self.checkIsValidBST(root, float("inf"), -float("inf"))
        
        def checkIsValidBST(self, root: TreeNode, leftParentValue: float, rightParentValue: float) -> bool:
                if root is None:
                        return True
                if root.val >= leftParentValue:
                        return False
                if root.val <= rightParentValue:
                        return False
                
                left = self.checkIsValidBST(root.left, root.val, rightParentValue)
                right = self.checkIsValidBST(root.right, leftParentValue, root.val)

                return True if left and right else False

#  SOLUTION 2: ITERATIVE
# IF THE TREE IS VALID BST, THEN WE WILL USE INORDER TRAVERSAL ON BST WHICH WILL LEAD TO SORTED LIST
class Solution:
        def isValidBST(self, root: TreeNode) -> bool:
                if root is None:
                        return False
                inOrderList, stack, currentNode = [], [], root

                while currentNode or stack:
                        if currentNode:
                                stack.append(currentNode)
                                currentNode = currentNode.left
                        else:
                                currentNode = stack.pop()
                                inOrderList.append(currentNode.val)
                                currentNode = currentNode.right

                clonedList = list(sorted(set(inOrderList)))
                return True if clonedList == inOrderList else False