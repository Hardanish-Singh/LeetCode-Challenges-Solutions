# Leetcode: https://leetcode.com/problems/binary-tree-maximum-path-sum/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

class Solution:
        def postorderTraversal(self, root: TreeNode) -> list[TreeNode]:
                postOrderList, stack = [], [root]
                while stack:
                        currentNode = stack.pop()
                        if currentNode:
                                postOrderList.append(currentNode)
                                stack.append(currentNode.left)
                                stack.append(currentNode.right)
                return postOrderList[::-1]

        def maxPathSum(self, root: TreeNode) -> int:
                postOrderList = self.postorderTraversal(root)
                maxPathSum = float("-inf")
                height = {}

                for currentNode in postOrderList:
                        leftMax = height.get(currentNode.left, 0)
                        rightMax = height.get(currentNode.right, 0)


                        if currentNode.val + max( leftMax, rightMax ) < 0:
                                height[ currentNode ] = 0
                        else:
                                # Same as max height/depth of binary tree
                                # height[ currentNode ] = 1 + max( leftMax, rightMax )
                                height[ currentNode ] = currentNode.val + max( leftMax, rightMax )
                        
                        # Same as finding diameter
                        # diameter = max( diameter, left + right )
                        maxPathSum = max( maxPathSum, leftMax + currentNode.val + rightMax )

                return maxPathSum
