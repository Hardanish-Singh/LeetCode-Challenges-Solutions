/*
 * @param { number[] } stones
 * @return { number }
*/

var lastStoneWeight = function( stones ) {
        while( stones.length !== 1 ) {
                stones.sort( (a, b) => b - a );
                let x = stones.shift();
                let y = stones.shift();
                let diff = x !== y ? x - y : 0;
                stones.push( diff );
        }
        return stones[0];
};