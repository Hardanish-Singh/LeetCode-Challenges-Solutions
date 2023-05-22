// Leetcode: https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = (s: string): number => {
        let set = new Set();
        for (const char of s) {
                set.has(char) ? set.delete(char) : set.add(char);
        }
        return set.size == 0 ? s.length : s.length - set.size + 1;
};
