# Leetcode: https://leetcode.com/problems/combination-sum-iv

class Solution:
        def combinationSum4(self, nums: List[int], target: int) -> int:
                nums.sort()
                cache = { }
                visited = set()
                stack = []

                for num in nums:
                        cache[num] = 1
                        stack.append(num)
                        visited.add(num)

                while stack:
                        item = stack.pop(0)
                        for num in nums:
                                number = item + num
                                if target >= number:
                                        if cache.get(number):
                                                cache[number] = cache[number] + cache[item]
                                        else:
                                                cache[number] = cache[item]
                                        if number not in visited:
                                                visited.add(number)
                                                stack.append(number)
                                                stack.sort()

                if target in cache.keys():
                        return cache.get(target)
                else:
                        return 0