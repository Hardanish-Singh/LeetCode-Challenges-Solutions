// Leetcode: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {s} string
 * @return {number}
 */
var romanToInt = function (s) {
    let romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    if (s.length === 1) return romanNumerals[s];

    let romansum = 0;

    for (let i = 0; i < s.length; i++) {
        if (i !== s.length - 1) {
            if (romanNumerals[s[i]] >= romanNumerals[s[i + 1]]) romansum += romanNumerals[s[i]];
            else {
                romansum += romanNumerals[s[i]] + romanNumerals[s[i + 1]] - 2 * romanNumerals[s[i]];
                i++;
            }
        } else if (i === s.length - 1 && romanNumerals[s[i]] <= romanNumerals[s[i - 1]])
            romansum += romanNumerals[s[i]];
    }

    return romansum;
};
