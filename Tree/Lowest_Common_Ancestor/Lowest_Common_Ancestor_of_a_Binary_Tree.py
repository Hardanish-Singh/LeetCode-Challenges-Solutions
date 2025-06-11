# Leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

class TreeNode:
        def __init__(self, x: int) -> None:
                self.val = x
                self.left = None
                self.right = None

# SOLUTION 1: RECURSIVE
class Solution:
        def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
                if root is None:
                        return None
                if root == p or root == q:
                        return root

                left = self.lowestCommonAncestor(root.left, p, q)
                right = self.lowestCommonAncestor(root.right, p, q)

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
                commonElement = commonElement.pop(0) or 0

                for node in parentNodeReference:
                        if node.val == commonElement:
                                return node

                return None

# SOLUTION 2: ITERATIVE
class Solution:
        def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
                parent = {root: None}
                stack = [root]
                while stack:
                        node = stack.pop()
                        if node.right:
                                stack.append(node.right)
                                parent[node.right] = node
                        if node.left:
                                stack.append(node.left)
                                parent[node.left] = node

                ancestors = set()
                while p:
                        ancestors.add(p)
                        p = parent.get(p)
                while q:
                        if q in ancestors:
                                return q
                        q = parent.get(q)
                return None