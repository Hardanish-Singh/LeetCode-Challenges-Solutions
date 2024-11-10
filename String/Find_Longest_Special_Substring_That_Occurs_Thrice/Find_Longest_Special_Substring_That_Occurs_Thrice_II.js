// Leetcode: https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/

/**
 * @param {string} s
 * @return {number}
 */

const maximumLength = (s) => {
    const longestSubstrings = Array.from({ length: 26 }, () => new Array(3).fill(0)); // intialized a 2D array

    // For each char, we get the top 3 length. At the end, iterate over the remained top 3 length and get the results.
    for (let left = 0, right = 1; right <= s.length; right++) {
        if (s[left] === s[right]) {
            continue;
        }

        const len = right - left;
        const substrs = longestSubstrings[s.charCodeAt(left) - 97];

        left = right;

        if (len > substrs[2]) {
            substrs[0] = Math.max(substrs[2], len - 2);
            substrs[1] = Math.max(substrs[2], len - 1);
            substrs[2] = len;
        } else if (len > substrs[1]) {
            substrs[0] = Math.max(substrs[1], len - 1);
            substrs[1] = len;
        } else if (len > substrs[0]) {
            substrs[0] = len;
        }
    }

    return longestSubstrings.reduce((max, [min]) => Math.max(min || -1, max), -1);
};
