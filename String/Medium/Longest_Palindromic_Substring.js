/*
        Given a string s, return the longest palindromic substring in s.

        Example 1:
                Input: s = "babad"
                Output: "bab"
                Explanation: "aba" is also a valid answer.
        
        Example 2:
                Input: s = "cbbd"
                Output: "bb"

        Constraints:
                1) 1 <= s.length <= 1000
                2) s consist of only digits and English letters.
*/

/*
 * @param { string } s
 * @return { string }
 */

var isPalindrome = function (str) {
    var leftPointer = 0;
    var rightPointer = str.length - 1;
    while (leftPointer < rightPointer) {
        if (str[leftPointer] !== str[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
};

var longestPalindrome = function (s) {
    var longestPalindromeString = "";
    var i;
    var j;
    var temp = "";
    var count = 0;
    var max = -1;

    for (i = 0; i < s.length; i++) {
        count = 0;
        for (j = i + 1; j < s.length; j++) {
            temp = s[i] + s.slice(i + 1, s.length - count);
            if (temp.length > max && isPalindrome(temp)) {
                longestPalindromeString = temp;
                max = temp.length;
                break;
            }
            count++;
        }
    }

    return max === -1 ? s[0] : longestPalindromeString;
};
