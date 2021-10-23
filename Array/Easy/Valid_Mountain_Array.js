/*
        Given an array of integers arr, return true if and only if it is a valid mountain array.
        
        Recall that arr is a mountain array if and only if:
                1) arr.length >= 3
                2) There exists some i with 0 < i < arr.length - 1 such that:
                        2a) arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
                        2b) arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
        
        Example 1:
                Input: arr = [2,1]
                Output: false
        Example 2:
                Input: arr = [3,5,5]
                Output: false
        Example 3:
                Input: arr = [0,3,2,1]
                Output: true
        Constraints:
                1) 1 <= arr.length <= 104
                2) 0 <= arr[i] <= 104
*/

/*
 * @param {number[]} arr
 * @return {boolean}
*/
var validMountainArray = function( arr ) {
        if( arr.length < 3 ) {
                return false;
        }
        let increasing = true;
        let decreasing = false;
        
        for( let i=0; i<arr.length; i++ ) {
                if( arr[i] === arr[i+1] ) {
                        return false;
                }
                if( arr[i] > arr[i+1] && increasing == true ) {
                        return false;
                }
                if( arr[i] < arr[i+1] && increasing === true && decreasing === false ) {
                        increasing = false;
                }
                if( arr[i] > arr[i+1] && decreasing == false ) {
                        decreasing = true;
                        increasing = false;
                }
                if( arr[i] < arr[i+1] && decreasing == true && increasing == false ) {
                        return false;
                }
        }
        if( decreasing == false ) {
                return false;
        }
        return true;
};