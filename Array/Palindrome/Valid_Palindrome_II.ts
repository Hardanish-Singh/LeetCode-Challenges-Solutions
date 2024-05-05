// Leetcode: https://leetcode.com/problems/valid-palindrome-ii/

var validPalindrome = (s: string): boolean => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            let leftSubstring = s.slice(left, right);
            let rightSubstring = s.slice(left + 1, right + 1);
            if (
                leftSubstring === leftSubstring.split("").reverse().join("") ||
                rightSubstring === rightSubstring.split("").reverse().join("")
            ) {
                return true;
            } else {
                return false;
            }
        }
        left++;
        right--;
    }

    return true;
};
