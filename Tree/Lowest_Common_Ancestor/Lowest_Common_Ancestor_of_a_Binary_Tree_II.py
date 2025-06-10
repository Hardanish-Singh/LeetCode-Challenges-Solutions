# Leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right

# SOLUTION 1: RECURSIVE
class Solution:
        def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
                self.pFound = False
                self.qFound = False
                result = self.findLowestCommonAncestor( root, p, q )
                return result if self.pFound and self.qFound else None
        
        def findLowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
                if root is None:
                        return None

                left = self.findLowestCommonAncestor(root.left, p, q)
                right = self.findLowestCommonAncestor(root.right, p, q)

                if root == p or root == q:
                        if root == p:
                                self.pFound = True
                        else:
                                self.qFound = True
                        return root
                
                return root if left and right else left or right

# SOLUTION 2: ITERATIVE
class Solution:
        def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
                parentNodeReference = {
                        root: None
                }
                stack = [root]
                # Preorder Traversal
                while stack:
                        currentNode = stack.pop()
                        if currentNode.right:
                                stack.append(currentNode.right)
                                parentNodeReference[currentNode.right] = currentNode
                        if currentNode.left:
                                stack.append(currentNode.left)
                                parentNodeReference[currentNode.left] = currentNode

                pList = [p.val]
                key = p
                while(key in parentNodeReference and parentNodeReference[key]):
                        pList.append(parentNodeReference[key].val)
                        key = parentNodeReference[key]

                qList = [q.val]
                key = q
                while(key in parentNodeReference and parentNodeReference[key]):
                        qList.append(parentNodeReference[key].val)
                        key = parentNodeReference[key]

                # Intersection/Common Elements between 2 Lists
                commonElement = [i for i in pList if i in qList]
                commonElement = commonElement.pop(0) if len(commonElement) > 0 else None

                for node in parentNodeReference:
                        if node.val == commonElement:
                                return node

                return None
        
# SOLUTION 3: ITERATIVE
class Solution:
        def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
                parent = {root: None}
                stack = [root]
                # Preorder Traversal
                while stack:
                        node = stack.pop()
                        if node.right:
                                stack.append(node.right)
                                parent[node.right] = node
                        if node.left:
                                stack.append(node.left)
                                parent[node.left] = node

                # Build ancestor set for p
                ancestors = set()
                while p:
                        ancestors.add(p)
                        p = parent.get(p)

                # Traverse q's ancestors and return the first common node
                while q:
                        if q in ancestors:
                                return q
                        q = parent.get(q)
                return None