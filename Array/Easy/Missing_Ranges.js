/**
 * @param { number[] } nums
 * @param { number } lower
 * @param { number } upper
 * @return { string[] }
*/


var findMissingRanges = function(nums, lower, upper) {
        if( ! ( nums.includes( lower ) ) ) {
                nums.push( lower - 1 );
        }
        if( ! ( nums.includes( upper ) ) ) {
                nums.push( upper + 1 );
        }
        
        nums.sort( ( a,b) => a-b );
        
        let result = [];
        for( let i = 0; i < nums.length - 1; i++ ) {
                let prev = nums[ i ] + 1;
                let current = nums[ i + 1 ] - 1;
                if( prev > current ) {
                        continue;
                }
                if( prev === current ) {
                        result.push( String( prev ) );
                } else {
                        result.push( String( prev ) + "->" + String( current ) );
                }
        }
        return result;
};

