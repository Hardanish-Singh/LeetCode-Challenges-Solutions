// Leetcode: https://leetcode.com/problems/check-if-n-and-its-double-exist/

/*
        SOLUTION 2 USING HASHMAP/DICTIONARY
*/

var checkIfExist = function( arr ) {
        let dictionary = { };
        
        for( let i = 0; i < arr.length; i++ ) {
                if( arr[i] * 2 in dictionary || arr[i] / 2 in dictionary ) {
                        return true;
                }
                dictionary[ arr[i] ] = true;
        }

        return false;
};