# Leetcode: https://leetcode.com/problems/decode-ways/

"""
        This question is exactly same as the standard solution to find fibonacci series of nth number.
        Except that you can't simply add previous two values as they may not be valid in context of current digit.

        Recurrence for the problem:
        
        f(0) = 0
        f(1) = 1
        f(n) = f(n-1) if valid + f(n-2) if valid

        f(n-1) can be added if current digit is not 0. It is guaranteed that all characters are digits, so this is the only condition we need.
        f(n-2) has more contrived conditions. First, previous digit needs to be either 1 or 2. Second, if the previous digit is 2, the current digit must be betwen [0, 6].
"""

class Solution:
    def numDecodings(self, string: str) -> int:
        f0, f1 = 0, 1
        
        for i, ch in enumerate(string):
            # f(n-1) validity
            decode_F_N_1 = f1 if ch != '0' else 0

            # f(n-2) validity
            decode_F_N_2 = f0 if string[i-1] == '1' or (string[i-1] == '2' and '0' <= ch <= '6') else 0

            f0, f1 = f1, (decode_F_N_2 + decode_F_N_1)

        return f1