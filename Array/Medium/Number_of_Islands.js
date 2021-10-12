function is_visited( grid, i, j ) {
        if( grid[i][j] === '1' ) {
                grid[i][j] = '2';
                return i + "," + j;
        } 
        else {
                return;
        }
}

function moveLeft( grid, i, j ) {
        j--;
        if( j < 0 ) {
                return;
        }
        return is_visited( grid, i, j );
}

function moveTop( grid, i, j ) {
        i--;
        if( i < 0 ) {
                return;
        }
        return is_visited( grid, i, j );
}

function moveRight( grid, i, j ) {
        j++;
        if( j > grid[i].length-1 ) {
                return;
        }
        return is_visited( grid, i, j );
}

function moveDown( grid, i, j ) {
        i++;
        if( i > grid.length-1 ) {
                return;
        }
        return is_visited( grid, i, j );
}

function move_in_all_four_directions( grid, i, j, queue ) {
        let position = "";
        // MARK THE POSITION AS VISITED 
        grid[i][j] = '2';
        // MOVE LEFT & ADD COORDINATES TO QUEUE
        position = moveLeft( grid, i, j );
        if( position ) {
                queue.push( position );
        }
        // MOVE TOP & ADD COORDINATES TO QUEUE
        position = moveTop( grid, i, j );
        if( position ) {
                queue.push( position );
        }
        // MOVE RIGHT & ADD COORDINATES TO QUEUE
        position = moveRight( grid, i, j );
        if( position ) {
                queue.push( position );
        }
        // MOVE DOWN & ADD COORDINATES TO QUEUE
        position = moveDown( grid, i, j );
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