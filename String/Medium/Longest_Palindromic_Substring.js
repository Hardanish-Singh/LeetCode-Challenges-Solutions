// Leetcode: https://leetcode.com/problems/longest-palindromic-substring/

/*
 * @param {string} str
 * @return {boolean}
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

/*
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var longestPalindromeString = "";
    var i;
    var j;
    var currentSubstring = "";
    var count = 0;
    var max = -1;

    for (i = 0; i < s.length; i++) {
        count = 0;
        for (j = i + 1; j < s.length; j++) {
            currentSubstring = s[i] + s.slice(i + 1, s.length - count);
            if (currentSubstring.length > max && isPalindrome(currentSubstring)) {
                longestPalindromeString = currentSubstring;
                max = currentSubstring.length;
                break;
            }
            count++;
        }
    }

    return max === -1 ? s[0] : longestPalindromeString;
};
