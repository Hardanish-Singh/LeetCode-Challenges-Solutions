/*
 * @param { number[] } nums
 * @return { number[] }
*/

var findDisappearedNumbers = function(nums) {
        var result = [];
        var hash_table = { };
        for( let i = 0; i < nums.length; i++ ) {
                if( hash_table[ nums[i] ] ) {
                        continue;
                } else {
                        hash_table[ nums[i] ] = true;
                }
        }
        for( let i = 1; i <= nums.length; i++ ) {
                if( ! ( hash_table[ i ] ) ) {
                        result.push( i );
                }
        }
        return result;
};