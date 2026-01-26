/**
 * @param {number[]} nums
 * @return {boolean}
 */

const isMonotonic = (nums) => {
    /* 
        The problem can be solved by checking if the array is in increasing order or in decreasing order.
        If array is either in increasing or decreasing order, then it is monotonic array
        else it is NOT monotonic
    */
    const isIncreasing = nums.every((num, index) => index === 0 || num >= nums[index - 1]);
    const isDecreasing = nums.every((num, index) => index === 0 || num <= nums[index - 1]);
    return isIncreasing || isDecreasing;
};
