

// SOLUTION 2
var climbStairs = function( n ) {
        let stairs = [0, 1, 2];        
        for( let i = 3; i <= n; i++ ) {
                stairs[ i ] = stairs[ i - 1 ] + stairs[ i - 2 ]; 
        }
        return stairs[ n ];
}