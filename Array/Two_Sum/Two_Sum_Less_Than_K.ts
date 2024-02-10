// Leetcode: https://leetcode.com/problems/two-sum-less-than-k/

/*
	SOLUTION 1( MOST OPTIMAL )
		Time Complexity: O( nlog(n) )
		Space Complexity: O( 1 )
*/

const twoSumLessThanK = (nums: number[], k: number): number => {
    nums.sort((a, b) => a - b);
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    let maximumSumClosestToK = -1;

    while (leftIndex < rightIndex) {
        let sum = nums[leftIndex] + nums[rightIndex];
        if (sum < k) {
            maximumSumClosestToK = Math.max(maximumSumClosestToK, sum);
            leftIndex++;
        } else if (sum >= k) {
            rightIndex--;
        }
    }

    return maximumSumClosestToK;
};
