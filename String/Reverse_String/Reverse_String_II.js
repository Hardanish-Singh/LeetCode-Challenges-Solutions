// Leetcode: https://leetcode.com/problems/reverse-string-ii/

/**
 * @param { string } s
 * @param { number } k
 * @return { string }
 */

var reverseStr = function (s, k) {
        const regex = new RegExp(".{1," + k + "}", "g");
        const array = s.match(regex); // Regex to split the string into an array of k parts
        let result = "";
        for (let i = 0; i < array.length; i++) {
                result += i % 2 === 0 ? array[i].split("").reverse().join("") : array[i];
        }
        return result;
};
