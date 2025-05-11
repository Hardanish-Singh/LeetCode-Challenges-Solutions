// Leetcode: https://leetcode.com/problems/smallest-value-of-the-rearranged-number/

/*
 * @param { number } num
 * @return { number }
 */

var smallestNumber = function (num) {
    let arr = Array.from(String(num));
    if (num > 0) {
        arr.sort((a, b) => a - b);
    } else {
        arr.sort((a, b) => b - a);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            break;
        }
    }
    return Number(arr.join(""));
};
