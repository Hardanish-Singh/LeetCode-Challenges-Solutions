# Leetcode: https://leetcode.com/problems/decode-ways/

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