# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution( object ):
        def binaryTreePaths( self, root ):
                """
                :type root: TreeNode
                :rtype: List[str]
                """
                paths = [ ]
                stack = [ ( root, str( root.val ) )  ]

                while len( stack ) > 0:
                        currentNode, path = stack.pop()
                        if currentNode.left is None and currentNode.right is None:
                                paths.append( path )
                        if currentNode.right:
                                stack.append( ( currentNode.right, path + "->" + str( currentNode.right.val ) ) )
                        if currentNode.left:
                                stack.append( ( currentNode.left, path + "->" + str( currentNode.left.val ) ) )

                return paths