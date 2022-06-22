"""
        SOLUTION 1: RECURSIVE
"""

class Solution( object ):
        def isValidBST( self, root ):
                """
                :type root: TreeNode
                :rtype: bool
                """
                return self.checkIsValidBST( root, float("inf"), -float("inf") )
        
        def checkIsValidBST( self, root, leftParentValue, rightParentValue ):
                if root is None:
                        return True
                if root.val >= leftParentValue:
                        return False
                if root.val <= rightParentValue:
                        return False
                
                left = self.checkIsValidBST( root.left, root.val, rightParentValue )
                right = self.checkIsValidBST( root.right, leftParentValue, root.val )

                if left and right:
                        return True
                else:
                        return False