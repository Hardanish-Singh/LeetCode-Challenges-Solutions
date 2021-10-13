/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
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
                                 // MOVE IN ALL FOUR DIRECTIONS( LEFT, TOP, RIGHT, DOWN )
                                 move_in_all_four_directions( grid, i, j, queue );
                                 // PICK COORDINATES FROM QUEUE, PERFORM ENQUEUE & DEQUEUE OPERATIONS UNTIL QUEUE IS EMPTY
                                 perform_enqueue_dequeue_operation( queue, grid );
                         }
                 }
         }
         return number_of_islands;
 };
 
var numIslands2 = function( m, n, positions ) {
         const grid = Array(m);
         for( let i = 0; i < m; i++ ) {
                 grid[i] = Array(n).fill('0');
         }
         let number_of_islands = [];
         for( let i=0; i<positions.length; i++ ) {
                 let m = positions[i][0];
                 let n = positions[i][1];
                 grid[m][n] = '1';
                 number_of_islands.push(numIslands( JSON.parse(JSON.stringify(grid))));
         }
         return number_of_islands;
 };