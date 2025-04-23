# Leetcode: https://leetcode.com/problems/path-sum/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# SOLUTION 1
class Solution:
        def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
                if root is None:
                        return False
                paths = []
                stack = [[root, str(root.val)]]

                while stack:
                        currentNode, path = stack.pop()
                        if currentNode.left is None and currentNode.right is None:
                                paths.append(path)
                        if currentNode.right:
                                stack.append([currentNode.right, path + "->" + str(currentNode.right.val)])
                        if currentNode.left:
                                stack.append([currentNode.left, path + "->" + str(currentNode.left.val)])

                for path in paths:
                        pathSum = map(int, path.split("->") )
                        if sum(pathSum) == targetSum:
                                return True
                
                return False
        
# SOLUTION 2
class Solution:
        def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
                if root is None:
                        return False
                stack = [[root, root.val]]

                while stack:
                        currentNode, currentSum = stack.pop()
                        if currentNode.left is None and currentNode.right is None and currentSum == targetSum:
                                return True
                        if currentNode.right:
                                stack.append([currentNode.right, currentSum + currentNode.right.val])
                        if currentNode.left:
                                stack.append([currentNode.left, currentSum + currentNode.left.val])
                
                return False

# SOLUTION 3
class Solution:
        def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
                if not root:
                        return False
                stack = [[root, targetSum - root.val]]
                
                while stack:
                        currentNode, remainingSum = stack.pop()
                        if not currentNode.left and not currentNode.right and remainingSum == 0:
                                return True
                        if currentNode.right:
                                stack.append([currentNode.right, remainingSum - currentNode.right.val])
                        if currentNode.left:
                                stack.append([currentNode.left, remainingSum - currentNode.left.val])
                
                return False