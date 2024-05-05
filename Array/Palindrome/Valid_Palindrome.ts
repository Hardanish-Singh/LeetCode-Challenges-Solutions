// Leetcode: https://leetcode.com/problems/valid-palindrome/

// SOLUTION 1
var isPalindrome = (str: string): boolean =>
    str.toLowerCase().replace(/[^0-9a-z]/gi, "") ===
    str
        .toLowerCase()
        .replace(/[^0-9a-z]/gi, "")
        .split("")
        .reverse()
        .join("");

// SOLUTION 2
var isPalindrome = (str: string): boolean => {
    str = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
