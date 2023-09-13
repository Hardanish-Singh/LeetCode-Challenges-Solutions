// Leetcode: https://leetcode.com/problems/partition-array-according-to-given-pivot/

var pivotArray = function (nums: Array<number>, pivot: number): Array<number> {
        let leftElements: Array<number> = [];
        let equalElements: Array<number> = [];
        let rightElements: Array<number> = [];
        let result: Array<number> = [];

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
