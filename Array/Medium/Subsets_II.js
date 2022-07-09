/*
        Leetcode: https://leetcode.com/problems/subsets-ii/

        Given an integer array nums of unique elements, return all possible subsets (the power set).
        The solution set must not contain duplicate subsets. Return the solution in any order.

        Example 1:
                Input: nums = [1,2,3]
                Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
        Example 2:
                Input: nums = [0]
                Output: [[], [0]]
        
        Constraints:
                1) 1 <= nums.length <= 10
                2) -10 <= nums[i] <= 10
*/

var subsetsWithDup = function( array ) {
        if( array.length === 0 ) {
		return [ [] ];
	}

        array.sort( (a, b) => a - b );
	
        var powerSets = [  ];
        var i = 0;
        for( i = 0; i < array.length; i++ ) {
                powerSets.push( [ array[ i ], i ] );
        }
        
        i = 0;
        while( i !== powerSets.length - 1 ) {
                let powerSet = powerSets[ i ].slice( 0, powerSets[ i ].length - 1 );
                index = powerSets[ i ][ powerSets[ i ].length - 1 ];
                
                for( let j = index + 1; j < array.length; j++ ) {
                        powerSets.push( [ ...powerSet, array[j], j ] );
                }
                
                i++;
        }

        let hash_map = {
                
        };

        for( let i = 0; i < powerSets.length; i++ ) {
                let powerSet = powerSets[ i ].slice( 0, powerSets[ i ].length - 1 );
                if( hash_map[ powerSet ] ) {
                        continue;
                }
                else {
                        hash_map[ powerSet ] = true;
                }
        }

        let result = [];
        for( const key of Object.keys( hash_map ) ) {
                result.push( key.split(",").map( Number ) );
        }
        result.push( [] );
        return result;
}