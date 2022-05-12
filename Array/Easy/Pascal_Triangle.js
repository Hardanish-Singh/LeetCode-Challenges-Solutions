/*
        Given an integer numRows, return the first numRows of Pascal's triangle.

        In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

        Example 1:
                Input: numRows = 5
                Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
        Example 2:
                Input: numRows = 1
                Output: [[1]]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
*/

var generate = function( numRows ) {
        if( numRows == 1 ) {
                return (
                        [
                                [ 1 ] 
                        ]
                );
        }
        if( numRows == 2 ) {
                return (
                        [ 
                                [ 1 ], 
                                [ 1, 1 ] 
                        ]
                );
        }
        var result = [
                        [ 1 ], 
                        [ 1, 1 ] 
                ];
        var prev = result[ 1 ];
        for( let i = 3; i <= numRows; i++ ) {
                let temp = new Array( i ).fill( 1 );
                let index1 = 0;
                let index2 = 1;
                for( let j = 1; j < temp.length - 1; j++ ) {
                        temp[j] = prev[ index1++ ] + prev[ index2++ ];
                }
                prev = temp;
                result.push( temp );
        }
        return result;
};