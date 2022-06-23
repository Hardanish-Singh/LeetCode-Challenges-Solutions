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
                        return self.moveNodePointers( root )
                currentNode = root

                while currentNode:
                        if val > currentNode.val:
                                if root.right is not None and root.right.val == key:
                                        root.right = self.moveNodePointers( root.right )
                                else:
                                        root = root.right
                        else:
                                if root.left is not None and root.left.val == key:
                                        root.left = self.moveNodePointers( root.left )
                                else:
                                        root = root.left

                return root

        def moveNodePointers( self, root ):
                if root.left is None:
                        return root.right
                elif root.right is None:
                        return root.left
                else:
                        rootRightNodePointer = root.right
                        rootLeftNodeLastRightPointer = self.findLastRight( root.left )
                        rootLeftNodeLastRightPointer.right = rootRightNodePointer
                        return root.left
        
        def findLastRight( self, root ):
                while root:
                        if root.right is None:
                                return root
                        else:
                                root = root.right