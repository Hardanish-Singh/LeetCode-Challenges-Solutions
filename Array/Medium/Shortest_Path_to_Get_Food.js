/*
 * @param {character[][]} grid
 * @return {number}
*/

function is_visited( grid, i, j ) {
        if( grid[i][j] === 'O' ) {
                grid[i][j] = 'X';
                return i + "," + j;
        }
        else if( grid[i][j] === '#' ) {
                return i + "," + j;
        }
        return null;
}

const move_left  = ( grid, i, j ) => --j >= 0 ? is_visited( grid, i, j ) : null;

const move_top   = ( grid, i, j ) => --i >= 0 ? is_visited( grid, i, j ) : null;

const move_right = ( grid, i, j ) => ++j <= grid[i].length-1 ? is_visited( grid, i, j ) : null;

const move_down  = ( grid, i, j ) => ++i <= grid.length-1 ? is_visited( grid, i, j ) : null;

function move_in_all_four_directions( grid, i, j, queue, c ) {
        let position = "";
        grid[i][j] = 'X';
        position = move_left( grid, i, j );
        position ? queue.push( position + "," + ( Number(c) + 1 ) ) : null;
        position = move_top( grid, i, j );
        position ? queue.push( position + "," + ( Number(c) + 1 ) ) : null;
        position = move_right( grid, i, j );
        position ? queue.push( position + "," + ( Number(c) + 1 ) ) : null;
        position = move_down( grid, i, j );
        position ? queue.push( position + "," + ( Number(c) + 1 ) ) : null;
}

function perform_enqueue_dequeue_operation( queue, grid ) {
        while( queue.length != 0 ) {
                [i, j, c] = queue.shift().split(",");
                if( grid[+i][+j] === "#" ) {
                        queue.push(i + "," + j + "," + c);
                        break;
                }
                move_in_all_four_directions( grid, i, j, queue, c );
        }
}

var getFood = function(grid) {
        let queue = [];
        for( let i=0; i<grid.length; i++ ) {
                for( let j=0; j<grid[i].length; j++ ) {
                        if( grid[i][j] === '*' ) {
                                move_in_all_four_directions( grid, i, j, queue, 0 );
                                perform_enqueue_dequeue_operation( queue, grid );
                                i = grid.length;
                                break;
                        }
                }
        }
        return queue.length > 0 ? Number( queue[queue.length-1].split(",")[2] ) : -1;
};
