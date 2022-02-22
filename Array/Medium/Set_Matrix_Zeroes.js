/*
 * @param { number[][] } matrix
 * @return { void } Do not return anything, modify matrix in-place instead.
*/

var setZeroes = function( matrix ) {
        
        for( let i = 0; i < matrix.length; i++ ) {
                for( let j = 0; j < matrix[i].length; j++ ) {
                        if( matrix[i][j] == 0 ) {
                                matrix[i][j] = 'X';
                                let I = 0;
                                let J = 0;
                                // Change the entire row to 0
                                while( J <= matrix[i].length - 1 ) {
                                        if( matrix[i][J] != 0 ) {
                                                matrix[i][J] = 'X';
                                        }
                                        J++;
                                }
                                // Change the entire column to 0
                                while( I <= matrix.length - 1 ) {
                                        if( matrix[I][j] != 0 ) {
                                                matrix[I][j] = 'X';
                                        }
                                        I++;
                                }
                        }
                }
        }
        
        for( let i = 0; i < matrix.length; i++ ) {
                for( let j = 0; j < matrix[i].length; j++ ) {
                        if( matrix[i][j] === 'X' ) {
                                matrix[i][j] = 0;
                        }
                }
        }
};