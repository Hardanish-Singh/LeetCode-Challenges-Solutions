// Leetcode: https://leetcode.com/problems/3sum/

/**
 * @param { number[] } nums
 * @return { number[][] }
*/

function threeSum( nums: Array<number> ): Array<Array<number>> {
	nums.sort( (a, b) => a - b );
	let triplets: Array<Array<number>> = [];
        let target: number = 0;
	let leftIndexes = { };
	for( let i: number = 0; i<nums.length; i++ ) {
                if( nums[i] == nums[i-1] ) {
                        continue;
                }
		leftIndexes[i] = true;
		let leftIndex: number = i+1;
		let rightIndex: number = nums.length-1;
		
		while( leftIndex < rightIndex ) {
                        if( nums[leftIndex] === nums[leftIndex-1] && !( leftIndexes[ leftIndex - 1 ] ) ) {
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