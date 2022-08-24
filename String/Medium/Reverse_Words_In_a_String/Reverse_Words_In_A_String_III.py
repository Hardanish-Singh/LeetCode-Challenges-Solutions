# Leetcode: https://leetcode.com/problems/reverse-words-in-a-string-iii/

class Solution( object ):
        def reverse( self, str, left, right ):
                while left < right:
                        str[left], str[right] = str[right], str[left]
                        left, right = left + 1, right - 1
        
        def reverseWords( self, str ):
                """
                :type s: List[str]
                :rtype: None Do not return anything, modify s in-place instead.
                """
                str = list( str )
                left = 0
                for i in range( len( str ) ):
                        if str[i] == " ":
                                self.reverse( str, left, i - 1 )
                                left = i + 1
                        elif i == len( str ) - 1:
                                self.reverse( str, left, i )
                return ''.join( str ) 