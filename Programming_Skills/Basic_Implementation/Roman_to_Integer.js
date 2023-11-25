// Leetcode: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanValues[s[i]];
        const nextVal = romanValues[s[i + 1]];

        if (nextVal > currentVal) {
            result += nextVal - currentVal;
            i++; // Skip the next character since it's already considered
        } else {
            result += currentVal;
        }
    }

    return result;
};
