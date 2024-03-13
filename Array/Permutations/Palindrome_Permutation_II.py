# Leetcode: https://leetcode.com/problems/palindrome-permutation-ii/

"""
Step 1) 
    It might be possible that no palindromic permutation could be possible for the given string s. 
    Thus, it is useless to generate the permutations in such a case. 
    Taking this idea, firstly we check if a palindromic permutation is possible for string s.
    If yes, then only we proceed further with generating the permutations, otherwise we don't generate permutations.

Step 2)
    Once we are sure that a palindromic permutation is possible for string s. 
    we go for the generation of the required permutations. 
    But, instead of wildly generating all the permutations, 
    we can include some smartness in the generation of permutations 
    i.e. we can generate only those permutations which are already palindromes.

Step 3)
    One way to do is to generate only the 1st half of the palindromic string & to append its reverse string to itself to generate the full length palindromic string.
    we create a variable "counter" which contains all the characters of string "s" with its frequency.
    Then we need to construct variable "string" with the number of occurences of these characters in counter reduced to half their original number of occurences in string s.
    There is special case here. In case of a string "s" with odd length, one of the characters in string "s" must be occuring an odd number of times.
    We keep a track of this character in variable "middleChar"

    Formula = str + middleChar + str[::-1]
"""

from collections import Counter
from itertools import permutations
class Solution:
    def generatePalindromes(self, s: str) -> bool:
        result = set()
        counter = Counter(s)
        odd_chars = [ value % 2 for value in counter.values() ]
        if sum(odd_chars) <= 1:
            string = ''
            middleChar = ''
            for char, count in counter.items():
                if count % 2 == 1:
                    middleChar = char
                string += "".join([char for item in range(0, count // 2)])
            [result.add("".join(str) + middleChar + "".join(str[::-1])) for str in list(permutations(string))]
        return result