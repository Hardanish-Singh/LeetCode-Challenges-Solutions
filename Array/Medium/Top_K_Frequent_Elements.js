/*
        Leetcode: https://leetcode.com/problems/top-k-frequent-elements/

        Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

        Example 1:
                Input: nums = [1, 1, 1, 2, 2, 3], k = 2
                Output: [1, 2]
        
        Example 2:
                Input: nums = [1], k = 1
                Output: [1]
        
        Constraints:
                1) 1 <= nums.length <= 10^5
                2) k is in the range [1, the number of unique elements in the array].
                3) It is guaranteed that the answer is unique.
*/

function sortDictionaryByValues(dict) {
        let items = Object.keys( dict )
                          .map( key => [ key, dict[ key ] ] );
        // SORT BY VALUES IN DESCENDING ORDER
        items.sort( ( first, second ) => second[ 1 ] - first[ 1 ] );
        let keys = items.map( key => key[0] );
        return keys;
} 


var topKFrequent = function(nums, k) {
        let frequencies = { 

        };
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[ i ] in frequencies ) {
                        frequencies[ nums[ i ] ] += 1;
                } else {
                        frequencies[ nums[ i ] ] = 1;
                }
        }
        let sortedObject = sortDictionaryByValues( frequencies );
        // FETCH LAST k VALUES FROM ARRAY
        return sortedObject.slice( 0, k );
};