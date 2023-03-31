// Leetcode: https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */

var search = function (array, target) {
        let start = 0;
        let end = array.length - 1;

        while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                if (target === array[mid]) {
                        return mid;
                }
                if (array[start] <= array[mid]) {
                        target >= array[start] && target < array[mid] ? (end = mid - 1) : (start = mid + 1);
                } else {
                        target > array[mid] && target <= array[end] ? (start = mid + 1) : (end = mid - 1);
                }
        }

        return -1;
};
