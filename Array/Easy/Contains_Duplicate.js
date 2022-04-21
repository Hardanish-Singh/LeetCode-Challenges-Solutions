/*
 * @param { number[] } nums
 * @return { boolean }
*/

var containsDuplicate = function( nums ) {
        var countOccurrences = { };
        for( let i = 0; i < nums.length; i++ ) {
                if( countOccurrences[ nums[ i ] ] ) {
                        return true;
                }
                countOccurrences[ nums[ i ] ] = 1;
        }
        return false;
};