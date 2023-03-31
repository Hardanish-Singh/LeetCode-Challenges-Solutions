// Leetcode: https://leetcode.com/problems/search-in-rotated-sorted-array/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (array, target) {
        let startIndex = 0;
        let endIndex = array.length - 1;

        while (startIndex <= endIndex) {
                let middleIndex = Math.floor((startIndex + endIndex) / 2);
                if (target === array[middleIndex]) {
                        return middleIndex;
                }
                if (array[startIndex] <= array[middleIndex]) {
                        if (target < array[middleIndex] && target >= array[startIndex]) {
                                endIndex = middleIndex - 1;
                        } else {
                                startIndex = middleIndex + 1;
                        }
                } else {
                        if (target > array[middleIndex] && target <= array[endIndex]) {
                                startIndex = middleIndex + 1;
                        } else {
                                endIndex = middleIndex - 1;
                        }
                }
        }

        return -1;
};
