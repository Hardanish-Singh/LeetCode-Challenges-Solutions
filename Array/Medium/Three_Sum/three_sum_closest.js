/*
        Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
        Return the sum of the three integers.
        You may assume that each input would have exactly one solution.

        Example 1:
                Input: nums = [-1,2,1,-4], target = 1
                Output: 2
                Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
        
        Example 2:
                Input: nums = [0,0,0], target = 1
                Output: 0
        
        Constraints:
                1) 3 <= nums.length <= 1000
                2) -1000 <= nums[i] <= 1000
                3) -10^4 <= target <= 10^4
*/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
*/

function threeSumClosest( nums, target ) {
	nums.sort( (a, b) => a - b );
        let threeSumClosestSum = 0;
        let absDiff;
        let prevAbsDiff = null;
        let min;
	
	for( let i=0; i<nums.length-1; i++ ) {
                if( nums[i] === nums[i-1] ) {
                        continue;
                }
                let leftIndex = i + 1;
		let rightIndex = nums.length - 1;
		
		while( leftIndex < rightIndex ) {
                        if( nums[leftIndex] === nums[leftIndex-1] && leftIndex != i + 1 ) {
                                leftIndex++;
                                continue;
                        }
                        if( nums[rightIndex] === nums[rightIndex+1] && rightIndex != nums.length - 1 ) {
                                rightIndex--;
                                continue;
                        }
                        min = nums[i] + nums[leftIndex] + nums[rightIndex];
                        absDiff = Math.abs( min - target );
                        if( prevAbsDiff == null || prevAbsDiff > absDiff ) {
                                prevAbsDiff = absDiff;
                                threeSumClosestSum = min;
                        }
                        if( nums[leftIndex] + nums[rightIndex] + nums[i] < target) {
				leftIndex++;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] > target) {
				rightIndex--;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] === target) {
                               return min;
			}
		}	
		
	}
	
	return threeSumClosestSum;
}