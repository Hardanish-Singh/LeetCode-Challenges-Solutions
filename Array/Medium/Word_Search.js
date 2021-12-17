const is_visited = ( grid, i, j, c, word ) => {
        if( grid[i][j] === word[c] && grid[i][j] != '2' ) {
                return i + "," + j;
        }
}

const move_left = ( grid, i, j, c, word ) => {
        --j;
        if( j >= 0  ) {
                return is_visited( grid, i, j, c, word );
        }
}

const move_top = ( grid, i, j, c, word ) => {
        --i;
        if( i >= 0 ) {
                return is_visited( grid, i, j, c, word );  
        }
}

const move_right = ( grid, i, j, c, word ) => {
        ++j;
        if( j <= grid[i].length - 1 ) {
                return is_visited( grid, i, j, c, word );
        }
}

const move_down = ( grid, i, j, c, word ) => {
        ++i;
        if( i <= grid.length - 1 ) {
                return is_visited( grid, i, j, c, word );  
        }
}

const move_in_all_four_directions = ( grid, i, j, queue, c, word, snapshot_array ) => {
        let left_position = "";
        let top_position = "";
        let right_position = "";
        let bottom_position = "";
        let leftCounter = 0;
        let topCounter = 0;
        let rightCounter = 0;
        let bottomCounter = 0;

        grid[i][j] = '2';
        
        // MOVE LEFT & ADD COORDINATES TO QUEUE
        left_position = move_left( grid, i, j, c, word );
        if( left_position ) {
                leftCounter = ( Number(c) + 1 )
                queue.push( left_position + "," + leftCounter );
        }
        // MOVE TOP & ADD COORDINATES TO QUEUE
        top_position = move_top( grid, i, j, c, word );
        if( top_position ) {
                topCounter = ( Number(c) + 1 );
                queue.push( top_position + "," + topCounter );
        }
        // MOVE RIGHT & ADD COORDINATES TO QUEUE
        right_position = move_right( grid, i, j, c, word );
        if( right_position ) {
                rightCounter = ( Number(c) + 1 );
                queue.push( right_position + "," + rightCounter );
        }
        // MOVE DOWN & ADD COORDINATES TO QUEUE
        bottom_position = move_down( grid, i, j, c, word );
        if( bottom_position ) {
                bottomCounter = ( Number(c) + 1 );
                queue.push( bottom_position + "," + bottomCounter );
        }
        if( 
                ! left_position 
                        && 
                ! top_position 
                        && 
                ! right_position
                        && 
                ! bottom_position
        ) {
                grid = snapshot_array.pop();
        }
        if( leftCounter == topCounter && leftCounter > 0 && topCounter > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( leftCounter == rightCounter && leftCounter > 0 && rightCounter > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( leftCounter == bottomCounter && leftCounter > 0 && bottomCounter > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( topCounter == rightCounter && topCounter > 0 && rightCounter > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( topCounter == bottomCounter && topCounter > 0 && bottomCounter > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( rightCounter == bottomCounter && rightCounter > 0 && bottomCounter > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        return grid;
}


const perform_enqueue_dequeue_operation = ( queue, grid, word, snapshot_array ) => {
        while( queue.length != 0 ) {
                [i, j, c] = queue.pop().split(",");
                if( c == word.length ) {
                        grid[i][j] = '2';
                        return true;
                }
                grid = move_in_all_four_directions( grid, i, j, queue, c, word, snapshot_array );
        }
}

var exist = function( grid, word ) {
        let copy_grid = JSON.parse(JSON.stringify(grid));
        let snapshot_array = [];
        for( let i=0; i<grid.length; i++ ) {
                for( let j=0; j<grid[i].length; j++ ) {
                        grid = JSON.parse(JSON.stringify(copy_grid));
                        if( grid[i][j] === word[0] ) {
                                let queue = [];
                                move_in_all_four_directions( grid, i, j, queue, 1, word, snapshot_array );
                                let f = perform_enqueue_dequeue_operation( queue, grid, word, snapshot_array );
                                if( f ) {
                                        return true;
                                }
                                if( grid[i][j] == '2' && word.length == 1 ) {
                                        return true;
                                }
                        }
                }
        }

        
        return false;
};