# Leetcode: https://leetcode.com/problems/reverse-words-in-a-string-iii/

class Solution( object ):        
        def reverseWords( self, str ):
                """
                :type s: List[str]
                :rtype: None Do not return anything, modify s in-place instead.
                """
                str = str + " "
                str = list( str )
                left = 0
                for i in range( len( str ) ):
                        if str[i] == " ":
                                part_before = str[:left]
                                part_to_reverse = str[left:i]
                                part_after = str[i:]
                                str = part_before + part_to_reverse[::-1] + part_after
                                left = i + 1
                return ''.join( str ).strip()