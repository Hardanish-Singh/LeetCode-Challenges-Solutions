/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
        const arr = s.match(new RegExp(".{1," + k + "}", "g")); // split the string into an array of k parts
        let result = "";
        for (let i = 0; i < arr.length; i++) {
                result += i % 2 === 0 ? arr[i].split("").reverse().join("") : arr[i];
        }
        return result;
};
