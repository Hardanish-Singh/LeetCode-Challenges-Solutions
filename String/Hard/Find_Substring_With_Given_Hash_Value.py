class Solution(object):
    def subStrHash(self, s, power, modulo, k, hashValue):
        """
        :type s: str
        :type power: int
        :type modulo: int
        :type k: int
        :type hashValue: int
        :rtype: str
        """
        calculateOnce = False;
        sum = 0;
        modulus  = 0
        result = ''
        addCharacter = ''
        addCharacterValue = 0
        deleteCharacter = ''
        deleteCharacterValue = 0
        i = len( s ) - 1
        powerData = 1
        dictionary = {}
        for item in range(97, 123):
                dictionary[chr(item)] = item - 96
        for c in reversed(s):
                if( i < k - 1 ):
                        break
                substring = s[i - k + 1 : i + 1]
                if( calculateOnce ):
                        addCharacter = substring[0]
                        deleteCharacter = s[ i + 1 ]
                if( not calculateOnce ):
                        for j in range(0, len(substring)):
                                sum += dictionary[ substring[j] ] * powerData
                                powerData *= power
                        powerData //= power
                        calculateOnce = True
                else:
                        deleteCharacterValue = dictionary[ deleteCharacter ] * powerData
                        addCharacterValue = dictionary[ addCharacter ]
                        sum = ( ( sum - deleteCharacterValue ) * power ) + addCharacterValue
                modulus = sum % modulo
                if( modulus == hashValue):
                        result = substring
                i -= 1
        return result