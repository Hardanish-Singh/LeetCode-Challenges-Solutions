# Leetcode: https://leetcode.com/problems/valid-palindrome-iii

# Solution 1: Recursion with memoization/caching
class Solution:
    def isValidPalindrome(self, s: str, k: int) -> bool:
        @cache
        def is_palindrome(k, left, right):
            while left < right:
                if s[left] != s[right]:
                    if k == 0:
                        return False
                    else:
                        return is_palindrome(k - 1, left + 1, right) or is_palindrome(k - 1, left, right - 1)
                left += 1
                right -= 1
            # This line is needed to handle the case where all characters in the substring from left to right have been checked and they all match their corresponding characters from the other end, meaning the substring is a palindrome.
            return True
        return is_palindrome(k, 0, len(s) - 1)