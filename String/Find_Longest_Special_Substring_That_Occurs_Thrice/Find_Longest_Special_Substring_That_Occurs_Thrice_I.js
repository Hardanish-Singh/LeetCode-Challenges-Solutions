// Leetcode: https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/

/**
 * @param {string} s
 * @return {number}
 */

const maximumLength = (s) => {
    let max = -1;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substring = s.substring(i, j);
            const isSpecial = (substring) => new Set(substring).size === 1;
            if (isSpecial(substring)) {
                map.set(substring, (map.get(substring) || 0) + 1);
            }
        }
    }

    for (const [substring, count] of map.entries()) {
        if (count >= 3) {
            max = Math.max(max, substring.length);
        }
    }

    return max;
};
