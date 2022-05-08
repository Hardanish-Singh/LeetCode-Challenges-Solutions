/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
*/

var rotate = function(nums, k) {
        while( k > nums.length ) {
                k -= nums.length;
        }
        let temp = [];
        var index = 0;
        for( let i = nums.length - k; i < nums.length; i++ ) {
                temp[index++] = nums[i];
        }
        for( let i = 0; i < nums.length - k; i++ ) {
                temp[index++] = nums[i];
        }
        for( let i = 0; i < nums.length; i++ ) {
                nums[i] = temp[i];
        }
};