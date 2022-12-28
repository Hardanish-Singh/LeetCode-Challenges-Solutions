# Leetcode: https://leetcode.com/problems/decode-ways-ii/

class Solution:
        def numDecodings(self, s: str) -> int:
                f0, f1 = 0, 1  

                for i, ch in enumerate(s):
                        # f(n-1) validity
                        decodeFN1 = 0
                        # f(n-2) validity
                        decodeFN2 = 0
                        if ch == '*':
                                decodeFN1 = f1 * 9
                                if i > 0 and s[i-1] in '12*':
                                        if s[i-1] == '1':
                                                decodeFN2 += f0 * 9
                                        elif s[i-1] == '2':
                                                decodeFN2 += f0 * 6
                                        elif s[i-1] == '*':
                                                decodeFN2 += f0 * 15
                        else:
                                decodeFN1 = f1 if ch != '0' else 0
                                if i > 0 and s[i-1] in '12*':
                                        if s[i-1] in '1*' and '0' <= ch <= '9':
                                                decodeFN2 += f0
                                        if s[i-1] in '2*' and '0' <= ch <= '6':
                                                decodeFN2 += f0
                        f0, f1 = f1, ((decodeFN1 + decodeFN2) % 1_000_000_007)

                return f1