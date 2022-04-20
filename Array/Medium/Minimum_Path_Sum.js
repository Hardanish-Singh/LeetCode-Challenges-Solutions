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
                
                index++;
                k = keys[index];
                v = values[index];
        }while( k !== undefined );
        
        return Object.values( paths )[ Object.values( paths ).length - 1 ];
}