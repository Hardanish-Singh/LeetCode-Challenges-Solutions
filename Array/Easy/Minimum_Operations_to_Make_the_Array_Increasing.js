/*
 * @param { number[] } nums
 * @return { number }
*/
var minOperations = function( nums ) {
        let moves = 0;
        
        for( let i = 1 ; i < nums.length; i++ ) {
                if( nums[ i - 1 ] >= nums[ i ] ) {
                        let diff = Math.abs( nums[i] - nums[i-1] );
                        if( diff === 0 ) {
                                diff = 1;
                        }
                        else if( diff + nums[ i ] === nums[i-1] ) {
                                ++diff;
                        }
                        nums[ i ] += diff;
                        moves += diff;
                }
        }
        
        return moves;
};