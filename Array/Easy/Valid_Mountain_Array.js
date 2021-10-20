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