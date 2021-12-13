/*
        Given an integer array nums and an integer k, return the kth largest element in the array.
        Note that it is the kth largest element in the sorted order, not the kth distinct element.

        Example 1:
                Input: nums = [3, 2, 1, 5, 6, 4], k = 2
                Output: 5
        Example 2:
                Input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
                Output: 4

        Constraints:
                1) 1 <= k <= nums.length <= 10^4
                2) -10^4 <= nums[i] <= 10^4
*/

/*
 * @param { number[] } nums
 * @param { number } k
 * @return { number }
*/
 var findKthLargest = function(nums, k) {
        nums.sort( ( a, b ) => a - b);
        return nums[nums.length-k];
};