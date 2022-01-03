/*
	Given an integer array nums
	Return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
	
	Notice that the solution set must not contain duplicate triplets.

	Example 1:
		Input: nums = [-1,0,1,2,-1,-4]
		Output: [[-1,-1,2],[-1,0,1]]
	Example 2:
		Input: nums = []
		Output: []
	Example 3:
		Input: nums = [0]
		Output: []

	Constraints:
		1) 0 <= nums.length <= 3000
		2) -10^5 <= nums[i] <= 10^5
*/

/**
 * @param { number[] } nums
 * @return { number[][] }
*/

function threeSum( nums: Array<number> ): Array<Array<number>> {
	nums.sort( (a, b) => a - b );
	let triplets: Array<Array<number>> = [];
        let target: number = 0;
	for( let i: number = 0; i<nums.length; i++ ) {
                if( nums[i] == nums[i-1] ) {
                        continue;
                }
		let leftIndex: number = i+1;
		let rightIndex: number = nums.length-1;
		
		while( leftIndex < rightIndex ){
                        if( nums[leftIndex] === nums[leftIndex-1] && leftIndex != i + 1 ) {
                                leftIndex++;
                        }
                        else if( nums[rightIndex] === nums[rightIndex+1] ) {
                                rightIndex--;
                        }
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] < target) {
				leftIndex++;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] > target) {
				rightIndex--;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] === target) {
				triplets.push( [ nums[i], nums[leftIndex], nums[rightIndex] ] );
				leftIndex++;
				rightIndex--;
			}
		}	
		
	}
	return triplets;
}