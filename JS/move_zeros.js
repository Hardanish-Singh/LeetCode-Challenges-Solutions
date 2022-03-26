/*
        Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
        Note that you must do this in-place without making a copy of the array.

        Example 1:
                Input: nums = [0, 1, 0, 3, 12]
                Output: [1, 3, 12, 0, 0]
        
        Example 2:
                Input: nums = [0]
                Output: [0]

        Constraints:
                1) 1 <= nums.length <= 10^4
                2) -2^31 <= nums[i] <= 2^31 - 1
*/
var moveZeroes = function(nums) {
        var zeros = 0;
        for( let i = nums.length - 1; i >= 0; i-- ) {
                if( nums[i] === 0 ) {
                        zeros++;
                        nums.splice(i,1);
                }
        }
        for( let i = 0; i < zeros; i++ ) {
                nums.push(0);
        }
        return nums;
};