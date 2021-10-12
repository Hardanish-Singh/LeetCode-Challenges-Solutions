/*
        Given an m x n 2D binary grid, which represents a map of '1's ( land ) and '0's ( water ), return the number of islands.

        An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically directions and not diagonal.
        You may assume all four edges of the grid are all surrounded by water.

        Example 1:

        Input: 
                grid = 
                        [
                                ["1","1","1","1","0"],
                                ["1","1","0","1","0"],
                                ["1","1","0","0","0"],
                                ["0","0","0","0","0"]
                        ]
        Output: 1
        
        Example 2:

        Input: 
                grid = 
                        [
                                ["1","1","0","0","0"],
                                ["1","1","0","0","0"],
                                ["0","0","1","0","0"],
                                ["0","0","0","1","1"]
                        ]
        Output: 3

        Constraints:
                1) m == grid.length
                2) n == grid[i].length
                3) 1 <= m, n <= 300
                4) grid[i][j] is '0' or '1'.
        
        Companies Who Asked this Question:
                1) Amazon
                2) Microsoft
                3) Bloomberg
                4) Google
                5) LinkedIn
                6) Facebook
                7) Apple
                8) Oracle
                9) Qualtrics
                10) Expedia
                11) Goldman Sachs
                12) Walmart Labs
                13) Yandex
                14) Uber
                15) DoorDash
                16) Adobe
                17) eBay
                18) SAP
                19) Nvidia
                20) ByteDance
*/

const is_visited = ( grid, i, j ) => grid[i][j] === '1' ? ( grid[i][j] = '2', (i + "," + j) ) : null;

const move_left  = ( grid, i, j ) => --j >= 0 ? is_visited( grid, i, j ) : null;

const move_top   = ( grid, i, j ) => --i >= 0 ? is_visited( grid, i, j ) : null;

const move_right = ( grid, i, j ) => ++j <= grid[i].length-1 ? is_visited( grid, i, j ) : null;

const move_down  = ( grid, i, j ) => ++i <= grid.length-1 ? is_visited( grid, i, j ) : null;

function move_in_all_four_directions( grid, i, j, queue ) {
        let position = "";
        // MARK THE POSITION AS VISITED 
        grid[i][j] = '2';
        // MOVE LEFT & ADD COORDINATES TO QUEUE
        position = move_left( grid, i, j );
        position ? queue.push( position ) : null;
        // MOVE TOP & ADD COORDINATES TO QUEUE
        position = move_top( grid, i, j );
        position ? queue.push( position ) : null;
        // MOVE RIGHT & ADD COORDINATES TO QUEUE
        position = move_right( grid, i, j );
        position ? queue.push( position ) : null;
        // MOVE DOWN & ADD COORDINATES TO QUEUE
        position = move_down( grid, i, j );
        position ? queue.push( position ) : null;
}

function perform_enqueue_dequeue_operation( queue, grid ) {
        while( queue.length != 0 ) {
                [i, j] = queue.shift().split(",");
                move_in_all_four_directions( grid, i, j, queue );
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