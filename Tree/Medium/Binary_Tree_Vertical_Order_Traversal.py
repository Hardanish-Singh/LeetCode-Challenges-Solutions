# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
        def verticalOrder(self, root):
                """
                :type root: TreeNode
                :rtype: List[List[int]]
                """
                dictionary = {
                        
                }
                queue = [ [ root, 0 ] ]

                while queue:
                        node, value = queue.pop( 0 )
                        if node is None:
                                continue
                        
                        if value in dictionary:
                                nodesList = dictionary [ value ]
                                nodesList.append( node.val )
                                dictionary[ value ] = nodesList
                        else:
                                dictionary[ value ] = [ node.val ]
                        
                        queue.append( [ node.left, value - 1 ] )
                        queue.append( [ node.right, value + 1 ] )
                
                
                result = [ ]
                for key in sorted(dictionary):
                        result.append( dictionary [ key ] )
                return result