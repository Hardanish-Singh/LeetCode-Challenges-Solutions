/*
        Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
        A word is a maximal substring consisting of non-space characters only.

        Example 1:
                Input: s = "Hello World"
                Output: 5
                Explanation: The last word is "World" with length 5.

        Example 2:
                Input: s = "   fly me   to   the moon  "
                Output: 4
                Explanation: The last word is "moon" with length 4.

        Example 3:
                Input: s = "luffy is still joyboy"
                Output: 6
                Explanation: The last word is "joyboy" with length 6.

        Constraints:
                1) 1 <= s.length <= 10^4
                2) s consists of only English letters and spaces ' '.
                3) There will be at least one word in s.
*/

/*
 * @param { string } s
 * @return { number }
*/
var lengthOfLastWord = function( s ) {
        s = s.trim().split(" ");
        return s[ s.length - 1 ].length;
};