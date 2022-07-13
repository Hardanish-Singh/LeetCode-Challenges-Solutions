# Leetcode: https://leetcode.com/problems/binary-tree-maximum-path-sum/

# Definition for a binary tree node.
# class TreeNode( object ):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution( object ):
        def maxPathSum( self, root ):
                """
                :type root: TreeNode
                :rtype: int
                """
                def postorderTraversal( root ):
                        postOrderList = []
                        stack = [ root ]

                        while len( stack ) > 0:
                                currentNode = stack.pop()
                                if currentNode:
                                        postOrderList.append( currentNode )
                                        stack.append( currentNode.left )
                                        stack.append( currentNode.right )

                        return postOrderList[::-1]

                postOrderList = postorderTraversal(root)

                maxPathSum = float("-inf")
                height = {
                        
                }
                leftMax = None
                rightMax = None
                for currentNode in postOrderList:
                        if currentNode.left is None:
                                leftMax = 0
                        else:
                                leftMax = height[ currentNode.left ]
                        if currentNode.right is None:
                                rightMax = 0
                        else:
                                rightMax = height[ currentNode.right ]


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
        