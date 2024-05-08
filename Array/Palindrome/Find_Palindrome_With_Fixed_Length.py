# Leetcode: https://leetcode.com/problems/find-palindrome-with-fixed-length/

class Solution:
    def kthPalindrome(self, queries: List[int], intLength: int) -> List[int]:
        result = []
        s = ''
        n = ceil(intLength / 2) - 1
        for i in queries:
            # first number/starting number
            x = str(10**n + i-1)
            # if length is even, then add the reverse of the number, else add the reverse of the number excluding the last digit 
            s = x + x[::-1] if intLength % 2 == 0 else x + x[::-1][1:] 
            result.append(int(s) if len(s) == intLength else -1)
        return result