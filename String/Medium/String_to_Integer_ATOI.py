class Solution:
        def myAtoi(self, s: str) -> int:
                s = s.strip()
                MIN, MAX = -2 ** 31, 2 ** 31 - 1
                n, sign = 0, +1

                for i, ch in enumerate(s):
                        if i == 0:
                                if ch == '-': sign = -1
                                elif ch.isdigit(): n = int(ch)
                                elif ch != '+': return 0  # the first char is not a digit and not in (' ', '+', '-'), so s is invalid
                        else:
                                if ch.isdigit():
                                        n = ( ( n * 10 ) + int(ch) )
                                        if sign * n > MAX: return MAX
                                        elif sign * n < MIN: return MIN
                                else: 
                                        break

                return sign * n