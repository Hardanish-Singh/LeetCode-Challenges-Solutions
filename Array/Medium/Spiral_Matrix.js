/*
        Given an m x n matrix, 
                return all elements of the matrix in spiral order 
                or 
                return the array elements arranged from outermost elements to the middle element, traveling clockwise.
        
        Input: matrix = 
                        [ 
                                [1, 2, 3],
                                [4, 5, 6],
                                [7, 8, 9]
                        ]
        Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

        Input: matrix = 
                        [
                                [1,  2,  3,  4],
                                [5,  6,  7,  8],
                                [9, 10, 11, 12]
                        ]
        Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

        Constraints:
                1) m == matrix.length
                2) n == matrix[i].length
                3) 1 <= m, n <= 10
                4) -100 <= matrix[i][j] <= 100
*/

/*
 * @param {number[][]} matrix
 * @return {number[]}
*/

function moveRight( matrix, i, j, sprialOrder ) {
        while( true ) {
                j++;
                if( j > matrix[i].length-1 || matrix[i][j] == '-' ) {
                        j--;
                        break;
                }
                sprialOrder.push( matrix[i][j] );
                matrix[i][j] = '-';
        }
        return [i, j];
}

function moveDown( matrix, i, j, sprialOrder ) {
        while( true ) {
                i++;
                if( i > matrix.length-1 || matrix[i][j] == '-' ) {
                        i--;
                        break;
                }
                sprialOrder.push( matrix[i][j] );
                matrix[i][j] = '-';
        }
        return [i, j];
}

function moveLeft( matrix, i, j, sprialOrder ) {
        while( true ) {
                j--;
                if( j < 0 || matrix[i][j] == '-' ) {
                        j++;
                        break;
                }
                sprialOrder.push( matrix[i][j] );
                matrix[i][j] = '-';
        }
        return [i, j];
}

function moveUp( matrix, i, j, sprialOrder ) {
        while( true ) {
                i--;
                if( i < 0 || matrix[i][j] == '-' ) {
                        i++;
                        break;
                }
                sprialOrder.push( matrix[i][j] );
                matrix[i][j] = '-';
        }
        return [i, j];
}

var spiralOrder = function( matrix ) {
        let sprialOrder = [];
        let i = 0;
        let j = 0;
        sprialOrder.push( matrix[i][j] );
        matrix[i][j] = '-';

        while( true ) {
                [right_i, right_j] = moveRight( matrix, i, j, sprialOrder );
                [down_i, down_j] = moveDown( matrix, right_i, right_j, sprialOrder );
                [left_i, left_j] = moveLeft( matrix, down_i, down_j, sprialOrder );
                [up_i, up_j] = moveUp( matrix, left_i, left_j, sprialOrder );
                if(right_i === down_i && right_j === down_j ) {
                        break;
                }
                i = up_i;
                j = up_j;
        }

        return sprialOrder;
};