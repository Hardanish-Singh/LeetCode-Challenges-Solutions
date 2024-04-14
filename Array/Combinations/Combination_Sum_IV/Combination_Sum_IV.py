# Leetcode: https://leetcode.com/problems/combination-sum-iv

class Solution:
        def combinationSum4(self, nums: List[int], target: int) -> int:
                nums.sort()
                cache = { }
                visited = set()
                queue = []

                for num in nums:
                        cache[num] = 1
                        queue.append(num)
                        visited.add(num)

                while queue:
                        item = queue.pop(0)
                        for num in nums:
                                number = item + num
                                if target >= number:
                                        if cache.get(number):
                                                cache[number] = cache[number] + cache[item]
                                        else:
                                                cache[number] = cache[item]
                                        if number not in visited:
                                                visited.add(number)
                                                queue.append(number)
                                                queue.sort()

                return cache.get(target) if target in cache.keys() else 0