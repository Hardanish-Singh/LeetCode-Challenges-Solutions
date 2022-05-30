/*
        You are climbing a staircase. It takes n steps to reach the top.
        Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top ?

        Example 1:
                Input: n = 2
                Output: 2
                Explanation: There are two ways to climb to the top.
                1. 1 step + 1 step
                2. 2 steps
        
        Example 2:
                Input: n = 3
                Output: 3
                Explanation: There are three ways to climb to the top.
                1. 1 step + 1 step + 1 step
                2. 1 step + 2 steps
                3. 2 steps + 1 step
        
        Constraints:
                1) 1 <= n <= 45
*/


// SOLUTION 1
var climbStairs = function(n) {
        let stairs = new Set();
        stairs.add( '1'.repeat( n ) );
        const iterator = stairs.values();
        let stair = iterator.next().value;
        let count = 0;

        while( stair !== undefined ) {
                let temp = stair;
                let t1 = temp.slice( 0, stair.lastIndexOf( 2 ) + 1 );
                for( let i = stair.lastIndexOf( 2 ) + 1; i < stair.length - 1; i++ ) {
                        stairs.add( t1 + 2 +  temp.slice( i + 2 ) );
                        t1 += temp[i];
                }
                stairs.delete( stair );
                count++;
                stair = iterator.next().value;
        }

        return count;
};

// SOLUTION 2
var climbStairs = function( n ) {
        let stairs = [0, 1, 2];        
        for( let i = 3; i <= n; i++ ) {
                stairs[ i ] = stairs[ i - 1 ] + stairs[ i - 2 ]; 
        }
        return stairs[ n ];
}