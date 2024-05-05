// SOLUTION 1
/**
 * @param {string} str
 * @return {boolean}
 */
var isPalindrome = (str) =>
    str.toLowerCase().replace(/[^0-9a-z]/gi, "") ===
    str
        .toLowerCase()
        .replace(/[^0-9a-z]/gi, "")
        .split("")
        .reverse()
        .join("");

// SOLUTION 2
/**
 * @param {string} str
 * @return {boolean}
 */
var isPalindrome = function (str) {
    str = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
    let leftPointer = 0;
    let rightPointer = str.length - 1;
    while (leftPointer <= rightPointer) {
        if (str[leftPointer] !== str[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
};
