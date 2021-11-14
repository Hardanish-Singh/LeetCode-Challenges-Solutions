/*
        Given a string s, return true if the s can be palindrome after deleting at most one character from it.

        Example 1:
                Input: s = "aba"
                Output: true
        
        Example 2:
                Input: s = "abca"
                Output: true
                Explanation: You could delete the character 'c'.
        
        Example 3:
                Input: s = "abc"
                Output: false
        
        Constraints:
                1) 1 <= s.length <= 10^5
                2) s consists of lowercase English letters.
*/

/*
 * @param {string} s
 * @return {boolean}
*/

var validPalindrome = function( s ) {
        let leftPointer = 0;
        let rightPointer = s.length - 1;

        while( leftPointer < rightPointer ) {
                if( s[leftPointer] !== s[rightPointer] ) {
                        let leftStr = s.slice( leftPointer, rightPointer );
                        let rightStr = s.slice( leftPointer + 1, rightPointer+1 );
                        if( 
                                leftStr === leftStr.split("").reverse().join("")  
                                        ||
                                rightStr === rightStr.split("").reverse().join("")  
                        ) {
                                return true;
                        }
                        else {
                                return false;
                        }
                }
                leftPointer++;
                rightPointer--;
        }

        return true;
}