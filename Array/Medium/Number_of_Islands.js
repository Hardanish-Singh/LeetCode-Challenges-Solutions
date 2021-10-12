function is_visited( grid, i, j ) {
        if( grid[i][j] === '1' ) {
                // MARK THE POSITION AS VISITED
                grid[i][j] = '2';
                return i + "," + j;
        }
}

function move_left( grid, i, j ) {
        if( --j >= 0 ) {
                return is_visited( grid, i, j );
        }
}

function move_top( grid, i, j ) {
        if( --i >= 0 ) {
                return is_visited( grid, i, j );
        }
}

function move_right( grid, i, j ) {
        if( ++j <= grid[i].length-1 ) {
                return is_visited( grid, i, j );
        }
}

function move_down( grid, i, j ) {
        if( ++i <= grid.length-1 ) {
                return is_visited( grid, i, j );
        }
}

function move_in_all_four_directions( grid, i, j, queue ) {
        let position = "";
        // MARK THE POSITION AS VISITED 
        grid[i][j] = '2';
        // MOVE LEFT & ADD COORDINATES TO QUEUE
        position = move_left( grid, i, j );
        if( position ) {
                queue.push( position );
        }
        // MOVE TOP & ADD COORDINATES TO QUEUE
        position = move_top( grid, i, j );
        if( position ) {
                queue.push( position );
        }
        // MOVE RIGHT & ADD COORDINATES TO QUEUE
        position = move_right( grid, i, j );
        if( position ) {
                queue.push( position );
        }
        // MOVE DOWN & ADD COORDINATES TO QUEUE
        position = move_down( grid, i, j );
        if( position ) {
                queue.push( position );
        }
}

function perform_enqueue_dequeue_operation( queue, grid ) {
        while( queue.length != 0 ) {
                [i, j] = queue.shift().split(",");
                move_in_all_four_directions( grid, i, j, queue )
        }
}

function numIslands( grid ) {
        let queue = [];
        let number_of_islands = 0;
        for( let i=0; i<grid.length; i++ ) {
                for( let j=0; j<grid[i].length; j++ ) {
                        if( grid[i][j] === '1' ) {
                                number_of_islands++;
                                //MOVE IN ALL FOUR DIRECTIONS( LEFT, TOP, RIGHT, DOWN )
                                move_in_all_four_directions( grid, i, j, queue );
                                // PICK COORDINATES FROM QUEUE, PERFORM ENQUEUE & DEQUEUE OPERATIONS UNTIL QUEUE IS EMPTY
                                perform_enqueue_dequeue_operation( queue, grid );
                        }
                }
        }
        return number_of_islands;
};