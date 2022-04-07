/*
        You are given an array of integers stones where stones[i] is the weight of the i^th stone.
        We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. 
        The result of this smash is:
                1) If x == y, both stones are destroyed, and
                2) If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
        At the end of the game, there is at most one stone left.

        Return the smallest possible weight of the left stone. If there are no stones left, return 0.
*/

/*
 * @param { number[] } stones
 * @return { number }
*/

var lastStoneWeight = function( stones ) {
        if( stones.length === 0 ) {
                return 0;
        }
        while( stones.length !== 1 ) {
                stones.sort( (a, b) => b - a );
                let x = stones.shift();
                let y = stones.shift();
                let diff = x !== y ? x - y : 0;
                stones.push( diff );
        }
        return stones[0];
};