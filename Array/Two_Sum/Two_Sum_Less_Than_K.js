// Leetcode: https://leetcode.com/problems/two-sum-less-than-k/

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

var twoSumLessThanK = function (nums, k) {
        nums.sort((a, b) => a - b);
        let leftIndex = 0;
        let rightIndex = nums.length - 1;
        let maximumSumClosestToK = -1;

        while (leftIndex < rightIndex) {
                if (nums[leftIndex] + nums[rightIndex] < k) {
                        maximumSumClosestToK = Math.max(maximumSumClosestToK, nums[leftIndex] + nums[rightIndex]);
                        leftIndex++;
                } else if (nums[leftIndex] + nums[rightIndex] >= k) {
                        rightIndex--;
                }
        }

        return maximumSumClosestToK;
};
