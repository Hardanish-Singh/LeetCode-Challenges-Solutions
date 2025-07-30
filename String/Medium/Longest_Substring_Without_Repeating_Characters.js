// Leetcode: https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Solution 1: Sliding Window Approach
/*
 * @param {string} s
 * @return { number}
 */
const lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let left = 0;
    let right = 0;
    let max = 0;

    while (right < s.length) {
        if (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        } else {
            set.add(s[right]);
            right++;
        }
        max = Math.max(max, set.size);
    }

    return max;
};
