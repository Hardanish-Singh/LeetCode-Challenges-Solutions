# Leetcode: https://leetcode.com/problems/permutation-sequence/

from itertools import permutations
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        ans = list(permutations(range(1, n + 1)))
        kthPermutation = ans[k - 1]
        return "".join(str(item) for item in kthPermutation)