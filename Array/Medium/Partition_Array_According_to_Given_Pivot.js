// Leetcode: https://leetcode.com/problems/partition-array-according-to-given-pivot/

/**
 * @param { number[] } nums
 * @param { number } pivot
 * @return { number[] }
 */

var pivotArray = function (nums, pivot) {
        let leftElements = [];
        let equalElements = [];
        let rightElements = [];
        let result = [];

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] < pivot) {
                        leftElements.push(nums[i]);
                } else if (nums[i] === pivot) {
                        equalElements.push(nums[i]);
                } else {
                        rightElements.push(nums[i]);
                }
        }

        result.push(...leftElements, ...equalElements, ...rightElements);
        return result;
};
