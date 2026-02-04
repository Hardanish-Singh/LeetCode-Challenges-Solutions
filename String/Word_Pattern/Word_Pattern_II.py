# Leetcode: https://leetcode.com/problems/word-pattern-ii/

import itertools

class Solution:
        def wordPattern(self, pattern: str, s: str) -> bool:
                map = { }
                str = s.split(" ")

                if len(str) != len(pattern):
                        return False

                for i in range(0, len(pattern)):
                        if map.get(pattern[i]) and map.get(pattern[i]) != str[i]:
                                return False
                        else:
                                map[pattern[i]] = str[i]

                return len(map.values()) == len(set(map.values()))

        def wordPatternMatch(self, pattern: str, s: str) -> bool:
                combinations = []

                for nums in itertools.combinations(range(len(s)), len(pattern)):
                        nums += (len(s),)
                        temp = []
                        if(nums[0] != 0): 
                                break
                        for i in range(len(nums)-1):
                                temp.append(s[nums[i]:nums[i+1]])
                        combinations.append(temp)

                for item in combinations:
                        if(self.wordPattern(pattern, ' '.join(item))):
                                return True

                return False