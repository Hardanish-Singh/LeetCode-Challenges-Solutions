/**
 * @param {number} rowIndex
 * @return {number[]}
*/

var getRow = function(numRows) {
        if( numRows == 0 ) {
                return [1];
        }
        if( numRows == 1 ) {
                return [1,1];
        }
        var result = [ [ 1 ], [ 1, 1 ] ];
        let prev = result[ 1 ];
        for( let i = 2; i <= numRows; i++ ) {
                let temp = new Array( i + 1 ).fill( 1 );
                let index1 = 0;
                let index2 = 1;
                for( let j = 1; j < temp.length - 1; j++ ) {
                        temp[j] = prev[ index1++ ] + prev[ index2++ ];
                }
                prev = temp;
                result.push( temp );
        }
        return result[numRows];
};