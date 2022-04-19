var minPathSum = function( grid ) {
        var i = 0;
        var j = 0;
        var sum = grid[i][j];
        var key = i + "," + j;
        var paths = {
            [key] : sum
        };
        var index = 0;
        var keys = [key];
        var values = [sum];
            
        while( true ) {
            let k = keys[index];
            // let k = Object.keys(paths)[index];
            if( !k ) break;
            let v = values[index++];
            // let v = Object.values(paths)[index++];
            [i, j] = k.split(",").map(Number);
            let temp;
                
            // MOVE RIGHT
            if( j + 1 <= grid[0].length - 1 ) {
                temp = paths[ [ i + "," + ( j + 1 ) ] ];
                if( temp ) {
                    paths[ [ i + "," + ( j + 1 ) ] ] = Math.min( 
                                                        temp,
                                                        v + grid[i][j+1]
                                                    );
                    values[ keys.indexOf( i + "," + ( j + 1 ) ) ] = Math.min( 
                                                        temp,
                                                        v + grid[i][j+1]
                                                    );
                } else {
                    paths[ [ i + "," + ( j + 1 ) ] ] = v + grid[i][j+1];
                    keys.push(i + "," + ( j + 1 ));
                    values.push(v + grid[i][j+1]);
                }
            }
                
            // MOVE DOWN
            if( i + 1 <= grid.length - 1 ) {
                temp = paths[ [ ( i + 1 ) + "," + j ] ];
                if( temp ) {
                    paths[ [ ( i + 1 ) + "," + j ] ] = Math.min( 
                                                        temp,
                                                        v + grid[i+1][j]
                                                    );
                    values[ keys.indexOf( ( i + 1 ) + "," + j ) ] = Math.min( 
                                                        temp,
                                                        v + grid[i+1][j]
                                                    );
                }
                else {
                    paths[ [ ( i + 1 ) + "," + j ] ] = v + grid[i+1][j];
                    keys.push(( i + 1 ) + "," + j);
                    values.push(v + grid[i+1][j]);
                }
            }
        }
        
        return Object.values( paths )[ Object.values( paths ).length - 1 ];
            
            // for( let i = 1; i < grid[0].length; i++ ) {
            //         grid[0][i] = grid[0][i-1] + grid[0][i];
            // }
            // for( let i = 1; i < grid.length; i++ ) {
            //         grid[i][0] = grid[i-1][0] + grid[i][0];
            // }
            // for( let i = 1; i < grid.length; i++ ) {
            //         for( let j = 1; j < grid[0].length; j++ ) {
            //                 grid[i][j] += Math.min( grid[i-1][j], grid[i][j-1] );
            //         }
            // }
            // return grid[grid.length-1][grid[0].length-1];
    }