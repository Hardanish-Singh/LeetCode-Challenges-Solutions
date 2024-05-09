// Leetcode: https://leetcode.com/problems/two-sum-less-than-k/

/*
	SOLUTION 1
		Time Complexity: O( nlog(n) )
		Space Complexity: O( 1 )
*/

const twoSumLessThanK = (nums: number[], k: number): number => {
    nums.sort((a, b) => a - b);
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    let maxSumClosestToK = -1;

    while (leftIndex < rightIndex) {
        const sum = nums[leftIndex] + nums[rightIndex];
        if (sum < k) {
            maxSumClosestToK = Math.max(maxSumClosestToK, sum);
            leftIndex++;
        } else {
            rightIndex--;
        }
    }

    return maxSumClosestToK;
};
