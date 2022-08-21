// Leetcode: https://leetcode.com/problems/equal-row-and-column-pairs/

/**
 * @param { number[][] } grid
 * @return { number }
*/

var equalPairs = function( grid ) {
        let matrix = JSON.parse( JSON.stringify( grid ) );
         // Take Matrix Transpose
        for( let i=0; i<matrix.length; i++ ) {
                for( let j=0; j<matrix[i].length; j++ ) {
                        if( j > i ) {
                                let temp = matrix[i][j];
                                matrix[i][j] = matrix[j][i];
                                matrix[j][i] = temp;
                        }
                }
        }
        let count = 0;
        let m = grid.length ;
        for( let i = 0; i < m; i++ ) {
                for( let j = 0; j < m; j++ ) {
                        if( JSON.stringify( grid[i] ) === JSON.stringify( matrix[j] ) ) {
                                count++;
                        }
                }
        }
        
        return count;
};