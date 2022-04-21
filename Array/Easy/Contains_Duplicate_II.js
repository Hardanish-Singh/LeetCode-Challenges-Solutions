/*
 * @param { number[] } nums
 * @param { number } k
 * @return { boolean }
*/
var containsNearbyDuplicate = function(nums, k) {
        // for( let i = 0; i < nums.length - 1; i++ ) {
        //         for( let j = i + 1; j < nums.length; j++ ) {
        //                 if( nums[i] === nums[j] && Math.abs( i - j ) <= k ) {
        //                         return true;
        //                 }
        //         }
        // }
        // return false;
        var countOccurrences = { };
        var i;
        for( i = 0; i < nums.length; i++ ) {
                if( nums[ i ] in countOccurrences ) {
                        if( Math.abs( i - countOccurrences[ nums[ i ] ] ) <= k  ) {
                                return true;
                        } else {
                                countOccurrences[ nums[ i ] ] = i;   
                        }
                } else {
                        countOccurrences[ nums[ i ] ] = i;
                }
        }
        return false;
};