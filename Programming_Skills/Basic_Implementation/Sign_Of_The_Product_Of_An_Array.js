// Leetcode: https://leetcode.com/problems/sign-of-the-product-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */

var arraySign = (nums) => (nums.includes(0) ? 0 : nums.filter((num) => num < 0).length % 2 === 0 ? 1 : -1);
