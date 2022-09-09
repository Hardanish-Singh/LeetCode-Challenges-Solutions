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
        let prevAbsDiff = Number.MAX_VALUE;
        let sum;
	
	for( let i = 0; i < nums.length-1; i++ ) {
                let leftIndex = i + 1;
		let rightIndex = nums.length - 1;
		
		while( leftIndex < rightIndex ) {
                        sum = nums[i] + nums[leftIndex] + nums[rightIndex];
                        absDiff = Math.abs( sum - target );
                        if( prevAbsDiff > absDiff ) {
                                prevAbsDiff = absDiff;
                                threeSumClosestSum = sum;
                        }
                        if( nums[leftIndex] + nums[rightIndex] + nums[i] < target ) {
				leftIndex++;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] > target ) {
				rightIndex--;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] === target ) {
                               break;
			}
		}	
		
	}
	
	return threeSumClosestSum;
}