/*
 * @param { number } m
 * @param { number } n
 * @return { number }
*/

/*
        SOLUTION 1 (BRUTE FORCE)
*/
const move_right = ( matrix, i, j ) => ++j <= matrix[i].length-1 ? ( i + "," + j ) : null;

const move_down  = ( matrix, i, j ) => ++i <= matrix.length-1 ? ( i + "," + j ) : null;

function move_in_right_down_directions( matrix, i, j, queue ) {
        let position = "";
        // MOVE RIGHT & ADD COORDINATES TO QUEUE
        position = move_right( matrix, i, j );
        position ? queue.push( position ) : null;
        // MOVE DOWN & ADD COORDINATES TO QUEUE
        position = move_down( matrix, i, j );
        position ? queue.push( position ) : null;
}

function perform_enqueue_dequeue_operation( queue, matrix ) {
        let count = 0;
        while( queue.length != 0 ) {
                [i, j] = queue.shift().split(",");
                if( i == matrix.length - 1 && j == matrix[0].length - 1 ) {
                        count++;
                }
                move_in_right_down_directions( matrix, i, j, queue );
        }
        return count;
}

var uniquePaths = function( m, n ) {
        const matrix = Array( m );
        for( let i = 0; i < m; i++ ) {
                matrix[i] = Array( n ).fill('0');
        }
        let i = 0;
        let j = 0;
        let queue = [];
        move_in_right_down_directions( matrix, i, j, queue );
        let count = perform_enqueue_dequeue_operation( queue, matrix );
        return count;
};