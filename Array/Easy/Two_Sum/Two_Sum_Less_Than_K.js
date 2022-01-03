/*
        Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. 
        If no i, j exist satisfying this equation, return -1.
        
        Example 1:
                Input: nums = [34,23,1,24,75,33,54,8], k = 60
                Output: 58
                Explanation: We can use 34 and 24 to sum 58 which is less than 60.
        Example 2:
                Input: nums = [10,20,30], k = 15
                Output: -1
                Explanation: In this case it is not possible to get a pair sum less that 15.
        
        Constraints:
                1) 1 <= nums.length <= 100
                2) 1 <= nums[i] <= 1000
                3) 1 <= k <= 2000
*/

/*
	SOLUTION 1( MOST OPTIMAL )
		Time Complexity: O( nlog(n) )
		Space Complexity: O( 1 )
*/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
*/

var twoSumLessThanK = function( nums, k ) {
        nums.sort( (a, b) => a - b );
        let leftIndex = 0;
        let rightIndex = nums.length-1;
        let max = -1;
        while( leftIndex < rightIndex ) {
                if( nums[leftIndex] + nums[rightIndex] < k) {
                        max = Math.max( max, nums[leftIndex] + nums[rightIndex] );
                        leftIndex++;
                }
                else if( nums[leftIndex] + nums[rightIndex] >= k) {
                        rightIndex--;
                }
        }
        return max;
};
