# Leetcode: https://leetcode.com/problems/reverse-words-in-a-string-ii/

# Solution 1
class Solution( object ):
        def reverse( self, str, left, right ):
                while left < right:
                        str[left], str[right] = str[right], str[left]
                        left, right = left + 1, right - 1
        
        def reverseWords( self, str ):
                """
                :type s: List[str]
                :rtype: None Do not return anything, modify str in-place instead.
                """
                str.reverse()
                left = 0
                for i in range( len( str ) ):
                        if str[i] == " ":
                                self.reverse( str, left, i - 1 )
                                left = i + 1
                        elif i == len( str ) - 1:
                                self.reverse( str, left, i )

# Solution 2
class Solution( object ):        
        def reverseWords( self, str ):
                """
                :type s: List[str]
                :rtype: None Do not return anything, modify str in-place instead.
                """
                str.reverse()
                str.append(" ")
                left = 0
                for i in range( len( str ) ):
                        if str[i] == " ":
                                part_before = str[:left]
                                part_to_reverse = str[left:i]
                                part_after = str[i:]
                                str = part_before + part_to_reverse[::-1] + part_after
                                left = i + 1
                str.pop()
