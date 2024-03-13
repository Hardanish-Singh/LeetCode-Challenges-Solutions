# Leetcode: https://leetcode.com/problems/palindrome-permutation/

# Solution 1
from collections import Counter
class Solution:
    def canPermutePalindrome(self, s: str) -> bool:
        counter = Counter(s)
        odd_chars = [char for char, count in counter.items() if count % 2 != 0]
        return False if len(odd_chars) > 1 else True

# Solution 2
from collections import Counter
class Solution:
    def canPermutePalindrome(self, s: str) -> bool:
        counter = Counter(s)
        odd_chars = [ value % 2 for value in counter.values() ]
        return sum(odd_chars) <= 1