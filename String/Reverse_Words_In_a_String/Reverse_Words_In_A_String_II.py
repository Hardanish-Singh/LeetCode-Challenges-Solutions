# Leetcode: https://leetcode.com/problems/reverse-words-in-a-string-ii/

# Solution 1
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
