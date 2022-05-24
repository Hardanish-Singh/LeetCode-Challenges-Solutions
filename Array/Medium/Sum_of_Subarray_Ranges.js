/**
 * @param { number[] } nums
 * @return { number }
*/

var subArrayRanges = function( array ) {
        var sum = 0;
        for( let i = 0; i < array.length; i++ ) {
                let min = array[i];
                let max = array[i];
                let temp = array.slice();
                for( let j = i + 1; j < array.length; j++ ) {
                        min = Math.min( min, array[j] );
                        max = Math.max( max, array[j] );
                        sum += ( max - min );
                }
        }
        return sum;
};