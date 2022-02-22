/*
        Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
        You must do it in place.

        Example 1:
                Input: matrix = [
                                        [1, 1, 1],
                                        [1, 0, 1],
                                        [1, 1, 1]
                                ]
                Output: 
                                [
                                        [1, 0, 1],
                                        [0, 0, 0],
                                        [1, 0, 1]
                                ]
        Example 2:
                Input: matrix = [
                                        [0, 1, 2, 0],
                                        [3, 4, 5, 2],
                                        [1, 3, 1, 5]
                                ]
                Output:         [
                                        [0, 0, 0, 0],
                                        [0, 4, 5, 0],
                                        [0, 3, 1, 0]
                                ]
        Constraints:
                1) m == matrix.length
                2) n == matrix[0].length
                3) 1 <= m, n <= 200
                4) -2^31 <= matrix[i][j] <= 2^31 - 1
*/

/*
 * @param { number[][] } matrix
 * @return { void } Do not return anything, modify matrix in-place instead.
*/

var setZeroes = function( matrix ) {
        for( let i = 0; i < matrix.length; i++ ) {
                for( let j = 0; j < matrix[i].length; j++ ) {
                        if( matrix[i][j] == 0 ) {
                                matrix[i][j] = 'X';
                                let row = 0;
                                let column = 0;
                                // Change the entire row to 0
                                while( column <= matrix[i].length - 1 ) {
                                        if( matrix[i][column] != 0 ) {
                                                matrix[i][column] = 'X';
                                        }
                                        column++;
                                }
                                // Change the entire column to 0
                                while( row <= matrix.length - 1 ) {
                                        if( matrix[row][j] != 0 ) {
                                                matrix[row][j] = 'X';
                                        }
                                        row++;
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