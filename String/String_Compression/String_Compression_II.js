/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var getLengthOfOptimalCompression = function (s, k) {
        const memo = new Map();

        const backtrack = (i, lastChar, lastCharCount, k) => {
                if (k < 0) {
                        return Number.POSITIVE_INFINITY;
                }
                if (i >= s.length) {
                        return 0;
                }

                const key = `${i},${lastChar},${lastCharCount},${k}`;
                if (key in memo) {
                        return memo[key];
                }

                if (s[i] === lastChar) {
                        const incrementor = [1, 9, 99].includes(lastCharCount) ? 1 : 0;
                        memo[key] = incrementor + backtrack(i + 1, lastChar, lastCharCount + 1, k);
                } else {
                        memo[key] = Math.min(
                                1 + backtrack(i + 1, s[i], 1, k), //keep char
                                backtrack(i + 1, lastChar, lastCharCount, k - 1) //delete char
                        );
                }
                return memo[key];
        };
        return backtrack(0, "", 0, k);
};
