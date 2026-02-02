# Leetcode: https://leetcode.com/problems/reverse-words-in-a-string-ii/

from typing import List

# Solution 1
class Solution:    
        def reverseWords(self, str: List[str]) -> None:
                str.reverse()
                str.append(" ")
                left = 0
                for i in range(len(str)):
                        if str[i] == " ":
                                part_before = str[:left]
                                part_to_reverse = str[left:i]
                                part_after = str[i:]
                                str = part_before + part_to_reverse[::-1] + part_after
                                left = i + 1
                str.pop()