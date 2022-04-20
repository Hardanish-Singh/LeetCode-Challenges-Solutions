/*
        Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
        Note: You can only move either down or right at any point in time.

        Example 1:
                Input: grid = 
                                [
                                        [1, 3, 1],
                                        [1, 5, 1],
                                        [4, 2, 1]
                                ]
                Output: 7
                Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
        
        Example 2:
                Input: grid = 
                                [
                                        [1, 2, 3],
                                        [4 ,5, 6]
                                ]
                Output: 12
        
        Constraints:
                1) m == grid.length
                2) n == grid[i].length
                3) 1 <= m, n <= 200
                4) 0 <= grid[i][j] <= 100
*/

var updatePath = function( ...args ) {
        [paths, key, sum, values, keys] = args;
        if( paths[ key ] ) {
                paths[ key ] = Math.min( paths[ key ], sum );
                values[ keys.indexOf( key ) ] = Math.min( paths[ key ], sum );
        } else {
                paths[ key ] = sum;
                keys.push( key );
                values.push( sum );
        }
}

var minPathSum = function( grid ) {
        var i = 0;
        var j = 0;
        var sum = grid[i][j];
        var key = i + "," + j;
        var paths = {
                [key] : sum
        };
        var index = 0;
        var keys = [ key ];
        var values = [ sum ];
        var k = keys[index];
        var v = values[index];
        
        do {
                [i, j] = k.split(",").map(Number);

                // MOVE RIGHT
                if( j + 1 <= grid[0].length - 1 ) {
                        key = i + "," + ( j + 1 );
                        sum = v + grid[ i ][ j + 1 ];
                        updatePath( paths, key, sum, values, keys );
                }

                // MOVE DOWN
                if( i + 1 <= grid.length - 1 ) {
                        key = ( i + 1 ) + "," + j;
                        sum = v + grid[ i + 1 ][ j ];
                        updatePath( paths, key, sum, values, keys );
                }
                
                k = keys[++index];
                v = values[index];
        }while( k );
        
        return Object.values( paths )[ Object.values( paths ).length - 1 ];
}