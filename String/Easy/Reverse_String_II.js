// Leetcode: https://leetcode.com/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
        const regex = new RegExp(".{1," + k + "}", "g");
        const arr = s.match(regex); // split the string into an array of k parts
        let result = "";
        for (let i = 0; i < arr.length; i++) {
                result += i % 2 === 0 ? arr[i].split("").reverse().join("") : arr[i];
        }
        return result;
};
