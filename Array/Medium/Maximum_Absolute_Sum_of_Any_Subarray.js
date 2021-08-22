/*
        You are given an integer array nums.
        Return the maximum absolute sum of any (possibly empty) subarray of nums.
        Note that abs(x) is defined as follows:
                If x is a negative integer, then abs(x) = -x.
                If x is a non-negative integer, then abs(x) = x.

        Example 1:
                Input: nums = [1,-3,2,3,-4]
                Output: 5
                Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.

        Example 2:
                Input: nums = [2,-5,1,-4,3,-2]
                Output: 8
                Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.
 
        Constraints:
                1) 1 <= nums.length <= 10^5
                2) -10^4 <= nums[i] <= 10^4
*/

/*
 * @param { number[] } nums
 * @return { number }
*/

/*
        SOLUTION 1: DYNAMIC PROGRAMMING, KADANE'S ALGORITHM
                        Time Complexity: O(N), where N is the length of nums.
                        Space Complexity: O(1)
                   
                        Here the idea is to run Kadane Algorithm twice 
                        Once calculating the max sum & Once calculating the min sum
*/

// APPROACH 1
var maxAbsoluteSum = function( nums ) {
        let max = maxSubarray = min = minSubarray = nums[0];
        for( let i=1; i<nums.length; i++ ) {
                maxSubarray = Math.max( nums[i], nums[i] + maxSubarray );
                max = Math.max( max, maxSubarray );
                minSubarray = Math.min( nums[i], nums[i] + minSubarray );
                min = Math.min( min, minSubarray );
        }
        return Math.max( max, Math.abs( min ) );
};

/*
 * @param { number[] } nums
 * @return { number }
*/

// APPROACH 2
var maxAbsoluteSum = function( nums ) {
        if( nums.length === 1 ) {
                return Math.max( nums[0], Math.abs( nums[0] ) );
        }
        let max, maxSubarray, min, minSubarray;
        for( let i=0; i<nums.length-1; i++ ) {
                if( i === 0 ) {
                        minSubarray = maxSubarray = min = max = nums[i];
                }
                maxSubarray = Math.max( nums[i+1], nums[i+1] + maxSubarray );
                max = Math.max( max, maxSubarray );
                minSubarray = Math.min( nums[i+1], nums[i+1] + minSubarray );
                min = Math.min( min, minSubarray );
        }
        return Math.max( max, Math.abs( min ) );
};