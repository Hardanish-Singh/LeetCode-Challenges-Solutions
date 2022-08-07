/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

var arithmeticTriplets = function(nums, diff) {
        let numberOfArithmeticTriplets = 0;
        let hash_table = { };
        
        for( let i = 0; i < nums.length; i++ ) {
                if( !hash_table[ nums[ i ] ] ) {
                        hash_table[ nums[ i ] ] = true;
                }
        }
        
        for( let i = 0; i < nums.length; i++ ) {
                if( hash_table[ nums[ i ] + diff ] && hash_table[ nums[ i ] + diff + diff ] ) {
                        numberOfArithmeticTriplets++;
                }
        }
        
        return numberOfArithmeticTriplets;
};