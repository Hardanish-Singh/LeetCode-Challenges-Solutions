# Leetcode: https://leetcode.com/problems/two-sum-bsts/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__( self, val = 0, left = None, right = None ):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
        def preorderRecursiveTraversal(self, root: Optional[TreeNode], preOrderList: List[int]) -> List[int]:
                if root is None:
                        return None
                preOrderList.append(root.val)
                self.preorderRecursiveTraversal(root.left, preOrderList)
                self.preorderRecursiveTraversal(root.right, preOrderList)
                
        def twoSumBSTs(self, root1: Optional[TreeNode], root2: Optional[TreeNode], target: int) -> bool:
                if root1 is None or root2 is None:
                        return None

                preOrderList1 = []
                self.preorderRecursiveTraversal(root1, preOrderList1)
                
                preOrderList2 = []
                self.preorderRecursiveTraversal(root2, preOrderList2)
                
                for i in range(0, len(preOrderList1)):
                        compliment = target - preOrderList1[i]
                        if compliment in preOrderList2:
                                return True

                return False