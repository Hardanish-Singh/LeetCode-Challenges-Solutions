// Leetcode: https://leetcode.com/problems/3sum-with-multiplicity/

/**
 * @param { number[] } arr
 * @param { number } target
 * @return { number }
*/

// SOLUTION 1 ( USING THREE POINTER )
var threeSumMulti = function( nums, target ) {
        nums.sort( (a, b) => a - b );
        let count = 0;
        
	for( let i = 0; i < nums.length; i++ ) {
		let leftPointer = i + 1;
		let rightPointer = nums.length - 1;
		
		while( leftPointer < rightPointer ) {
                        if( nums[leftPointer] + nums[rightPointer] + nums[i] < target ) {
				leftPointer++;
			}
			else if( nums[leftPointer] + nums[rightPointer] + nums[i] > target ) {
				rightPointer--;
			}
			else if( nums[leftPointer] + nums[rightPointer] + nums[i] === target ) {
                                if( nums[leftPointer] === nums[rightPointer] ) {
                                        let n = rightPointer - leftPointer;
                                        count += Math.floor( ( n * (n + 1) ) / 2 ) ;
                                        break;
                                }
                                
                                count++;

                                // FIX LEFT POINTER & MOVE RIGHT POINTER
                                let start = leftPointer;
                                let end = rightPointer - 1;
                                while( start < end ) {
                                        if( nums[ i ] + nums[ start ] + nums[ end ] === target ) {
                                                count++;
                                        } else if( nums[ i ] + nums[ start ] + nums[ end ] < target ) {
                                                break;
                                        }
                                        end--;
                                }

                                // FIX RIGHT POINTER & MOVE LEFT POINTER
                                start = leftPointer + 1;
                                end = rightPointer;
                                while( start < end ) {
                                        if( nums[ i ] + nums[ start ] + nums[ end ] === target ) {
                                                count++;
                                        } else if( nums[ i ] + nums[ start ] + nums[ end ] > target ) {
                                                break;
                                        }
                                        start++;
                                }
                                
				leftPointer++;
				rightPointer--;
			}
		}
	}
        let mod = 1000000007;
	return count % mod;
};