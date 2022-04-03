/*
 * @param { number[] } nums
 * @return { number }
*/

var triangularSum = function( nums ) {
        if( nums.length === 1 ) {
                return nums[ 0 ];
        }
        
        var triangular = [];
        for( let i = 0; i < nums.length - 1; i++ ) {
                triangular[ i ] = ( nums[ i ] + nums[ i + 1 ] ) % 10;
        }
        
        return triangularSum( triangular );
};