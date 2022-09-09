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
                let leftPointer = i + 1;
		let rightPointer = nums.length - 1;
		
		while( leftPointer < rightPointer ) {
                        let sum = nums[i] + nums[leftPointer] + nums[rightPointer];
                        currentAbsDiff = Math.abs( sum - target );
                        if( currentAbsDiff < prevAbsDiff ) {
                                prevAbsDiff = currentAbsDiff;
                                threeSumClosestSum = sum;
                        }
                        if( nums[leftPointer] + nums[rightPointer] + nums[i] < target ) {
				leftPointer++;
			}
			else if( nums[leftPointer] + nums[rightPointer] + nums[i] > target ) {
				rightPointer--;
			}
			else if( nums[leftPointer] + nums[rightPointer] + nums[i] === target ) {
                               return sum;
			}
		}	
		
	}
	
	return threeSumClosestSum;
}