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
                        # POP ALL ELEMENTS FROM QUEUE
                        for item in queue:
                                temp.append( item.val )
                        result.append( temp )
                        
                        n = len( queue )
                        for i in range( n ):
                                item = queue.pop(0)
                                if item.left:
                                        queue.append( item.left )
                                if item.right:
                                        queue.append( item.right )
                return result
                
                
                
                
        