// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

/*
 * @param { string } s
 * @param { number } k
 * @return { number }
 */

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
