/*
        Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.
        
        Example 1:
                Input: n = 3
                Output: 
                        [
                                [1, 2, 3],
                                [8, 9, 4],
                                [7, 6 ,5]
                        ]
        Example 2:
                Input: n = 1
                Output: 
                        [
                                [ 1 ]
                        ]

        Constraints:
                1) 1 <= n <= 20
*/

/*
 * @param { number } n
 * @return { number[][] }
*/

function moveRight( matrix, i, j, obj ) {
        while( true ) {
                j++;
                if( j > matrix[i].length-1 || Number( matrix[i][j] ) ) {
                        j--;
                        break;
                }
                obj.c++;
                matrix[i][j] = obj.c;
        }
        return [i, j];
}

function moveDown( matrix, i, j, obj ) {
        while( true ) {
                i++;
                if( i > matrix.length-1 || Number( matrix[i][j] ) ) {
                        i--;
                        break;
                }
                obj.c++;
                matrix[i][j] = obj.c;
        }
        return [i, j];
}

function moveLeft( matrix, i, j, obj ) {
        while( true ) {
                j--;
                if( j < 0 || Number( matrix[i][j] ) ) {
                        j++;
                        break;
                }
                obj.c++;
                matrix[i][j] = obj.c;
        }
        return [i, j];
}

function moveUp( matrix, i, j, obj ) {
        while( true ) {
                i--;
                if( i < 0 || Number( matrix[i][j] ) ) {
                        i++;
                        break;
                }
                obj.c++;
                matrix[i][j] = obj.c;
        }
        return [i, j];
}


var generateMatrix = function( n ) {
        const matrix = Array( n );
        for( let i = 0; i < n; i++ ) {
                matrix[i] = Array( n ).fill('-');
        }
        if( matrix[0].length == 0 ) {
                return [];
        }
        let obj = {
                c : 1
        }
        let i = 0;
        let j = 0;
        matrix[i][j] = obj.c;

        while( true ) {
                [right_i, right_j] = moveRight( matrix, i, j, obj );
                [down_i, down_j] = moveDown( matrix, right_i, right_j, obj );
                [left_i, left_j] = moveLeft( matrix, down_i, down_j, obj );
                [up_i, up_j] = moveUp( matrix, left_i, left_j, obj );
                if(right_i === down_i && right_j === down_j ) {
                        break;
                }
                i = up_i;
                j = up_j;
        }

        return matrix;
};

console.log( generateMatrix( 3 ) );