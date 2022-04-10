/*
        Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.

        As the answer can be very large, return it modulo 10^9 + 7.

        Example 1:
                Input: arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], target = 8
                Output: 20
                Explanation: 
                        Enumerating by the values (arr[i], arr[j], arr[k]):
                        (1, 2, 5) occurs 8 times;
                        (1, 3, 4) occurs 8 times;
                        (2, 2, 4) occurs 2 times;
                        (2, 3, 3) occurs 2 times.
        
        Example 2:
                Input: arr = [1, 1, 2, 2, 2, 2], target = 5
                Output: 12
                Explanation: 
                        arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
                        We choose one 1 from [1,1] in 2 ways,
                        and two 2s from [2, 2, 2, 2] in 6 ways.

        Constraints:
                1) 3 <= arr.length <= 3000
                2) 0 <= arr[i] <= 100
                3) 0 <= target <= 300
*/

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
                                //FIX RIGHT POINTER
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