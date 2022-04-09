/*
 * @param { number[] } arr
 * @param { number } target
 * @return { number }
*/

var threeSumMulti = function( nums, target ) {
        nums.sort( (a, b) => a - b );
        let count = 0;
        
	for( let i = 0; i<nums.length; i++ ) {
		let leftIndex = i+1;
		let rightIndex = nums.length-1;
		
		while( leftIndex < rightIndex ) {
                        if( nums[leftIndex] + nums[rightIndex] + nums[i] < target) {
				leftIndex++;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] > target) {
				rightIndex--;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] === target) {
                                if( nums[leftIndex] === nums[rightIndex] && rightIndex - leftIndex > 1 ) {
                                        let n = ( rightIndex - leftIndex ) + 1;
                                        count += Math.floor( ( n * (n - 1) ) / 2 ) ;
                                        break;
                                }
                                
                                count++;
                                //FIX LEFT POINTER
                                let start = leftIndex;
                                let end = rightIndex - 1;
                                while( start < end ) {
                                        if( nums[ i ] + nums[ start ] + nums[ end ] === target ) {
                                                count++;
                                        } else if( nums[ i ] + nums[ start ] + nums[ end ] < target ) {
                                                break;
                                        }
                                        end--;
                                }
        
                                start = leftIndex + 1;
                                end = rightIndex;
                                
                                while( start < end ) {
                                        if( nums[ i ] + nums[ start ] + nums[ end ] === target ) {
                                                count++;
                                        } else if( nums[ i ] + nums[ start ] + nums[ end ] > target ) {
                                                break;
                                        }
                                        start++;
                                }
                                
				leftIndex++;
				rightIndex--;
			}
		}
	}
        let m = 1000000007;
	return count % m;
};