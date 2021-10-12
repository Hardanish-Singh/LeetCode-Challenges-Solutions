function moveLeft( grid, i, j ) {
        j--;
        if( j < 0 ) {
                return;
        }
        if( grid[i][j] === '1' ) {
                grid[i][j] = '2';
                return i + "," + j;
        } 
        else {
                return;
        }
}

function moveTop( grid, i, j ) {
        i--;
        if( i < 0 ) {
                return;
        }
        if( grid[i][j] === '1' ) {
                grid[i][j] = '2';
                return i + "," + j;
        } 
        else {
                return;
        }
}

function moveRight( grid, i, j ) {
        j++;
        if( j > grid[i].length-1 ) {
                return;
        }
        if( grid[i][j] === '1' ) {
                grid[i][j] = '2';
                return i + "," + j;
        } 
        else {
                return;
        }
}

function moveDown( grid, i, j ) {
        i++;
        if( i > grid.length-1 ) {
                return;
        }
        if( grid[i][j] === '1' ) {
                grid[i][j] = '2';
                return i + "," + j;
        } 
        else {
                return;
        }
}

function perform_enqueue_dequeue_operation( queue, grid ) {
        while( queue.length != 0 ) {
                let positions = queue[0].split(",");
                let i = positions[0];
                let j = positions[1];
                queue.splice(0,1);
                // MOVE LEFT & ADD COORDINATES TO QUEUE
                position = moveLeft( grid, i, j );
                if( position ) queue.push( position );
                // MOVE TOP & ADD COORDINATES TO QUEUE
                position = moveTop( grid, i, j );
                if( position ) queue.push( position );
                // MOVE RIGHT & ADD COORDINATES TO QUEUE
                position = moveRight( grid, i, j );
                if( position ) queue.push( position );
                // MOVE DOWN & ADD COORDINATES TO QUEUE
                position = moveDown( grid, i, j );
                if( position ) queue.push( position );
        }
}

function numIslands( grid ) {
        let queue = [];
        let position = "";
        let number_of_islands = 0;
        for( let i=0; i<grid.length; i++ ) {
                for( let j=0; j<grid[i].length; j++ ) {
                        if( grid[i][j] === '1' ) {
                                number_of_islands++;
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
                                // PICK COORDINATES FROM QUEUE, PERFORM ENQUEUE & DEQUEUE OPERATIONS UNTIL QUEUE IS EMPTY
                                perform_enqueue_dequeue_operation( queue, grid );
                        }
                }
        }
        return number_of_islands;
};