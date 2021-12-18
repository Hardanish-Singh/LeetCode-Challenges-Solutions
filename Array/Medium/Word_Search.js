function is_visited ( ...args ) {
        let [ grid, i, j, count, word ] = args;
        if( grid[i][j] === word[count] && grid[i][j] != '2' ) {
                return i + "," + j;
        }
}

function move_left( ...args ) {
        let [ grid, i, j, count, word ] = args;
        --j;
        if( j >= 0  ) {
                return is_visited( grid, i, j, count, word );
        }
}

function move_top( ...args ) {
        let [ grid, i, j, count, word ] = args;
        --i;
        if( i >= 0 ) {
                return is_visited( grid, i, j, count, word );  
        }
}

function move_right( ...args ) {
        let [ grid, i, j, count, word ] = args;
        ++j;
        if( j <= grid[i].length - 1 ) {
                return is_visited( grid, i, j, count, word );
        }
}

function move_down( ...args ) {
        let [ grid, i, j, count, word ] = args;
        ++i;
        if( i <= grid.length - 1 ) {
                return is_visited( grid, i, j, count, word );  
        }
}

function move_in_all_four_directions ( ...args ) {
        let [ grid, i, j, stack, count, word, snapshot_array ] = args;
        let leftPosition = "";
        let topPosition = "";
        let rightPosition = "";
        let bottomPosition = "";
        let leftCounter = 0;
        let topCounter = 0;
        let rightCounter = 0;
        let bottomCounter = 0;

        // MARK THE COORDINATE AS VISITED
        grid[i][j] = '2';
        
        // MOVE LEFT & ADD COORDINATES TO STACK
        leftPosition = move_left( grid, i, j, count, word );
        if( leftPosition ) {
                leftCounter = ( Number( count ) + 1 );
                stack.push( leftPosition + "," + leftCounter );
        }
        // MOVE TOP & ADD COORDINATES TO STACK
        topPosition = move_top( grid, i, j, count, word );
        if( topPosition ) {
                topCounter = ( Number( count ) + 1 );
                stack.push( topPosition + "," + topCounter );
        }
        // MOVE RIGHT & ADD COORDINATES TO STACK
        rightPosition = move_right( grid, i, j, count, word );
        if( rightPosition ) {
                rightCounter = ( Number( count ) + 1 );
                stack.push( rightPosition + "," + rightCounter );
        }
        // MOVE DOWN & ADD COORDINATES TO STACK
        bottomPosition = move_down( grid, i, j, count, word );
        if( bottomPosition ) {
                bottomCounter = ( Number( count ) + 1 );
                stack.push( bottomPosition + "," + bottomCounter );
        }

        if( 
                ! leftPosition 
                        && 
                ! topPosition 
                        && 
                ! rightPosition
                        && 
                ! bottomPosition
                        &&
                snapshot_array.length > 0
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


function perform_push_pop_operation( ...args ) {
        let [stack, grid, word, snapshot_array] = args;
        while( stack.length != 0 ) {
                // DFS METHOD
                [i, j, count] = stack.pop().split(",");
                if( count == word.length ) {
                        grid[i][j] = '2';
                        return true;
                }
                grid = move_in_all_four_directions( grid, i, j, stack, count, word, snapshot_array );
        }
}

var exist = function( grid, word ) {
        let copy_grid = JSON.parse( JSON.stringify( grid ) );
        let snapshot_array = [];

        for( let i = 0; i < grid.length; i++ ) {
                for( let j = 0; j < grid[i].length; j++ ) {
                        // RESTORE TO ORGINIAL GRID
                        grid = JSON.parse( JSON.stringify( copy_grid ) );
                        if( grid[i][j] === word[0] ) {
                                let stack = [];
                                move_in_all_four_directions( 
                                                                grid,
                                                                i,
                                                                j,
                                                                stack,
                                                                defaultCount = 1,
                                                                word,
                                                                snapshot_array
                                                        );
                                let isFound = perform_push_pop_operation( 
                                                                                stack,
                                                                                grid,
                                                                                word,
                                                                                snapshot_array
                                                                        );
                                if( isFound ) {
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