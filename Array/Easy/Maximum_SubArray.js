/*
        Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
        A subarray is a contiguous part of an array.

        Example 1:
                Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
                Output: 6
                Explanation: [4,-1,2,1] has the largest sum = 6.
        
        Example 2:
                Input: nums = [1]
                Output: 1
        
        Example 3:
                Input: nums = [5,4,-1,7,8]
                Output: 23

        Constraints:
                1) 1 <= nums.length <= 3 * 10^4
                2) -10^5 <= nums[i] <= 10^5

*/

/*
        SOLUTION 1: BRUTE FORCE APPROACH
                        Time Complexity: O(N^2), where N is the length of nums.
                        Space Complexity: O(1)
*/

/*
 * @param { number[] } nums
 * @return { number }
*/
var maxSubArray = function( nums ) {
        let sum = Number.NEGATIVE_INFINITY;
        for( let i = 0; i < nums.length; i++ ) {
                let temp = 0;
                for( let j = i; j < nums.length; j++ ) {
                        temp += nums[j];
                        sum = Math.max( sum, temp );
                        if( temp < 0 ) {
                                break;
                        }
                }
        }
        return sum;
};

/*
        SOLUTION 2: DYNAMIC PROGRAMMING, KADANE'S ALGORITHM
                        Time Complexity: O(N), where N is the length of nums.
                        Space Complexity: O(1)
*/

/*
 * @param { number[] } nums
 * @return { number }
*/
var maxSubArray = function( nums ) {
        let max = nums[0];
        for( let i=1; i<nums.length; i++ ) {
                nums[i] = Math.max( nums[i], nums[i] + nums[i-1] );
                max = Math.max( max, nums[i] );
        } 
        return max;
};