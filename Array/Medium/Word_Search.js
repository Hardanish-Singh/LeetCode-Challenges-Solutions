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
        let a = 0;
        let b = 0;
        let cc = 0;
        let d = 0;
        grid[i][j] = '2';
        // MOVE LEFT & ADD COORDINATES TO QUEUE
        left_position = move_left( grid, i, j, c, word );
        if( left_position ) {
                queue.push(left_position + "," + ( Number(c) + 1 ));
                a = ( Number(c) + 1 );
        }
        // MOVE TOP & ADD COORDINATES TO QUEUE
        top_position = move_top( grid, i, j, c, word );
        if( top_position ) {
                queue.push(top_position + "," + ( Number(c) + 1 ));
                b = ( Number(c) + 1 );
        }
        // MOVE RIGHT & ADD COORDINATES TO QUEUE
        right_position = move_right( grid, i, j, c, word );
        if( right_position ) {
                queue.push(right_position + "," + ( Number(c) + 1 ));
                cc = ( Number(c) + 1 );
        }
        // MOVE DOWN & ADD COORDINATES TO QUEUE
        bottom_position = move_down( grid, i, j, c, word );
        if( bottom_position ) {
                queue.push(bottom_position + "," + ( Number(c) + 1 ));
                d = ( Number(c) + 1 );
        }
        if( left_position == undefined && top_position == undefined && right_position == undefined && bottom_position == undefined ) {
                grid = snapshot_array.pop();
        }
        if( a == b && a > 0 && b > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( a == cc && a > 0 && cc > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( a == d && a > 0 && d > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( b == cc && b > 0 && cc > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( b == d && b > 0 && d > 0 ) {
                snapshot_array.push( JSON.parse( JSON.stringify( grid ) ) );
        }
        if( cc == d && cc > 0 && d > 0 ) {
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