// Leetcode: https://leetcode.com/problems/filter-elements-from-array/

// Solution 1
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    return arr.reduce((accumulator, currentItem, currentIndex) => {
        if (fn(currentItem, currentIndex)) {
            accumulator.push(currentItem);
        }
        return accumulator;
    }, []);
};

// Solution 2
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    return arr.flatMap((value, index) => (fn(value, index) ? [value] : []));
};
