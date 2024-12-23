# Leetcode: https://leetcode.com/problems/binary-tree-vertical-order-traversal/

from typing import List

# Definition for a binary tree node.
class TreeNode:
        def __init__(self, val = 0, left = None, right = None):
                self.val = val
                self.left = left
                self.right = right


"""
        Here are the steps we might intuitively follow to come up with the solution:
        1. Create a dictionary to store the nodes in each vertical order.
        2. We use a queue to perform the level-order traversal, we record its value in our dictionary under its associated horizontal distance.
        3. For every node we process, we enqueue its left child (if not null) with the horizontal distance decremented by 1, and its right child (if not null) with the horizontal distance incremented by 1.
        4. After we have traversed the entire tree, we will have a dictionary filled with vertical levels as keys and lists of node values as values. The only thing left would be to sort these keys and output the associated lists in the sorted order.
"""
class Solution:
        def verticalOrder(self, root: TreeNode) -> List[List[int]]:
                dictionary = {}
                queue = [[root, 0]]

                while queue:
                        node, order = queue.pop(0)
                        if node is not None:
                                if order in dictionary:
                                        dictionary[order].append(node.val)
                                else:
                                        dictionary[order] = [node.val]
                                queue.append([node.left, order - 1])
                                queue.append([node.right, order + 1])
                
                return [dictionary[key] for key in sorted(dictionary.keys())]