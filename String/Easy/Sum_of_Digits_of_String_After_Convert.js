// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

/*
 * @param { string } s
 * @param { number } k
 * @return { number }
 */

// SOLUTION 1
var getLucky = function (s, k) {
    let numStr = [...s].map((ch) => ch.charCodeAt(0) - 96).join("");
    for (let i = 0; i < k; i++) {
        numStr = [...numStr].reduce((sum, d) => sum + Number(d), 0).toString();
    }
    return Number(numStr);
};

/*
 * @param { string } s
 * @param { number } k
 * @return { number }
 */

// SOLUTION 2
var getLucky = function (s, k) {
    let string = "";
    for (let i = 0; i < s.length; i++) {
        string += s.charCodeAt(i) - 96;
    }

    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum = 0;
        for (let j = 0; j < string.length; j++) {
            sum += Number(string[j]);
        }
        string = String(sum);
    }

    return sum;
};
