// Leetcode: https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (string) {
    let romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    if (string.length === 1) return romanNumerals[string];

    let romansum = 0;

    for (let i = 0; i < string.length; i++) {
        if (i !== string.length - 1) {
            if (romanNumerals[string[i]] >= romanNumerals[string[i + 1]]) romansum += romanNumerals[string[i]];
            else {
                romansum += romanNumerals[string[i]] + romanNumerals[string[i + 1]] - 2 * romanNumerals[string[i]];
                i++;
            }
        } else if (i === string.length - 1 && romanNumerals[string[i]] <= romanNumerals[string[i - 1]])
            romansum += romanNumerals[string[i]];
    }

    return romansum;
};
