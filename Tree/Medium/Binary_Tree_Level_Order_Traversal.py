# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
        def levelOrder(self, root):
                """
                :type root: TreeNode
                :rtype: List[List[int]]
                """
                if root is None:
                        return []
                queue = [ root ]
                result = [ ]

                while len( queue ) > 0:
                        temp = []
                        # GET ALL ELEMENTS FROM QUEUE
                        for node in queue:
                                temp.append( node.val )
                        result.append( temp )
                        
                        # POP ALL ELEMENTS FROM QUEUE
                        n = len( queue )
                        for i in range( n ):
                                node = queue.pop(0)
                                if node.left:
                                        queue.append( node.left )
                                if node.right:
                                        queue.append( node.right )
                return result