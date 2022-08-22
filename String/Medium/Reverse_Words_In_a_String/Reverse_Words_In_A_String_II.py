class Solution( object ):
        def reverse( self, s, left, right ):
                while left < right:
                        s[left], s[right] = s[right], s[left]
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