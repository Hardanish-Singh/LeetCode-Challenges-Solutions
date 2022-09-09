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
                let leftIndex = i + 1;
		let rightIndex = nums.length - 1;
		
		while( leftIndex < rightIndex ) {
                        if( nums[leftIndex] + nums[rightIndex] + nums[i] < target ) {
                                sum++;
                                
                                // FIX LEFT POINTER & MOVE RIGHT POINTER
                                let start = leftIndex;
                                let end = rightIndex - 1;
                                while( start < end ) {
                                        if( nums[ i ] + nums[ start ] + nums[ end ] < target ) {
                                                sum++;
                                        } 
                                        else{
                                                break;
                                        }
                                        end--;
                                }
                                
				leftIndex++;
			}
			else{
				rightIndex--;
			}
		}	
		
	}
	return sum;
};