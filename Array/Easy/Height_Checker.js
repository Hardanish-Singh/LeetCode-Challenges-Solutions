/*
 * @param { number[] } heights
 * @return { number }
*/

var heightChecker = function( heights ) {
        var expected = [...heights].sort( ( a, b ) => a - b );
        var differentHeights = 0;
        for( let i = 0; i < heights.length; i++ ) {
                if( heights[i] !== expected[i] ) {
                        differentHeights++;
                }
        }
        return differentHeights;
};