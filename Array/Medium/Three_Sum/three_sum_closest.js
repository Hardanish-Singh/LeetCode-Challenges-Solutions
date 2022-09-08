// Leetcode: https://leetcode.com/problems/3sum-closest/

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
                        if( nums[leftIndex] + nums[rightIndex] + nums[i] < target ) {
				leftIndex++;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] > target ) {
				rightIndex--;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] === target ) {
                               return min;
			}
		}	
		
	}
	
	return threeSumClosestSum;
}