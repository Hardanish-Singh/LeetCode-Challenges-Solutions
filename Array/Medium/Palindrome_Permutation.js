/*
        Given a string s, return true if a permutation of the string could form a palindrome.

        Example 1:
                Input: s = "code"
                Output: false
        Example 2:
                Input: s = "aab"
                Output: true
        Example 3:
                Input: s = "carerac"
                Output: true

        Constraints:
                1) 1 <= s.length <= 5000
                2) s consists of only lowercase English letters.

        Hint:
                If a String is a palindrome, following of the two conditions must hold
                        1) All characters should have even character count
                        or
                        2) All characters except the one character which is in the middle, should have even character count. The one character which is in the middle will have odd character count of 1.
*/

/*
 * @param {string} s
 * @return {boolean}
*/

var canPermutePalindrome = function( nums ) {
        let originalCounts = {};
        let odd_count = 0;
        for ( const num of nums ) {
                originalCounts[num] = originalCounts[num] ? originalCounts[num] + 1 : 1;
        }
        
        for( key1 in originalCounts ) {
                if( originalCounts[key1] % 2 !== 0 ) {
                        odd_count++;
                }
                if( odd_count > 1 ) {
                        return false;
                }
        }
        
        return true;
};