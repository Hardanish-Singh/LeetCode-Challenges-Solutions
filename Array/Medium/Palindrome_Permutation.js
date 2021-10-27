/*
 * @param {string} s
 * @return {boolean}
*/

var canPermutePalindrome = function( nums ) {
        let originalCounts = {};
        let odd_count = 0;
        for ( const num of nums ) {
                originalCounts[num] = originalCounts[num] ? originalCounts[num] + 1 : 1;
        }
        
        for( key1 in originalCounts ) {
                if( originalCounts[key1] % 2 !== 0 ) {
                        odd_count++;
                }
                if( odd_count > 1 ) {
                        return false;
                }
        }
        
        return true;
};