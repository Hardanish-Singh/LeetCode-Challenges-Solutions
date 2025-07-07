# Leetcode: https://leetcode.com/problems/find-substring-with-given-hash-value/
"""
        (a+b) % modulo = ( (a % modulo) + (b % modulo) ) % modulo;
        (a-b) % modulo = ( (a % modulo) - (b % modulo) + modulo ) % modulo;
        (a*b) % modulo = ( (a % modulo) * (b % modulo) ) % modulo;
        (a/b) % modulo = ( (a % modulo) * ( (b^-1) % modulo) ) % modulo;
"""
class Solution:
    def subStrHash(self, s: str, power: int, modulo: int, k: int, hashValue: str) -> str:
        hash = 0
        product = 0
        powerData = 1
        addCharacter = ''
        addCharacterValue = 0
        deleteCharacter = ''
        deleteCharacterValue = 0
        i = len( s ) - 1
        result = ''
        dictionary = {}
        for item in range(97, 123):
                dictionary[chr(item)] = item - 96
                
        for _ in reversed(s):
                if( i < k - 1 ):
                        break
                substring = s[i - k + 1 : i + 1]
                if( i != len( s ) - 1 ):
                        addCharacter = substring[0]
                        deleteCharacter = s[ i + 1 ]
                if( i == len( s ) - 1 ):
                        for j in range(0, len(substring)):
                                product = ( ( dictionary[ substring[j] ] % modulo ) * ( powerData % modulo ) ) % modulo
                                hash = ( ( hash % modulo ) + ( product % modulo ) ) % modulo
                                powerData = ( ( powerData % modulo ) * ( power % modulo ) ) % modulo
                else:
                        deleteCharacterValue = dictionary[ deleteCharacter ]
                        deleteCharacterValue = ( ( deleteCharacterValue % modulo ) * ( powerData % modulo ) ) % modulo
                        
                        # Multipy hash by power
                        hash = ( ( hash % modulo ) * ( power % modulo ) ) % modulo
                        
                        addCharacterValue = dictionary[ addCharacter ]
                        # Add addCharacterValue to hash
                        hash = ( ( hash % modulo ) + ( addCharacterValue % modulo ) ) % modulo
                        
                        hash = ( ( hash % modulo ) - deleteCharacterValue + modulo ) % modulo
                if( hash == hashValue ):
                        result = substring
                i -= 1
        
        return result