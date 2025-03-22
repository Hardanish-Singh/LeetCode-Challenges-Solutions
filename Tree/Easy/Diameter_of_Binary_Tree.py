# Leetcode: https://leetcode.com/problems/diameter-of-binary-tree/

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right

# SOLUTION 1: RECURSIVE
class Solution:
        def findDiameterOfBinaryTree(self, root: TreeNode) -> int:
                if root is None:
                        return 0

                left = self.findDiameterOfBinaryTree(root.left)
                right = self.findDiameterOfBinaryTree(root.right)

                # AT EACH NODE LEVEL, WE FIND THE DIAMETER & HEIGHT OF THAT NODE IN THE TREE
                self.diameter = max(self.diameter, left + right)
                return 1 + max(left, right)
        def diameterOfBinaryTree(self, root: TreeNode) -> int:
                self.diameter = 0
                self.findDiameterOfBinaryTree( root )
                return self.diameter

# SOLUTION 2: ITERATIVE
class Solution:
        def diameterOfBinaryTree(self, root: TreeNode) -> int:
                def postorderTraversal(root):
                        postOrderList, stack = [], [root]
                        while stack:
                                currentNode = stack.pop()
                                if currentNode:
                                        postOrderList.append(currentNode)
                                        stack.append(currentNode.left)
                                        stack.append(currentNode.right)
                        return postOrderList[::-1]

                postOrderList = postorderTraversal(root)
                diameter = 0
                height = {}
                # TRAVERSE/POP/GET THE ITEMS FROM POSTORDER LIST, WHY DO WE USE POSTORDER TRAVERSAL, SO THAT WE PROCESS LEAF FIRST ( BOTTOM UP APPROACH )
                for currentNode in postOrderList:
                        left = height.get(currentNode.left, 0)
                        right = height.get(currentNode.right, 0)
                        # AT EACH NODE LEVEL, WE FIND THE DIAMETER & HEIGHT OF THAT NODE IN THE TREE
                        diameter = max(diameter, left + right)
                        height[currentNode] = 1 + max(left, right)

                return diameter