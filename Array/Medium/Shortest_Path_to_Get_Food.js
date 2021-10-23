/*
        You are starving and you want to eat food as quickly as possible. You want to find the shortest path to arrive at any food cell.

        You are given an m x n character matrix, grid, of these different types of cells:

                1) '*' is your location. There is exactly one '*' cell.
                2) '#' is a food cell. There may be multiple food cells.
                3) 'O' is free space, and you can travel through these cells.
                4) 'X' is an obstacle, and you cannot travel through these cells.

        You can travel to any adjacent cell north, east, south, or west of your current location if there is not an obstacle.

        Return the length of the shortest path for you to reach any food cell. If there is no path for you to reach food, return -1.

        Example 1:
                Input: grid = 
                                [
                                        ["X","X","X","X","X","X"],
                                        ["X","*","O","O","O","X"],
                                        ["X","O","O","#","O","X"],
                                        ["X","X","X","X","X","X"]
                                ]
                Output: 3
                Explanation: It takes 3 steps to reach the food.
        
        Example 2:
                Input: grid = 
                                [
                                        ["X","X","X","X","X"],
                                        ["X","*","X","O","X"],
                                        ["X","O","X","#","X"],
                                        ["X","X","X","X","X"]
                                ]
                Output: -1
                Explanation: It is not possible to reach the food.
        
        Example 3:
                Input: grid = 
                                [
                                        ["X","X","X","X","X","X","X","X"],
                                        ["X","*","O","X","O","#","O","X"],
                                        ["X","O","O","X","O","O","X","X"],
                                        ["X","O","O","O","O","#","O","X"],
                                        ["X","X","X","X","X","X","X","X"]
                                ]
                Output: 6
                Explanation: There can be multiple food cells. It only takes 6 steps to reach the bottom food.
        
        Example 4:
                Input: grid = 
                                [
                                        ["O","*"],
                                        ["#","O"]
                                ]
                Output: 2
        
        Example 5:
                Input: grid = 
                                [
                                        ["X","*"],
                                        ["#","X"]
                                ]
                Output: -1
        
        Constraints:
                1) m == grid.length
                2) n == grid[i].length
                3) 1 <= m, n <= 200
                4) grid[row][col] is '*', 'X', 'O', or '#'.
                5) The grid contains exactly one '*'.
*/

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
