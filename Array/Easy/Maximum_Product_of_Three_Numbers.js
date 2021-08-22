/*
        Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

        Example 1:
                Input: nums = [1,2,3]
                Output: 6
        Example 2:
                Input: nums = [1,2,3,4]
                Output: 24
        Example 3:
                Input: nums = [-1,-2,-3]
                Output: -6

        Constraints:
                1) 3 <= nums.length <= 10^4
                2) -1000 <= nums[i] <= 1000
*/

/*
 * @param { number[] } nums
 * @return { number }
*/

var maximumProduct = function(nums) {
        nums.sort( (a, b) => a - b );
        /*
                It could also be possible that two negative numbers lying at the left extreme end could also contribute to lead to a larger product if the third number in the triplet being considered is the largest positive number in the nums array.
        */
        let firstHalf = nums[0] * nums[1] * nums[nums.length-1];
        /*
                Another solution could be to sort the given numsnums array(in ascending order) and find out the product of the last three numbers.
        */
        let lastHalf = nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3];
        return Math.max( firstHalf , lastHalf );
};