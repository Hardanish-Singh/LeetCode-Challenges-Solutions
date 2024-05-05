# Leetcode: https://leetcode.com/problems/valid-palindrome-iv/

class Solution:
    def makePalindrome(self, s: str) -> bool:
        left, right = 0, len(s)-1
        num_operation = 0
        while left < right:
            if s[left] != s[right]:
                num_operation += 1
            left += 1
            right -= 1
            if num_operation > 2:
                return False
        return True