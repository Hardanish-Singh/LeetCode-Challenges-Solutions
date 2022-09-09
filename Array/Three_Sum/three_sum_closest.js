// Leetcode: https://leetcode.com/problems/3sum-closest/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
*/

function threeSumClosest( nums, target ) {
	nums.sort( (a, b) => a - b );
        let threeSumClosestSum = 0;
        let currentAbsDiff;
        let prevAbsDiff = Number.MAX_VALUE;
	
	for( let i = 0; i < nums.length-1; i++ ) {
                let leftIndex = i + 1;
		let rightIndex = nums.length - 1;
		
		while( leftIndex < rightIndex ) {
                        let sum = nums[i] + nums[leftIndex] + nums[rightIndex];
                        currentAbsDiff = Math.abs( sum - target );
                        if( currentAbsDiff < prevAbsDiff ) {
                                prevAbsDiff = currentAbsDiff;
                                threeSumClosestSum = sum;
                        }
                        if( nums[leftIndex] + nums[rightIndex] + nums[i] < target ) {
				leftIndex++;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] > target ) {
				rightIndex--;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] === target ) {
                               return sum;
			}
		}	
		
	}
	
	return threeSumClosestSum;
}