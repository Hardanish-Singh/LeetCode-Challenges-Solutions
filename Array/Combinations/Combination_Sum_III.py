# Leetcode: https://leetcode.com/problems/combination-sum-iii/description/

class Solution:
        def combinationSum3(self, k: int, n: int) -> List[List[int]]:
                combinations = []
                queue = [[[], 1]]

                while queue:
                        current_combination, integer = queue.pop()
                        combination_sum = sum(current_combination)
                        if combination_sum == n and len(current_combination) == k: 
                                combinations.append(current_combination)
                        else:
                                for i in range(integer, 10):
                                        if combination_sum + i > n: 
                                                break
                                        queue.append([current_combination + [i], i + 1])
                
                return combinations