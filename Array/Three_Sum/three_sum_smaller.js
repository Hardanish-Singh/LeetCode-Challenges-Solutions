// Leetcode: https://leetcode.com/problems/3sum-smaller/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
*/

var threeSumSmaller = function( nums, target ) {
        nums.sort( (a, b) => a - b );
        let sum = 0;
	
	for( let i = 0; i < nums.length-1; i++ ) {
                let leftPointer = i + 1;
		let rightPointer = nums.length - 1;
		
		while( leftPointer < rightPointer ) {
                        if( nums[leftPointer] + nums[rightPointer] + nums[i] < target ) {
                                sum++;
                                // NOW WE NEED TO FIND HOW MANY PAIRS WITH leftPointer index THAT SATISFY THIS CONDITION?
                                // FIX LEFT POINTER & MOVE RIGHT POINTER
                                let start = leftPointer;
                                let end = rightPointer - 1;
                                while( start < end ) {
                                        if( nums[ i ] + nums[ start ] + nums[ end ] < target ) {
                                                sum++;
                                        } 
                                        else {
                                                break;
                                        }
                                        end--;
                                }
                                
				leftPointer++;
			}
			else{
				rightPointer--;
			}
		}	
		
	}
	return sum;
};