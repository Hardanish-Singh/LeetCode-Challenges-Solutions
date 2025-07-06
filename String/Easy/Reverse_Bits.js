// Leetcode: https://leetcode.com/problems/reverse-bits/

/**
 * @param { number } n
 * @return { number }
 */

var reverseBits = function (n) {
    let str = (n >>> 0).toString(2);
    str = str.padStart(32, "0");
    str = str.split("").reverse().join("");
    str = parseInt(str, 2);
    return str;
};
