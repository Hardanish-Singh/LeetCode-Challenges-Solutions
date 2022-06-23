# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution( object ):
        def deleteNode( self, root, key ):
                """
                :type root: TreeNode
                :type key: int
                :rtype: TreeNode
                """
                if root is None:
                        return None
                if root.val == key:
                        return moveNodePointers( root )
                currentNode = root

                while currentNode:
                        if val > currentNode.val:
                                if root.right is not None and root.right.val == key:
                                        root.right = moveNodePointers( root.right )
                                else:
                                        root = root.right
                        else:
                                if root.left is not None and root.left.val == key:
                                        root.left = moveNodePointers( root.left )
                                else:
                                        root = root.left

                return root