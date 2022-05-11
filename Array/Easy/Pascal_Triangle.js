/**
 * @param {number} numRows
 * @return {number[][]}
*/

var generate = function( numRows ) {
        if( numRows == 1 ) {
                return [ [ 1 ] ];
        }
        if( numRows == 2 ) {
                return [ [ 1 ], [ 1, 1 ] ];
        }
        var result = [ [ 1 ], [ 1, 1 ] ];
        let prev = result[ 1 ];
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