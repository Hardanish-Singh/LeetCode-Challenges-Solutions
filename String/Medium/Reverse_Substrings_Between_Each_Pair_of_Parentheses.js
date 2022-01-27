/*
        You are given a string s that consists of lower case English letters and brackets.
        Reverse the strings in each pair of matching parentheses, starting from the innermost one.
        Your result should not contain any brackets.

        Example 1:
                Input: s = "(abcd)"
                Output: "dcba"
        Example 2:
                Input: s = "(u(love)i)"
                Output: "iloveu"
                Explanation: The substring "love" is reversed first, then the whole string is reversed.
        Example 3:
                Input: s = "(ed(et(oc))el)"
                Output: "leetcode"
                Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

        Constraints:
                1) 1 <= s.length <= 2000
                2) s only contains lower case English characters and parentheses.
                3) It is guaranteed that all parentheses are balanced.
*/

/*
 * @param {string} s
 * @return {string}
*/

const reverseString = ( s, leftIndex, rightIndex ) => {
        while( leftIndex < rightIndex ) {
                [ s[leftIndex], s[rightIndex] ] = [ s[rightIndex], s[leftIndex] ];
                leftIndex++;
                rightIndex--;
        }
}

var reverseParentheses = function( s ) {
        s = s.split("");
        let indexes = [];
        for( let i = 0; i < s.length; i++ ) {
                if( s[i] === "(" ) {
                      indexes.push( i );  
                }
                else if( s[i] === ")" ) {
                        reverseString( s, indexes.pop() + 1, i-1 );
                }
        }
        let reversedSubString = "";
        for( let i = 0; i < s.length; i++ ) {
                if( s[i] !== "(" && s[i] !== ")") {
                        reversedSubString += s[i];
                }
        }
        return reversedSubString;
}